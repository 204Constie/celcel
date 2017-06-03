/**
 * Created by blady on 03.06.17.
 */

var setupCargoCodeModal = function() {
    $('#modal-cargo-code').css('display', 'none');
    $('#lookup-cargo-code').on('click', function() {
        $('#modal-cargo-code').css('display', '');
    });
    $('#modal-cargo-code-close').on('click', function() {
        $('#modal-cargo-code').css('display', 'none');
    });
    // TODO: PUT NUMBER IN SELECTION
};

var setupDropdownsSelection = function() {
    $(".dropdown-menu li a").click(function(){

        $(".btn.currency:first-child").html($(this).text() + ' <span class="caret"></span>');
        $(".btn.currency:first-child").val($(this).text());

    });
};

$(document).ready(function() {
    setupCargoCodeModal();
    setupDropdownsSelection();
});