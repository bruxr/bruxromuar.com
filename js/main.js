$(function() {
    $('#projects-btn').on('click', function(e) {
        e.preventDefault();
        console.log('aaa');
        $('body').animate({
             scrollTop: $('#projects').position().top 
         }, 'fast', 'swing');
    });
    
    if (Modernizr.touch) {
        var t;
        $('.project').on('touchstart', function(e) {
            var el = $(this);
            t = setTimeout(function() {
                $(this).toggleClass('hover');
            }, 2000);
        }).on('touchend', function() {
            clearTimeout(t);
        });
    }
});