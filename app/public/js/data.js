(function(ns, document, $){
    'use strict';
    ns.data = ns.data || {};

    ns.data.pl = {
        commodityCodesByCategory: [
            {
                text: "Żywe zwierzęta",
                code: "01",
                nodes: [
                    {
                        text: "Owca",
                        code: "0101"
                    },
                    {
                        text: "Jagnię",
                        code: "0102"
                    }
                ]
            },
            {
                text: "Warzywa",
                code: "02",
                nodes: [
                    {
                        text: "Ziemniak",
                        code: "0201"
                    },
                    {
                        text: "Marchew",
                        code: "0202",
                    },
                    {
                        text: "Cebula",
                        code: "0203"
                    }
                ]
            },
            {
                text: "Pojazdy",
                code: "03",
                nodes: [
                    {
                        text: "Samochód",
                        code: "0301"
                    },
                    {
                        text: "Motocykl",
                        code: "0302"
                    },
                    {
                        text: "Traktor",
                        code: "0303"
                    }
                ]
            },
            {
                text: "Minerały",
                code: "04",
                nodes: [
                    {
                        text: "Plastik",
                        code: "0401"
                    },
                    {
                        text: "Skóra",
                        code: "0402"
                    },
                    {
                        text: "Drewno",
                        code: "0403"
                    },
                    {
                        text: "Kamień",
                        code: "0404"
                    }
                ]
            }
        ],
        countries: [
            { text: "Polska" },
            { text: "Niemcy" },
            { text: "Stany Zjednoczone" },
            { text: "Francja" },
            { text: "Indie" },
            { text: "Argentyna" },
            { text: "Chile" }
        ],
        additionalCodes: [
            {
                text: "Ograniczenia/restrykcje",
                nodes: [
                    {
                        text: "Przedmioty archeologiczne starsze niż 100 lat",
                        code: "1010"
                    },
                    {
                        text: "Samochody starsze niż 50 lat",
                        code: "1020"
                    }
                ],
                code: "10"
            },
            {
                text: "Preferencje taryfowe",
                code: "20",
                nodes: [
                    {
                        text: "Importowane drogą lądową, wewnętrzną drogą wodną lub drogą powietrzną",
                        code: "2010"
                    },
                    {
                        text: "Importowane drogą morską i przebywające przez Ocean Atlantycki",
                        code: "2020"
                    }
                ]
            }
        ]
    };

    ns.data.eng = {
        commodityCodesByCategory: [
            {
                text: "Live animals",
                code: "01",
                nodes: [
                    {
                        text: "Lamb",
                        code: "0101"
                    },
                    {
                        text: "Sheep",
                        code: "0102"
                    }
                ]
            },
            {
                text: "Vegetables",
                code: "02",
                nodes: [
                    {
                        text: "Potato",
                        code: "0201"
                    },
                    {
                        text: "Carrot",
                        code: "0202",
                    },
                    {
                        text: "Onion",
                        code: "0203"
                    }
                ]
            },
            {
                text: "Vehicles",
                code: "03",
                nodes: [
                    {
                        text: "Car",
                        code: "0301"
                    },
                    {
                        text: "Motor vehicle",
                        code: "0302"
                    },
                    {
                        text: "Tractor",
                        code: "0303"
                    }
                ]
            },
            {
                text: "Mineral products",
                code: "04",
                nodes: [
                    {
                        text: "Plastic",
                        code: "0401"
                    },
                    {
                        text: "Leather",
                        code: "0402"
                    },
                    {
                        text: "Wood",
                        code: "0403"
                    },
                    {
                        text: "Stone",
                        code: "0404"
                    }
                ]
            }
        ],
        countries: [
            { text: "Poland" },
            { text: "Germany" },
            { text: "United States" },
            { text: "France" },
            { text: "India" },
            { text: "Argentina" },
            { text: "Chile" }
        ],
        additionalCodes: [
            {
                text: "Restrictions",
                code: "10",
                nodes: [
                    {
                        text: "Archeological objects more than 100 years old",
                        code: "1010"
                    },
                    {
                        text: "Cars more than 50 years old",
                        code: "1020"
                    }
                ]
            },
            {
                text: "Tariff preference",
                code: "20",
                nodes: [
                    {
                        text: "Imported by land, inland waterway or by air",
                        code: "2010"
                    },
                    {
                        text: "Imported by sea and arriving via the Atlantic Ocean",
                        code: "2020"
                    }
                ]
            }
        ]
    }


})(window.CALC = window.CALC || {}, document, $);
