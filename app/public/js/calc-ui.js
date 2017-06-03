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
        $(".dropdown-menu li a").click(function(){

            $(".btn.currency:first-child").html($(this).text() + ' <span class="caret"></span>');
            $(".btn.currency:first-child").val($(this).text());

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
    });

})(window, document, $);

