const productsData = [
  {
    id: "001",
    name: "BARRA DE PASAS Y ARANDANOS SIN AZUCAR - 45grs.",
    category: "Barritas",
    image: "/Images/muecas-pasasyarandanos.jpeg",
    price: "290",
  },
  {
    id: "002",
    name: "BARRA DE PASAS Y ALMENDRAS SIN AZUCAR - 45grs.",
    category: "Barritas",
    image: "/Images/muecas-pasasyalmendras.png",
    price: "290",
  },
  {
    id: "003",
    name: "BARRA DE MANZANA Y ARANDANOS SIN AZUCAR - 45grs.",
    category: "Barritas",
    image: "/Images/muecas-manzanayarandanos.png",
    price: "290",
  },
  {
    id: "004",
    name: "BARRA DE CACAO Y AVELLANAS SIN AZUCAR - 45grs.",
    category: "Barritas",
    image: "/Images/muecas-cacaoyavellanas.png",
    price: "290",
  },
  {
    id: "005",
    name: "BARRA DE BANANAS Y DDL SIN AZUCAR - 45grs.",
    category: "Barritas",
    image: "/Images/muecas-bananayddl.jpeg",
    price: "290",
  },

  {
    id: "006",
    name: "MANTEQUILLA DE MANI NATURAL CON STEVIA - 400gr.",
    category: "mantequilla",
    image: "/Images/mantemani.JPG",
    price: "750",
  },
  {
    id: "007",
    name: "MANTEQUILLA DE MANI CHOCOLATE - 400gr.",
    category: "mantequilla",
    image: "/Images/mantemani-choco.JPG",
    price: "750",
  },
  {
    id: "007",
    name: "MANTEQUILLA MANI NATURAL 100% - 400gr.",
    category: "mantequilla",
    image: "/Images/mnatural.jpg",
    price: "750",
  },
  {
    id: "008",
    name: "MANTEQUILLA DE MANI CROPPERS - 310gr.",
    category: "mantequilla",
    image: "/Images/croppers-mani.JPG",
    price: "430",
  },
  {
    id: "009",
    name: "JUAL STEVIA LIQUIDO - 125ml.",
    category: "edulcorante",
    image: "/Images/jual-edulcorante.jpg",
    price: "530",
  },
  {
    id: "009",
    name: "JUAL STEVIA LIQUIDO - 250ml.",
    category: "edulcorante",
    image: "/Images/jual-edulcorante.jpg",
    price: "850",
  },
  // {
  //   id: "009",
  //   name: "JUAL STEVIA LIQUIDO - 600ml.",
  //   category: "edulcorante",
  //   image: "/Images/jual-edulcorante.jpg",
  //   price: "1400",
  // },

  {
    id: "010",
    name: "JUAL STEVIA POLVO - 110gr.",
    category: "edulcorante",
    image: "/Images/jual-edulcorante-polvo.jpg",
    price: "720",
  },
  {
    id: "011",
    name: "KONY STEVIA POLVO - 100u.",
    category: "edulcorante",
    image: "/Images/kony.jpg",
    price: "900",
  },
  // {
  //   id: "0103",
  //   name: 'AZÚCAR INTEGRAL MASCABO "EL TUPÍ" 1kg.',
  //   category: "azucar",
  //   image: "/Images/azucar-tupi.jpeg",
  //   price: "570",
  // },
  {
    id: "104",
    name: "SILK ALMENDRA ORIGINAL - 1Lt.",
    category: "leches",
    image: "/Images/silk-almendra.JPG",
    price: "670",
  },
  {
    id: "105",
    name: "SILK ALMENDRA SIN AZUCAR - 1Lt.",
    category: "leches",
    image: "/Images/silk-almendra-sinazucar.JPG",
    price: "670",
  },
  {
    id: "106",
    name: "SILK CHOCOLATE - 1Lt.",
    category: "leches",
    image: "/Images/silk-chocolate.JPG",
    price: "670",
  },
  // {
  //   id: "012",
  //   name: "GRANOLA ORANN LIGHT - 1kg.",
  //   category: "cereales",
  //   image: "/Images/granola-oran.JPG",
  //   price: "SIN STOCK",
  // },

  {
    id: "013",
    name: "FRUTOS SECOS CON BANANA Y PASAS - 200gr.",
    category: "cereales",
    image: "/Images/frutossecosnuevo.JPG",
    price: "790",
  },
  {
    id: "014",
    name: "NUEZ PELADA - 150gr.",
    category: "cereales",
    image: "/Images/nuezpeladadorada.JPG",
    price: "400",
  },
  {
    id: "015",
    name: "ALMENDRAS - 150gr.",
    category: "cereales",
    image: "/Images/almendrasbowl.JPG",
    price: "970",
  },
  // {
  //   id: "016",
  //   name: "AVENA TRADICIONAL - 1kg.",
  //   category: "cereales",
  //   image: "/Images/avena.JPG",
  //   price: "SIN STOCK",
  // },
  {
    id: "017",
    name: "ALMOHADILLA DE SALVADO - 400gr.",
    category: "cereales",
    image: "/Images/almohadilla-salvado.jpg",
    price: "500",
  },
  // {
  //   id: "018",
  //   name: "ALMOHADILLA RELLENA FRUTILLA - 200gr.",
  //   category: "cereales",
  //   image: "/Images/frutillas.JPG",
  //   price: "SIN STOCK",
  // },
  {
    id: "070",
    name: "HARINA DE COCO CUMANÁ - 200gr.",
    category: "cereales",
    image: "/Images/cumana_coco.JPG",
    price: "600",
  },
  // {
  //   id: "019",
  //   name: "ARITOS FRUTADOS - 160gr.",
  //   category: "cereales",
  //   image: "/Images/aritosfrutados.JPG",
  //   price: "325",
  // },
  // {
  //   id: "020",
  //   name: "ARITOS AVENA & MIEL - 180gr.",
  //   category: "cereales",
  //   image: "/Images/aritosavenamiel.JPG",
  //   price: "SIN STOCK",
  // },
  // {
  //   id: "021",
  //   name: "COPOS DE MAIZ - 150gr.",
  //   category: "cereales",
  //   image: "/Images/3arroyos.webp",
  //   price: "270",
  // },

  {
    id: "023",
    name: "PEPAS INTEGRALES MEMBRILLO - 1kg.",
    category: "cereales",
    image: "/Images/pepas-integrales.jpeg",
    price: "SIN STOCK",
  },
  {
    id: "024",
    name: "PEPAS INTEGRALES MEMBRILLO - 250grs.",
    category: "cereales",
    image: "/Images/pepas-integrales.jpeg",
    price: "600",
  },
  // {
  //   id: "025",
  //   name: "COOKIES INTEGRALES NARANJA - 1kg.",
  //   category: "cereales",
  //   image: "/Images/cnaranja.JPG",
  //   price: "SIN STOCK",
  // },
  // {
  //   id: "026",
  //   name: "COOKIES INTEGRALES NARANJA - 200gr.",
  //   category: "cereales",
  //   image: "/Images/cnaranja.JPG",
  //   price: "SIN STOCK",
  // },
  {
    id: "0100",
    name: "DIABEST CHOCOLATE Y AVENA - 200gr.",
    category: "cereales",
    image: "/Images/diabest-choco-avena.jpeg",
    price: "600",
  },
  {
    id: "0101",
    name: "DIABEST COCO Y AVENA - 200gr.",
    category: "cereales",
    image: "/Images/diabest-coco-avena.jpeg",
    price: "600",
  },
  {
    id: "0101",
    name: "DIABEST LIMON - 200gr.",
    category: "cereales",
    image: "/Images/diabest-limon.jpeg",
    price: "600",
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
    price: "SIN STOCK",
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
    price: "SIN STOCK",
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

  {
    id: "033",
    name: "MERMELADA DIETETICA DURAZNO - 400gr.",
    category: "mermelada",
    image: "/Images/mermelada-durazno.JPG",
    price: "700",
  },
  {
    id: "034",
    name: "MERMELADA DIETETICA FRUTILLA - 400gr",
    category: "mermelada",
    image: "/Images/mermelada-frutilla.jpeg",
    price: "700",
  },
  {
    id: "035",
    name: "MERMELADA DIETETICA ARANDANOS - 400gr",
    category: "mermelada",
    image: "/Images/arandanosmerme.JPG",
    price: "700",
  },

  {
    id: "064",
    name: "MERMELADA DIETETICA FRUTILLA con STEVIA",
    category: "mermelada",
    image: "/Images/frutilla-mermelada.JPG",
    price: "900",
  },
  {
    id: "065",
    name: "MERMELADA DIETETICA ARANDANOS con STEVIA",
    category: "mermelada",
    image: "/Images/arandano-mermelada.JPG",
    price: "900",
  },
  {
    id: "036",
    name: "MIEL PURA - 500gr",
    category: "mermelada",
    image: "/Images/mielpura.JPG",
    price: "750",
  },

  {
    id: "037",
    name: "PAN ESPECIAL CALABAZA masa madre - 530gr.",
    category: "cereales",
    image: "/Images/pan-calabaza.jpg",
    price: "700",
  },
  {
    id: "038",
    name: "PAN DOBLE INTEGRAL masa madre - 530gr.",
    category: "cereales",
    image: "/Images/pan-integral.png",
    price: "700",
  },
  {
    id: "039",
    name: "MIX DE SEMILLAS (chía, lino, sesamo, girasol) - 200gr.",
    category: "cereales",
    image: "/Images/mixsemillas.webp",
    price: "350",
  },

  {
    id: "040",
    name: "GRANOLA INTEGRA CLASICA - 1kg.",
    category: "cereales",
    image: "/Images/granola_integra_caju.jpeg",
    price: "3100",
  },
  {
    id: "041",
    name: "GRANOLA CHOCOLATE - 1kg.",
    category: "cereales",
    image: "/Images/granola_integra_chocolate.jpeg",
    price: "3100",
  },
  {
    id: "042",
    name: "PREMEZCLA PANCAKE MANI (ONETWOFIT) - 300gr.",
    category: "cereales",
    image: "/Images/onetwocacao.JPG",
    price: "1500",
  },
  {
    id: "043",
    name: "PREMEZCLA PANCAKE CON STEVIA (ONETWOFIT) - 300gr.",
    category: "cereales",
    image: "/Images/onetwocacao.JPG",
    price: "1600",
  },
  {
    id: "044",
    name: "PREMEZCLA PANCAKE CACAO (ONETWOFIT) - 300gr.",
    category: "cereales",
    image: "/Images/onetwocacao.JPG",
    price: "1650",
  },

  {
    id: "045",
    name: "BARRA INTEGRA BANANA Y NUEZ - 44gr.",
    category: "barritas",
    image: "/Images/BIbanana.jpg",
    price: "250",
  },
  {
    id: "046",
    name: "BARRA INTEGRA ALMENDRA Y NUEZ - 44gr.",
    category: "barritas",
    image: "/Images/BIalmendra.jpg",
    price: "250",
  },
  {
    id: "047",
    name: "BARRA INTEGRA CHOCOLATE y AVENA - 44gr.",
    category: "barritas",
    image: "/Images/BIchocolate.jpg",
    price: "SIN STOCK",
  },
  {
    id: "048",
    name: "BARRA INTEGRA CON GIRASOL - 44gr.",
    category: "barritas",
    image: "/Images/BIgirasol.jpg",
    price: "250",
  },
  {
    id: "049",
    name: "BARRA INTEGRA CAJU Y ARANDANOS - 44gr.",
    category: "barritas",
    image: "/Images/BIcajuarandano.jpg",
    price: "250",
  },
  // {
  //   id: "050",
  //   name: "BARRA INTEGRA SEMILLAS Y CHOCOLATE SIN TACC - 27gr.",
  //   category: "barritas",
  //   image: "/Images/semilla-cacao.JPG",
  //   price: "SIN STOCK",
  // },
  // {
  //   id: "062",
  //   name: "BARRA INTEGRA SEMILLA Y ARÁNDANOS SIN TACC - 27gr.",
  //   category: "barritas",
  //   image: "/Images/integra-semilla.JPG",
  //   price: "SIN STOCK",
  // },
  {
    id: "051",
    name: "BARRA INTEGRA BASE DE CHOCOLATE CON MANI - 44gr.",
    category: "barritas",
    image: "/Images/integrachocomani.JPG",
    price: "280",
  },
  {
    id: "052",
    name: "BARRA INTEGRA BASE DE CHOCOLATE con ARÁNDANOS - 44gr.",
    category: "barritas",
    image: "/Images/barra-chocoyarandano.jpg",
    price: "280",
  },
  {
    id: "063",
    name: "MIX 18 BARRAS INTEGRA",
    category: "barritas",
    image: "/Images/muchasbarrasintegra.png",
    price: "4050",
  },
  // {
  //   id: "053",
  //   name: "CRACKERS PARMESANO - 150gr.",
  //   category: "crackers",
  //   image: "/Images/parmesanointegra.jpeg",
  //   price: "SIN STOCK",
  // },
  // {
  //   id: "054",
  //   name: "CRACKERS TOMATE ALBAHACA - 150gr.",
  //   category: "crackers",
  //   image: "/Images/crackers-tomate.png",
  //   price: "SIN STOCK",
  // },
  // {
  //   id: "055",
  //   name: "CRACKERS SEMILLAS - 150gr.",
  //   category: "crackers",
  //   image: "/Images/crackers-semilla.png",
  //   price: "300",
  // },

  // {
  //   id: "056",
  //   name: "COOKIES INTEGRA ALMENDRA Y COCO - 120gr.",
  //   category: "galletitas",
  //   image: "/Images/cookiealmendra.jpeg",
  //   price: "530",
  // },
  // {
  //   id: "057",
  //   name: "COOKIES INTEGRA CHOCOLATE Y AVELLANA - 120gr.",
  //   category: "galletitas",
  //   image: "/Images/cookiechocolate.jpeg",
  //   price: "530",
  // },
  // {
  //   id: "058",
  //   name: "COOKIES INTEGRA LIMON Y AMAPOLAS - 120gr.",
  //   category: "galletitas",
  //   image: "/Images/cookielimon.jpeg",
  //   price: "530",
  // },
  {
    id: "059",
    name: "BOCADITO INTEGRA MANI & CHOCOLATE - 26gr.",
    category: "bocadito",
    image: "/Images/bocaditochoco.png",
    price: "SIN STOCK",
  },
  {
    id: "060",
    name: "BOCADITO INTEGRA ARÁNDANOS & CHOCOLATE - 26gr.",
    category: "bocadito",
    image: "/Images/bocaditointegracya.png",
    price: "200",
  },
  {
    id: "061",
    name: "ALFAJOR CELIENERGY NUEZ Y DDL - 50gr.",
    category: "bocadito",
    image: "/Images/celienergy.JPG",
    price: "250",
  },
];

export default productsData;
