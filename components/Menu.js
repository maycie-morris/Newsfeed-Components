/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/


/* New component */

function menuMaker(data) {
  const menuD = document.createElement('div');
  const menuUl = document.createElement('ul');
  const menuLi = document.createElement('li');

  menuD.appendChild(menuUl);
  menuUl.appendChild(menuLi);

  menuD.classList.add('menu');

  /* Iterate over array */

  data.forEach(ob => {
    const menuLi = document.createElement('li');
    menuLi.innerHTML = ob;
    menuUl.appendChild(menuLi);
    console.log('working')
  });

  /* Select menu button */

  const menuButtonSelect = document.querySelector('.menu-button');

  /* Add Event Listener */

  menuButtonSelect.addEventListener('click', function(event){
    menuD.classList.toggle('menu--open')
  })

  /* Return div */

  return menuD;
};

/* Create menu */

const usingMenuMaker = document.querySelector('.header');
usingMenuMaker.appendChild(menuMaker(menuItems));