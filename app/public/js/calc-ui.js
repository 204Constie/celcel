(function(window, document, $){
    'use strict';
    window.CALC = window.CALC || {};
    window.CALC.language = "pl";

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



    var setupAdditionalUnits = function() {
        $('#add-unit').click(function(event) {
            event.preventDefault();

            var value = $('#unit-selection').val();
            var unit = $('#unit-selection-button').text();

            var element = '<tr>' +
                '<td>' + value + '</td>' +
                '<td>' + unit + '</td>' +
                '<td><button class="btn btn-danger">Remove</button></td>' +
                '</tr>';

            var addedElement = $('#unit-selection-result-table > tbody').append(element).children().last();
            $(addedElement).find("button").click(function(event) {
                event.preventDefault();
                console.log("Delete clicked!");
                $(addedElement).remove();
            });

            console.log("Adding!");
        });
    };

    var buildCargoText = function(entry){
        entry.text = entry.code + " - " + entry.text;
        if(entry.nodes){
            entry.nodes = _.forEach(entry.nodes, buildCargoText);
        }
    };

    var populateCommodityCodesTree = function(){
        var data;
        if(window.CALC.language === "pl"){
            data = window.CALC.data.pl.commodityCodesByCategory;
        }
        else{
            data = window.CALC.data.eng.commodityCodesByCategory;
        }

        var entries = _.forEach(data, buildCargoText);
        var tree = $("#commodityCodesTree");

        tree.treeview({
            data: entries,
        });
        tree.treeview('collapseAll', { silent: true });
        tree.on('nodeSelected', function(event, data){
            $("#cargo-code").val(data.code);
        });

    };

    $(document).ready(function() {
        setupCargoCodeModal();
        setupDropdownsSelection();
        populateCommodityCodesTree();
        setupMeursingSelection();
        setupAdditionalUnits();
    });

})(window, document, $);