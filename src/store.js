import { createStore, createLogger } from 'vuex'

const DEFAULT_DIFFICULTY = 3
const MAX_DIFFICULTY = 10
const GAME_SIZE = 5
const GAME_SPEED = 2000

function genRandomNums(start, end, count) {
  function random() {
    return start + Math.round(Math.random() * end)
  }

  const arr = []

  for (let i = 0; i < count; i++) {
    let number = random()

    if (arr.includes(number)) {
      i--
    } else {
      arr.push(number)
    }
  }

  return arr
}

const isDev = process.env.NODE_ENV !== 'production'
const store = createStore({
  state: {
    status: 'before-init', // init, show, wait, process, win, fail
    fields: [],
    diff: DEFAULT_DIFFICULTY,
    score: 0
  },
  getters: {
    status(state) {
      return state.status
    },
    fields(state) {
      return state.fields
    },
    diff(state) {
      return state.diff
    }
  },
  mutations: {
    SET_EMPTY_FIELDS(state) {
      for (let i = 1; i <= GAME_SIZE ** 2; i++) {
        state.fields.push({
          id: i.toString(),
          isSelected: false,
          value: 0
        })
      }
    },
    SET_FILLED_FIELDS(state) {
      const fieldsCount = GAME_SIZE ** 2
      const randomNums = genRandomNums(0, fieldsCount - 1, state.diff)

      for (let i of randomNums) {
        state.fields[i].value = 1
      }
    },
    CLEAR_FIELDS(state) {
      state.fields.forEach(field => {
        field.isSelected = false
        field.value = 0
      })
    },

    INC_DIFF(state) {
      state.diff++
    },
    RESET_DIFF(state) {
      state.diff = DEFAULT_DIFFICULTY
    },

    INC_SCORE(state) {
      state.score++
    },
    RESET_SCORE(state) {
      state.score = 0
    },

    SELECT_FIELD(state, id) {
      const field = state.fields.find(field => field.id === id)

      field.isSelected = true
    },

    SET_STATUS(state, value) {
      const isValid = ['before-init', 'init', 'show', 'process', 'wait', 'win', 'fail'].includes(value)

      if (!isValid) {
        throw new Error('Error status')
      }

      state.status = value
    }
  },
  actions: {
    init({ commit, dispatch }) {
      commit('SET_EMPTY_FIELDS')
      commit('SET_STATUS', 'init')
    },
    start({ commit }) {
      commit('SET_FILLED_FIELDS')
      commit('SET_STATUS', 'show')
      setTimeout(() => commit('SET_STATUS', 'process'), GAME_SPEED)
    },
    goOnNextLevel({ state, commit, dispatch }) {
      commit('RESET_SCORE')
      commit('CLEAR_FIELDS')
      if (state.diff < MAX_DIFFICULTY) {
        commit('INC_DIFF')
      }
      dispatch('start')
    },

    checkField({ state, commit, dispatch }, id) {
      const field = state.fields.find(field => field.id === id)

      if (field.isSelected) return

      if (field.value === 0) {
        commit('SELECT_FIELD', id)
        commit('SET_STATUS', 'fail')
        setTimeout(() => {
          commit('RESET_DIFF')
          commit('RESET_SCORE')
          commit('CLEAR_FIELDS')
          commit('SET_STATUS', 'init')
        }, GAME_SPEED)
        return
      }
      
      commit('INC_SCORE')
      commit('SELECT_FIELD', id)

      if (state.score === state.diff) {
        commit('SET_STATUS', 'win')
        setTimeout(() => {
          commit('SET_STATUS', 'wait')
        }, GAME_SPEED / 2)
        setTimeout(() => {
          dispatch('goOnNextLevel')
        }, GAME_SPEED)
      }
    }
  },
  plugins: isDev ? [ createLogger() ] : []
})

export default store
