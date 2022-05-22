let $form = $('form');

$(function() {
    $('.character__level').on('change', function () {
        if ($('.character__level:last')[0].value !== '') {
            let levels = $('.character__level').length;
            $('.character__level:last')
                .clone()
                .appendTo('form')[0]
                .value = '';
        }

    });
});

