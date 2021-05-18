const readMore = document.querySelector('.btn_learn');

const text = document.querySelector('.text');

readMore.addEventListener('click', (e) => {
    text.classList.toggle('show-more');
    if (readMore.innerText === 'Learn More') {
        readMore.innerText = 'See less';
    } else {
        readMore.innerText = 'Learn More';
    }
})


/*    smooth scrolling */


// Scroll to specific values
// scrollTo is the same
window.scroll({
  top: 2500, 
  left: 0, 
  behavior: 'smooth'
});

// Scroll certain amounts from current position 
window.scrollBy({ 
  top: 100, // could be negative value
  left: 0, 
  behavior: 'smooth' 
});

// Scroll to a certain element
document.querySelector('.hello').scrollIntoView({ 
  behavior: 'smooth' 
});

/* Preloader */

