(function(ns, document, $){
    'use strict';
    var getInputData = function(){

        var inputType = $("#input-type").val();
        var inputCountry = $("#input-country").val();
        var cargoCode = $("#cargo-code").val();
        var value = $("#input-value").val();
        var currency = $("#input-currency > button")[0].innerText;
        var massBrutto = $("#input-mass-brutto").val();
        var massNetto = $("#input-mass-netto").val();
        var meursingCode = $("#meursing-code").val();
        var additionalUnits = ns.data.controls.additionalUnits;
        var additionalCodes = $("#additional-code-selection").val();

        return {
            inputType: inputType,
            inputCountry: inputCountry,
            cargoCode: cargoCode,
            value: value,
            currency: currency,
            massBrutto: massBrutto,
            massNetto: massNetto,
            meursingCode: meursingCode,
            additionalUnits: additionalUnits,
            additionalCodes: additionalCodes
        }
    };

    ns.calculate = function(){
        var data = getInputData();

        //(additionalUnits.value * value) + 1.2 * mass
        var additionalUnitsValue = data.additionalUnits.value || 0;
        var value = data.value || 0;
        var mass = data.massNetto || 0;

        var dutyValue = (parseFloat(additionalUnitsValue) * parseFloat(value)) + 1.2 * mass;
        return dutyValue + data.currency;
    }

})(window.CALC = window.CALC || {} , document, $);
