
(function($) {
    $(document).ready(function(){
        // mobile menu js
        // mobile menu js
        $('#evendi_bar').click(function(){
            $('.menu').animate({
                width:'toggle'
            }, 200)
        })

        // cross bar
        // cross bar
        $('#evendi_bar').on('click', function () {
            $(this).toggleClass('cs_cross_active');

            $(".logo").toggleClass('logo_add_class');
        });


       // tabs
       // tabs
       $( "#mtabs" ).tabs();

    });
})( jQuery );

// quantity counter
// quantity counter
var counterValue = document.querySelector("#counter_value");
var counterIncrement = document.querySelector("#counter_decrement");
var counterDecrement = document.querySelector("#counter_increment");
var count = 0;

this.counterIncrement.addEventListener('click', () => {
    this.count++
    this.counterValue.setAttribute("value", count);
});

this.counterDecrement.addEventListener('click', () => {
    this.count--
    this.counterValue.setAttribute("value", count);
});









