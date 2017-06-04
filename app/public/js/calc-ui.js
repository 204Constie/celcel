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

    var setupAdditionalCodesModal = function(){
        $('#modal-additionalCodes').css('display', 'none');
        $('#lookup-additionalCodes').on('click', function() {
            $('#modal-additionalCodes').css('display', '');
        });
        $('#modal-additionalCodes-close').on('click', function() {
            $('#modal-additionalCodes').css('display', 'none');
        });
    };

    var setupAdditionalUnits = function() {
        $('#add-unit').click(function(event) {
            event.preventDefault();

            var value = $('#unit-selection').val();
            var unit = $('#unit-selection-button').text();

            var unitsList = window.CALC.data.controls.additionalUnits;
            var selectedUnit = {
                "unit": unit,
                "value": value
            };


            var element = '<tr>' +
                '<td>' + value + '</td>' +
                '<td>' + unit + '</td>' +
                '<td><button class="btn btn-danger">Remove</button></td>' +
                '</tr>';

            var addedElement = $('#unit-selection-result-table > tbody').append(element).children().last();
            unitsList.push(selectedUnit);

            $(addedElement).find("button").click(function(event) {
                event.preventDefault();
                console.log("Delete clicked!");
                unitsList = _.remove(unitsList, function(o){
                    return o.unit === selectedUnit.unit && o.value === selectedUnit.value;
                });
                $(addedElement).remove();
            });

            console.log("Adding!");
        });
    };

    var setupAdditionalCodes = function() {
        $('#btn-additional-code-add').click(function(event) {
            event.preventDefault();

            var value = $('#additional-code-selection').val();
            var element = '<tr>' +
                '<td>' + value + '</td>' +
                '<td><button class="btn btn-danger">Remove</button></td>' +
                '</tr>';

            var addedElement = $('#additional-code-selection-result-table > tbody').append(element).children().last();
            $(addedElement).find("button").click(function(event) {
                event.preventDefault();
                $(addedElement).remove();
            });
        })
    };

    var buildTreeNodeText = function(entry){
        entry.text = entry.code + " - " + entry.text;
        if(entry.nodes){
            entry.nodes = _.forEach(entry.nodes, buildTreeNodeText);
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

        var entries = _.forEach(data, buildTreeNodeText);
        var tree = $("#commodityCodesTree");

        tree.treeview({
            data: entries,
        });
        tree.treeview('collapseAll', { silent: true });
        tree.on('nodeSelected', function(event, data){
            $("#cargo-code").val(data.code);
        });

    };

    var populateAdditionalCodesTree = function(){
        var data;
        if(window.CALC.language === "pl"){
            data = window.CALC.data.pl.additionalCodes;
        }
        else{
            data = window.CALC.data.eng.additionalCodes;
        }

        var entries = _.forEach(data, buildTreeNodeText);
        var tree = $("#additionalCodesTree");

        tree.treeview({
            data: entries,
        });
        tree.treeview('collapseAll', { silent: true });
        tree.on('nodeSelected', function(event, data){
            $("#additional-code-selection").val(data.code);
        });
    };

    var setupDropdowns = function(){
        $('#input-currency > ul > li > a').click(function(e){
            $('#input-currency > button').text(this.innerHTML);
        });
    };

    var registerSubmitButtonEvents = function(){
        $("#btn-calculate").click(window.CALC.calculate);

    };

    var registerResetButtonEvents = function() {
        $('#btn-reset').click(function(event) {
            event.preventDefault();
            $('#calc-form')[0].reset();
            $('#unit-selection-result-table > tbody').html('');
            $('#additional-code-selection-result-table > tbody').html('');
        })
    };

    $(document).ready(function() {
        setupCargoCodeModal();
        setupAdditionalCodesModal();
        setupDropdownsSelection();
        populateCommodityCodesTree();
        populateAdditionalCodesTree();
        setupMeursingSelection();
        setupAdditionalUnits();
        setupAdditionalCodes();
        setupDropdowns();
        registerSubmitButtonEvents();
        registerResetButtonEvents();
    });

})(window, document, $);