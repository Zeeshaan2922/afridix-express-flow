
/**
 * Main JS file for Afridi Transport theme
 */
(function($) {
    // Document ready
    $(document).ready(function() {
        // Smooth scrolling for anchor links
        $('a[href^="#"]').on('click', function(event) {
            var target = $(this.getAttribute('href'));
            
            if(target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 80
                }, 800);
            }
        });
        
        // FAQ toggles
        $('.faq-question').on('click', function() {
            $(this).next('.faq-answer').slideToggle();
            $(this).toggleClass('active');
        });
        
        // Form validation
        $('form').on('submit', function() {
            var valid = true;
            
            $(this).find('[required]').each(function() {
                if($(this).val() === '') {
                    valid = false;
                    $(this).addClass('error');
                } else {
                    $(this).removeClass('error');
                }
            });
            
            return valid;
        });
        
        // AOS initialization if AOS is available
        if(typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                once: true
            });
        }
    });
    
    // Load events
    $(window).on('load', function() {
        // Handle any on-load events
    });
    
})(jQuery);
