let $form = $('form');
let new__level = function (event) {
    let $last = $('.character__level:last');
    if(!($(event.target).parent().is('.input:eq(1)'))){
        $(event.target)
            .siblings('.character__level')
            .addBack()
            .addClass('character__level--small');
    }
    const lastLevel = $last[0];
    if ($(event.target).attr('type') === 'text' && event.target.value !== '') {
        $(`option[value="${$('.class-choices:last')[0].value}"]`).remove();
    }
    if ($('.character__level:last')[0].value !== '' && $('.class-choices:last')[0].value !== '') {
        $(`option[value="${$('.class-choices:last')[0].value}"]`).remove();
        const classes = $('.character__level').length + 1;
        const clear = '<input type="button" class="class__clear" value="Clear">';
        const charClass = `<input type="text" list="classes" placeholder="Class" class="class-choices"/>`
        const level = '<input type="number" min="1" max="20" placeholder="Level" class="character__level"/>';
        $form.append(`<div class="input" id="class-${classes}"></div>`);
        let $div = $('.input:last');
        $div
            .append(clear, charClass, level);
        $('.character__level, .class-choices').on('change', new__level);
        $('.class__clear').on('click', clear__level);
    }

};
const clear__level = function (event) {
    let $siblings = $(event.target).siblings();
    console.log($(event.target));
    const chooser = $siblings.filter('.class-choices')[0];
    const choice = chooser.value;
    if(choice !== '') {
        $(`<option value="${choice}"></option>`)
            .insertBefore(
                $('option').filter(function() {
                    return $(this)[0].value > choice;
                }).first()
            );
    }
    $siblings.each(function() {
        this.value = '';
    });
};

$(function() {
    $('.character__level, .class-choices').on('change', new__level);
});

