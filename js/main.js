$(function() {
  
  $('#projects-btn').on('click', function(e) {
    e.preventDefault();
    $('body').animate({
       scrollTop: $('#projects').position().top 
     }, 'normal', 'easeInQuart');
  });
    
});