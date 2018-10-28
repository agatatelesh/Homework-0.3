
     $(document).ready(function() {
        $('.main_btna').on('click', function() {
            $('.overlay').fadeToggle('show');
            $('.modal').slideToggle('slow');
        });
        $('.main_btn').on('click', function() {
            $('.overlay').fadeToggle('show');
            $('.modal').slideToggle('slow');
        });
        $('[href="#sheldure"]').on('click', function() {
            $('.overlay').fadeToggle('show');
            $('.modal').slideToggle('slow');
        });
        $('.close').on('click', function() {
            $('.overlay').fadeToggle('hide');
            $('.modal').slideToggle('hide');
        })
    });


