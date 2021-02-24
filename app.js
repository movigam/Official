// menu
const menuIcon = document.querySelector('.menu');
const navBar = document.querySelector('.nav-bar');

menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('change')
});

// about
// const tabItems = document.querySelectorAll('.tab-item');
// const tabContentItem = document.querySelectorAll('.contents-item');

// function selectItem(e) {
//     removeShow();
//     // Grab content item from DOM
//     const tabContentItem = document.querySelector(`#${this.id}-content`);
//     // Add show class
//     tabContentItem.classList.add(`show`);
// }


// function removeShow () {
//     tabContentItem.classList.forEach(item =>  {
//         item.Classlist.remove('show');
//     });
// }

// tabItems.forEach(item => {
// 	item.addEventListener('click', selectItem);
// });
