// const body = document.querySelector('body'); // you can also use 'document.body'
// const newParagraph = document.createElement('p');
// newParagraph.innerText = 'This paragraph will be added to the body!';
// newParagraph.style.background = 'red';
// body.appendChild(newParagraph);


const body = document.querySelector('body');
body.addEventListener('click', function() {
  body.style.background = 'black';
});