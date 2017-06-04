(function(ns, document, $){
    'use strict';
    var getInputData = function(){

        var inputType = $("#input-type").val();
        var inputCountry = $("#input-country").val();
        var cargoCode = $("#cargo-code").val();
        var value = $("#input-value").val();
        var currency = $("#input-currency > button").innerHTML;
        var massBrutto = $("#input-mass-brutto").val();
        var massNetto = $("#input-mass-netto").val();
        var meursingCode = $("#meursing-code").val();
        var additionalUnits = ns.data.controls.additionalUnits;
        var additionalCodes = $("#additional-code-selection").val();

    };

    ns.calculate = function(){

    }

})(window.CALC = window.CALC || {} , document, $);
