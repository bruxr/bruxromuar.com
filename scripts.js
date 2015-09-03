(function($) {
    $(document).on('ready', function() {
        if (Modernizr.mq('only screen and (min-width: 1200px)')) {
            $('#hero').height($(window).height() - 90);
        }
        $('#rotate').airport(['amazing', 'interactive', 'memorable', 'helpful', 'cool']);
    });
})(jQuery);