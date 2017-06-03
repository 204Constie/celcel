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
    $(".dropdown-menu.currency li a").click(function(event){
        event.preventDefault();
        $(".btn.currency:first-child").html($(this).text() + ' <span class="caret"></span>');
        $(".btn.currency:first-child").val($(this).text());

    });

    $(".dropdown-menu.units li a").click(function(event){
        event.preventDefault();
        $(".btn.unit:first-child").html($(this).text() + ' <span class="caret"></span>');
        $(".btn.unit:first-child").val($(this).text());

    });
};

var setupMeursingSelection = function() {
    $('#modal-meursing').css('display', 'none');
    $('#lookup-meursing').on('click', function() {
        $('#modal-meursing').css('display', '');
    });
    $('#modal-meursing-close').on('click', function() {
        $('#modal-meursing').css('display', 'none');
    });
};

$(document).ready(function() {
    setupCargoCodeModal();
    setupDropdownsSelection();
    setupMeursingSelection();
});