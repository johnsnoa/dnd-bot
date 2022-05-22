let $form = $('form');
let new__level;

$(function() {
    $('.character__level').on('change', new__level = function () {
        let $last = $('.character__level:last');
        
        const lastLevel = $last[0];
        if ($('.character__level:last')[0].value !== '') {
            $(`option[value="${$('.class-choices:last')[0].value}"]`).remove();
            const classes = $('.character__level').length + 1;
            let label = `<input type="text" list="classes" placeholder="Class" class="class-choices"/>`
            $form.append(`<div class="input" id="class-${classes}"></div>`);
            let $div = $('.input:last');
            $div.append(label);
            $last
                .clone()
                .appendTo($div)
                .on('change', new__level);
            $('.character__level:last')[0].value = '';
        }

    });
});

