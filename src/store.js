import { createStore, createLogger } from 'vuex'

const GAME_SIZE = 6
const GAME_SPEED = 2000
const DEFAULT_LEVEL = 1
const MAX_LEVEL = 10

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
    level: DEFAULT_LEVEL,
    score: 0,
    curStrikes: 0,
    maxStrikes: 0
  },
  getters: {
    status(state) {
      return state.status
    },
    fields(state) {
      return state.fields
    },
    level(state) {
      return state.level
    },
    score(state) {
      return state.score
    },
    curStrikes(state) {
      return state.curStrikes
    },
    maxStrikes(state) {
      return state.maxStrikes
    },
    maxLevel() {
      return MAX_LEVEL
    },
    gameSize() {
      return GAME_SIZE
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
      const randomNums = genRandomNums(0, fieldsCount - 1, state.level)

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

    INC_LEVEL(state) {
      state.level++
    },
    RESET_LEVEL(state) {
      state.level = DEFAULT_LEVEL
    },

    INC_SCORE(state) {
      state.score++
    },
    RESET_SCORE(state) {
      state.score = 0
    },

    INC_CUR_STRIKES(state) {
      state.curStrikes++
    },
    RESET_CUR_STRIKES(state) {
      state.curStrikes = 0
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
    init({ commit }) {
      commit('SET_EMPTY_FIELDS')
      commit('SET_STATUS', 'init')
    },
    start({ commit }) {
      commit('SET_FILLED_FIELDS')
      commit('SET_STATUS', 'show')
      setTimeout(() => commit('SET_STATUS', 'process'), GAME_SPEED)
    },
    goToNextLevel({ state, commit, dispatch }) {
      commit('RESET_SCORE')
      commit('CLEAR_FIELDS')
      if (state.level < MAX_LEVEL) {
        commit('INC_LEVEL')
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
          checkStrikes()
          commit('RESET_LEVEL')
          commit('RESET_SCORE')
          commit('RESET_CUR_STRIKES')
          commit('CLEAR_FIELDS')
          commit('SET_STATUS', 'init')
        }, GAME_SPEED * 2)
        return
      }
      
      commit('INC_SCORE')
      commit('SELECT_FIELD', id)

      const allFieldsSelected = (state.score === state.level)
      const isMaxLevel = (state.level === MAX_LEVEL)

      if (allFieldsSelected && isMaxLevel) {
        commit('INC_CUR_STRIKES')
        continueGame()
      } else if (allFieldsSelected && !isMaxLevel) {
        continueGame()
      }

      // Helpers

      function checkStrikes() {
        if (state.curStrikes > state.maxStrikes) {
          state.maxStrikes = state.curStrikes
        }
      }

      function continueGame() {
        commit('SET_STATUS', 'win')
        setTimeout(() => {
          commit('SET_STATUS', 'wait')
        }, GAME_SPEED * 2)
        setTimeout(() => {
          dispatch('goToNextLevel')
        }, GAME_SPEED * 2.5)
      }
    }
  },
  plugins: isDev ? [ createLogger() ] : []
})

export default store
