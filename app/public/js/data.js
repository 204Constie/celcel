(function(ns, document, $){
    'use strict';
    ns.data = ns.data || {};

    ns.data.pl = {
        commodityCodesByCategory: [
            {
                categoryName: "Live animals",
                categoryCode: "01",
                items: [
                    {
                        name: "Lamb",
                        code: "0101"
                    },
                    {
                        name: "Sheep",
                        code: "0102"
                    }
                ]
            },
            {
                categoryName: "Vegetables",
                categoryCode: "02",
                items: [
                    {
                        name: "Potato",
                        code: "0201"
                    },
                    {
                        name: "Carrot",
                        code: "0202",
                    },
                    {
                        name: "Onion",
                        code: "0203"
                    }
                ]
            },
            {
                categoryName: "Vehicles",
                categoryCode: "03",
                items: [
                    {
                        name: "Car",
                        code: "0301"
                    },
                    {
                        name: "Motor vehicle",
                        code: "0302"
                    },
                    {
                        name: "Tractor",
                        code: "0303"
                    }
                ]
            },
            {
                categoryName: "Mineral products",
                categoryCode: "04",
                items: [
                    {
                        name: "Plastic",
                        code: "0401"
                    },
                    {
                        name: "Leather",
                        code: "0402"
                    },
                    {
                        name: "Wood",
                        code: "0403"
                    },
                    {
                        name: "Stone",
                        code: "0404"
                    }
                ]
            }
        ],
        countries: [
            { name: "Poland" },
            { name: "Germany" },
            { name: "United States" },
            { name: "France" },
            { name: "India" },
            { name: "Argentina" },
            { name: "Chile" }
        ]
    };

    ns.data.eng = {
        commodityCodesByCategory: [
            {
                categoryName: "Live animals",
                categoryCode: "01",
                items: [
                    {
                        name: "Lamb",
                        code: "0101"
                    },
                    {
                        name: "Sheep",
                        code: "0102"
                    }
                ]
            },
            {
                categoryName: "Vegetables",
                categoryCode: "02",
                items: [
                    {
                        name: "Potato",
                        code: "0201"
                    },
                    {
                        name: "Carrot",
                        code: "0202",
                    },
                    {
                        name: "Onion",
                        code: "0203"
                    }
                ]
            },
            {
                categoryName: "Vehicles",
                categoryCode: "03",
                items: [
                    {
                        name: "Car",
                        code: "0301"
                    },
                    {
                        name: "Motor vehicle",
                        code: "0302"
                    },
                    {
                        name: "Tractor",
                        code: "0303"
                    }
                ]
            },
            {
                categoryName: "Mineral products",
                categoryCode: "04",
                items: [
                    {
                        name: "Plastic",
                        code: "0401"
                    },
                    {
                        name: "Leather",
                        code: "0402"
                    },
                    {
                        name: "Wood",
                        code: "0403"
                    },
                    {
                        name: "Stone",
                        code: "0404"
                    }
                ]
            }
        ],
        countries: [
            { name: "Poland" },
            { name: "Germany" },
            { name: "United States" },
            { name: "France" },
            { name: "India" },
            { name: "Argentina" },
            { name: "Chile" }
        ]
    }


})(window.CALC = window.CALC || {}, document, $);
