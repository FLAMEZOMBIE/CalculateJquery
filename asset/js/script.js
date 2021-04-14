function insert(num) {
    $('.clc-display').val($('.clc-display').val() + num);
}

function equal() {
    $('.clc-display').val(eval($('.clc-display').val()));
}

function c() {
    $('.clc-display').val('');
}

function del() {

    value = $('.clc-display').val();
    $('.clc-display').val(value.substring(0, value.length - 1));
}