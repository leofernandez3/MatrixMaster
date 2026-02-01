const btn = document.querySelector('.btn');

btn.addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('#my-form').style.background = 'red';
  document.body.classList.add('bg-dark');
  const items = document.querySelector('.items');
  const lastItem = items.lastElementChild;
  const heading = document.createElement('h1');
  heading.textContent = 'Hello';
  items.replaceChild(heading, lastItem);
  btn.style.backgroundColor = 'green';
});
