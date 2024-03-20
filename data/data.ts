const productsData = [
  // {
  //   id: "001",
  //   name: "BARRA DE PASAS Y ARANDANOS SIN AZUCAR - 45grs.",
  //   category: "Barritas",
  //   image: "/Images/muecas-pasasyarandanos.jpeg",
  //   price: "SIN STOCK",
  // },
  // {
  //   id: "002",
  //   name: "BARRA DE PASAS Y ALMENDRAS SIN AZUCAR - 45grs.",
  //   category: "Barritas",
  //   image: "/Images/muecas-pasasyalmendras.png",
  //   price: "SIN STOCK",
  // },
  // {
  //   id: "003",
  //   name: "BARRA DE MANZANA Y ARANDANOS SIN AZUCAR - 45grs.",
  //   category: "Barritas",
  //   image: "/Images/muecas-manzanayarandanos.png",
  //   price: "SIN STOCK",
  // },
  // {
  //   id: "004",
  //   name: "BARRA DE CACAO Y AVELLANAS SIN AZUCAR - 45grs.",
  //   category: "Barritas",
  //   image: "/Images/muecas-cacaoyavellanas.png",
  //   price: "500",
  // },
  // {
  //   id: "005",
  //   name: "BARRA DE BANANAS Y DDL SIN AZUCAR - 45grs.",
  //   category: "Barritas",
  //   image: "/Images/muecas-bananayddl.jpeg",
  //   price: "SIN STOCK",
  // },

  {
    id: "198",
    name: "ENTRENUTS MIEL - 500gr.",
    category: "mermelada",
    image: "/Images/entrenuts-miel.JPG",
    price: "4500",
  },
  {
    id: "201",
    name: "ENTRENUTS MANÍ CACAO - 500gr.",
    category: "mermelada",
    image: "/Images/entrenuts-cacao.JPG",
    price: "4800",
  },
  {
    id: "199",
    name: "ENTRENUTS MANÍ STEVIA - 370gr.",
    category: "mermelada",
    image: "/Images/entrenuts-mani.JPG",
    price: "4800",
  },
  {
    id: "200",
    name: "ENTRENUTS MANÍ NATURAL - 370gr.",
    category: "mermelada",
    image: "/Images/entrenuts-mani-amarillo.JPG",
    price: "4800",
  },

  {
    id: "006",
    name: "MANTEQUILLA DE MANI NATURAL CON STEVIA - 400gr.",
    category: "mantequilla",
    image: "/Images/mantemani.JPG",
    price: "3950",
  },
  {
    id: "080",
    name: "MANTEQUILLA DE MANI NATURAL CRUNCH - 400gr.",
    category: "mantequilla",
    image: "/Images/mantemani.JPG",
    price: "3950",
  },
  {
    id: "007",
    name: "MANTEQUILLA DE MANI CHOCOLATE - 400gr.",
    category: "mantequilla",
    image: "/Images/mantemani-choco.JPG",
    price: "3900",
  },
  {
    id: "007",
    name: "MANTEQUILLA MANI NATURAL 100% - 400gr.",
    category: "mantequilla",
    image: "/Images/mnatural.jpg",
    price: "3950",
  },
  {
    id: "009",
    name: "JUAL STEVIA LIQUIDO - 125ml.",
    category: "edulcorante",
    image: "/Images/jual-edulcorante.jpg",
    price: "3150",
  },
  {
    id: "090",
    name: "JUAL STEVIA LIQUIDO - 250ml.",
    category: "edulcorante",
    image: "/Images/jual-edulcorante.jpg",
    price: "4160",
  },
  {
    id: "090",
    name: "JUAL STEVIA POLVO - 110gr",
    category: "azucar",
    image: "/Images/jual-edulcorante-polvo.jpg",
    price: "3900",
  },
  // {
  //   id: "104",
  //   name: "SILK ALMENDRA ORIGINAL - 1Lt.",
  //   category: "leches",
  //   image: "/Images/silk-almendra.PNG",
  //   price: "820",
  // },
  // {
  //   id: "105",
  //   name: "SILK ALMENDRA SIN AZUCAR - 1Lt.",
  //   category: "leches",
  //   image: "/Images/silk-almendra-sinazucar.PNG",
  //   price: "820",
  // },
  // {
  //   id: "106",
  //   name: "SILK CHOCOLATE - 1Lt.",
  //   category: "leches",
  //   image: "/Images/silk-chocolate.PNG",
  //   price: "820",
  // },
  // {
  //   id: "013",
  //   name: "FRUTOS SECOS CON BANANA Y PASAS - 200gr.",
  //   category: "cereales",
  //   image: "/Images/frutossecosnuevo.JPG",
  //   price: "SIN STOCK",
  // },
  // {
  //   id: "014",
  //   name: "NUEZ PELADA - 150gr.",
  //   category: "cereales",
  //   image: "/Images/nuezpeladadorada.JPG",
  //   price: "SIN STOCK",
  // },
  // {
  //   id: "015",
  //   name: "ALMENDRAS - 150gr.",
  //   category: "cereales",
  //   image: "/Images/almendrasbowl.JPG",
  //   price: "SIN STOCK",
  // },
  {
    id: "023",
    name: "PEPAS INTEGRALES MEMBRILLO - 1kg.",
    category: "cereales",
    image: "/Images/pepas-integrales.jpeg",
    price: "9500",
  },
  {
    id: "024",
    name: "PEPAS INTEGRALES MEMBRILLO - 250grs.",
    category: "cereales",
    image: "/Images/pepas-integrales.jpeg",
    price: "SIN STOCK",
  },
  {
    id: "027",
    name: "COOKIES INTEGRALES VAINILLA Y PASAS - 1kg.",
    category: "cereales",
    image: "/Images/cintegrales.JPG",
    price: "SIN STOCK",
  },
  {
    id: "028",
    name: "COOKIES INTEGRALES Y VAINILLA PASAS - 200gr.",
    category: "cereales",
    image: "/Images/cintegrales.JPG",
    price: "2500",
  },
  {
    id: "029",
    name: "COOKIES INTEGRALES LIMON - 1kg.",
    category: "cereales",
    image: "/Images/cookielimon.JPG",
    price: "SIN STOCK",
  },
  {
    id: "030",
    name: "COOKIES INTEGRALES LIMON - 200gr.",
    category: "cereales",
    image: "/Images/cookielimon.JPG",
    price: "2500",
  },
  {
    id: "031",
    name: "COOKIES INTEGRALES CHOCOLATE CON MANI - 1kg.",
    category: "cereales",
    image: "/Images/cookiechocomani.JPG",
    price: "SIN STOCK",
  },
  {
    id: "032",
    name: "COOKIES INTEGRALES CHOCOLATE CON MANI - 200gr.",
    category: "cereales",
    image: "/Images/cookieschocomani.jpg",
    price: "SIN STOCK",
  },

  // {
  //   id: "033",
  //   name: "MERMELADA DIETETICA DURAZNO - 400gr.",
  //   category: "mermelada",
  //   image: "/Images/mermelada-durazno.JPG",
  //   price: "SIN STOCK",
  // },
  // {
  //   id: "034",
  //   name: "MERMELADA DIETETICA FRUTILLA - 400gr",
  //   category: "mermelada",
  //   image: "/Images/mermelada-frutilla.jpeg",
  //   price: "1400",
  // },
  // {
  //   id: "035",
  //   name: "MERMELADA DIETETICA ARANDANOS - 400gr",
  //   category: "mermelada",
  //   image: "/Images/arandanosmerme.JPG",
  //   price: "SIN STOCK",
  // },

  // {
  //   id: "064",
  //   name: "MERMELADA DIETETICA FRUTILLA con STEVIA",
  //   category: "mermelada",
  //   image: "/Images/frutilla-mermelada.JPG",
  //   price: "2500",
  // },
  // {
  //   id: "065",
  //   name: "MERMELADA DIETETICA ARANDANOS con STEVIA",
  //   category: "mermelada",
  //   image: "/Images/arandano-mermelada.JPG",
  //   price: "2500",
  // },
  {
    id: "036",
    name: "MIEL PURA - 500gr",
    category: "mermelada",
    image: "/Images/mielpura.JPG",
    price: "3500",
  },
  {
    id: "037",
    name: "PAN ESPECIAL CALABAZA masa madre - 530gr.",
    category: "cereales",
    image: "/Images/pan-calabaza.jpg",
    price: "4950",
  },
  {
    id: "038",
    name: "PAN DOBLE INTEGRAL masa madre - 530gr.",
    category: "cereales",
    image: "/Images/pan-integral.png",
    price: "4950",
  },
  // {
  //   id: "039",
  //   name: "MIX DE SEMILLAS (chía, lino, sesamo, girasol) - 200gr.",
  //   category: "cereales",
  //   image: "/Images/mixsemillas.webp",
  //   price: "SIN STOCK",
  // },

  {
    id: "120",
    name: "GRANOLA CLASICA - 350gr.",
    category: "cereales",
    image: "/Images/granola_390_clasica.png",
    price: "7200",
  },
  {
    id: "126",
    name: "GRANOLA CHOCOLATE - 350gr.",
    category: "cereales",
    image: "/Images/granola_390_cacao.JPG",
    price: "7200",
  },

  {
    id: "040",
    name: "GRANOLA INTEGRA CLASICA - 1kg.",
    category: "cereales",
    image: "/Images/granola_integra_caju.jpeg",
    price: "12600",
  },
  {
    id: "041",
    name: "GRANOLA CHOCOLATE - 1kg.",
    category: "cereales",
    image: "/Images/granola_integra_chocolate.jpeg",
    price: "SIN STOCK",
  },
  {
    id: "042",
    name: "PREMEZCLA PANCAKE MANI (ONETWOFIT) - 300gr.",
    category: "cereales",
    image: "/Images/onetwo_mani.png",
    price: "5100",
  },
  {
    id: "043",
    name: "PREMEZCLA PANCAKE CON STEVIA (ONETWOFIT) - 300gr.",
    category: "cereales",
    image: "/Images/onetwo_stevia.png",
    price: "4600",
  },
  {
    id: "044",
    name: "PREMEZCLA PANCAKE CACAO (ONETWOFIT) - 300gr.",
    category: "cereales",
    image: "/Images/onetwo_cacao.png",
    price: "5600",
  },
  {
    id: "075",
    name: "PREMEZCLA PANCAKE VAINILLA (ONETWOFIT) - 200gr.",
    category: "cereales",
    image: "/Images/pancake-ot.png",
    price: "4600",
  },
  {
    id: "070",
    name: "PREMEZCLA WRAP DE ESPINACA (ONETWOFIT) - 200gr.",
    category: "cereales",
    image: "/Images/wrap-ot.png",
    price: "5100",
  },
  {
    id: "105",
    name: "PREMEZCLA PANCAKE KETO CACAO (ONETWOFIT) - 200gr.",
    category: "cereales",
    image: "/Images/pancake_keto.png",
    price: "7000",
  },
  {
    id: "106",
    name: "PREMEZCLA PANCAKE KETO VAINILLA (ONETWOFIT) - 200gr.",
    category: "cereales",
    image: "/Images/pancake_vainilla_keto.png",
    price: "7000",
  },
  {
    id: "090",
    name: "AVENA PANCAKE DULCES X6",
    category: "pancake",
    image: "/Images/pancakes_avena.jpg",
    price: "4500",
  },
  {
    id: "091",
    name: "AVENA PANCAKE CACAO X6",
    category: "pancake",
    image: "/Images/pancakes_cacao.jpg",
    price: "4800",
  },
  {
    id: "092",
    name: "AVENA PANCAKE SALADOS X6",
    category: "pancake",
    image: "/Images/pancakes_avena.jpg",
    price: "4100",
  },
  // {
  //   id: "093",
  //   name: "AVENA CREAM CRUNCHY POTE",
  //   category: "pancake",
  //   image: "/Images/avena_cream.jpg",
  //   price: "SIN STOCK",
  // },

  {
    id: "045",
    name: "BARRA INTEGRA BANANA Y NUEZ - 44gr.",
    category: "barritas",
    image: "/Images/BIbanana.jpg",
    price: "1300",
  },
  {
    id: "046",
    name: "BARRA INTEGRA ALMENDRA Y NUEZ - 44gr.",
    category: "barritas",
    image: "/Images/BIalmendra.jpg",
    price: "1300",
  },
  {
    id: "047",
    name: "BARRA INTEGRA CHOCOLATE y AVENA - 44gr.",
    category: "barritas",
    image: "/Images/BIchocolate.jpg",
    price: "1300",
  },
  {
    id: "048",
    name: "BARRA INTEGRA CON GIRASOL - 44gr.",
    category: "barritas",
    image: "/Images/BIgirasol.jpg",
    price: "SIN STOCK",
  },
  {
    id: "049",
    name: "BARRA INTEGRA CAJU Y ARANDANOS - 44gr.",
    category: "barritas",
    image: "/Images/BIcajuarandano.jpg",
    price: "1300",
  },
  {
    id: "063",
    name: "MIX 18 BARRAS INTEGRA",
    category: "barritas",
    image: "/Images/muchasbarrasintegra.png",
    price: "17000",
  },
  {
    id: "061",
    name: "ALFAJOR CELIENERGY NUEZ Y DDL - 50gr.",
    category: "bocadito",
    image: "/Images/celienergy.JPG",
    price: "SIN STOCK",
  },
  // {
  //   id: "098",
  //   name: "BARRA 71% cacao - 80grs.",
  //   category: "Barritas",
  //   image: "/Images/almendra_cacao_71.PNG",
  //   price: "SIN STOCK",
  // },
];

export default productsData;
