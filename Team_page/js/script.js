
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
 document.querySelector('.container_wrapper').scrollIntoView({ 
  behavior: 'smooth' 
}); 

/* Slider */
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:2, 
        itemsLargeDesktop: [1399,2], 
        itemsDesktop:[1199,2],
        itemsDesktopSmall:[991,1],
        itemsTablet:[766,1],
        itemsMobile:[575,1],
        pagination:true,
        autoPlay:true
    });
});