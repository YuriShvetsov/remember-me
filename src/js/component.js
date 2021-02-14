const root = document.getElementById('root');

function createElement(tag, className, content) {
  const element = document.createElement(tag);

  element.classList.add(className);
  element.innerHTML = content;

  return element;
}

function addTitle(text) {
  const title = createElement('h1', 'title', text);

  root.appendChild(title);
}

function addParagraph(text) {
  const paragraph = createElement('p', 'paragraph', text);

  root.appendChild(paragraph);
}

addTitle('Webpack 4. Base build');
addParagraph('That build uses babel loader, style loaders and more things');
