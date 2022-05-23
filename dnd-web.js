let $form = $('form');
let new__level = function (event) {
    let $target = $(event.target);
    const selection = $target.val();
    console.log(event.target.previousValue);
    console.log(event);
    if(event.target.previousValue !== undefined) {
        $(`option[value="${event.target.previousValue}"]`).removeAttr('disabled');
    }
    event.target.previousValue = selection;
    if(selection === 'blank') {
        $target.siblings('.character__classes--clear').first().trigger('click');
        return;
    }
    $target.siblings('.character__level').first()
        .addClass('character__level--enable')
        .on('change', show__new)
        .on('change', reappear__clear);
    $target.siblings('.character__classes--clear').first().addClass('character__classes--clear-enable');

    $(`select:not(:focus) > option[value=${selection}]`).attr('disabled', true);
    $(`select:focus > option[value=${selection}]`).attr('selected', true).siblings('option[selected]').removeAttr('selected');
    console.log('Selected: ', selection);
};

let reappear__clear = function (event) {
    const $target = $(event.target);
    $target.siblings('.character__classes--clear').first().addClass('character__classes--clear-enable');
}

let show__new = function(event) {
    const $target = $(event.target);
    const $parent = $target.parent();
    if ($parent.is('.input:last')) {
        const $clone = $parent.clone();
        $clone.insertAfter($parent)
            .children()
            .each(function () {
                switch(this.type) {
                    case 'select-one': 
                        $(this).on('change', new__level);
                        break;
                    case 'number': 
                        $(this).on('change', show__new).on('change', reappear__clear);
                        $(this).val('');
                        break;
                    case 'button': 
                        $(this).on('click', clear__level).removeClass('character__classes--clear-enable');
                        
                        break;
                }
            })
    }
        
}

const clear__level = function (event) {
    const $target = $(event.target);
    const $chooser = $target.siblings('.character__classes');
    console.log($chooser);
    console.log($(`option`));
    $(`option[value="${$chooser.val()}"]`).removeAttr('disabled');
    if($target.parent().next().length != 0) {
        $target.parent().next().children('.character__classes--clear').first().trigger('click');
        $target.parent().remove();
    }
    $target.siblings('.character__level').first().val('');
    $target.removeClass('character__classes--clear-enable');
};

$(function() {
    $('.character__classes').on('change', new__level);
    $('.character__classes--clear').on('click', clear__level);
});

