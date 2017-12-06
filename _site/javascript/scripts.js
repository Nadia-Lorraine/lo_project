$(document).ready(function(){
  console.log('working');
  // responsive navigation
function changeBodyClass(event) {
  
  // Log 
  console.log('Clicked on toggle menu class');
    
  
  
  // Toggle body class
  $('#container').toggleClass('mobile-menu-visible');
  
}

/*
**  Bind events
*/
$('a').on('click', changeBodyClass);
//smooth scroll
function scrollToSection(event) {
  
  // Log 
  console.log('Clicked on anchor element');
    
  // Prevent jumping to the section (default behaviour)
  //event.preventDefault();
  
  // Get anchor element hash
  var element = event.currentTarget,
      hash = element.hash;
 
  // Scroll the body and HTML to the ID equal to hash
  $('html, body').animate({
    
    // Find the offset of the targeted element on the page
    scrollTop: $(hash).offset().top
  }, 800, function(){

    // Set URL to clicked hash
    window.location.hash = hash;

  });
   
}

/*
**  Bind events
*/
$('a').on('click', scrollToSection);

});//This closes the JQuery function- all JQuery comes before this