const productsData = [
  {
    id: "001",
    name: "BARRA DE PASAS Y ARANDANOS SIN AZUCAR - 45grs.",
    category: "Barritas",
    image: "/Images/muecas-pasasyarandanos.jpeg",
    price: "190",
  },
  {
    id: "002",
    name: "BARRA DE PASAS Y ALMENDRAS SIN AZUCAR - 45grs.",
    category: "Barritas",
    image: "/Images/muecas-pasasyalmendras.png",
    price: "190",
  },
  {
    id: "003",
    name: "BARRA DE MANZANA Y ARANDANOS SIN AZUCAR - 45grs.",
    category: "Barritas",
    image: "/Images/muecas-manzanayarandanos.png",
    price: "190",
  },
  {
    id: "004",
    name: "BARRA DE CACAO Y AVELLANAS SIN AZUCAR - 45grs.",
    category: "Barritas",
    image: "/Images/muecas-cacaoyavellanas.png",
    price: "190",
  },
  {
    id: "005",
    name: "BARRA DE BANANAS Y DDL SIN AZUCAR - 45grs.",
    category: "Barritas",
    image: "/Images/muecas-bananayddl.jpeg",
    price: "190",
  },

  {
    id: "006",
    name: "MANTEQUILLA DE MANI NATURAL CON STEVIA - 400gr.",
    category: "mantequilla",
    image: "/Images/mantemani.JPG",
    price: "580",
  },
  {
    id: "007",
    name: "MANTEQUILLA DE MANI CHOCOLATE - 400gr.",
    category: "mantequilla",
    image: "/Images/mantemani-choco.JPG",
    price: "580",
  },
  {
    id: "007",
    name: "MANTEQUILLA MANI NATURAL 100% - 400gr.",
    category: "mantequilla",
    image: "/Images/mnatural.jpg",
    price: "580",
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
    price: "450",
  },
  {
    id: "009",
    name: "JUAL STEVIA LIQUIDO - 250ml.",
    category: "edulcorante",
    image: "/Images/jual-edulcorante.jpg",
    price: "650",
  },
  {
    id: "009",
    name: "JUAL STEVIA LIQUIDO - 600ml.",
    category: "edulcorante",
    image: "/Images/jual-edulcorante.jpg",
    price: "1380",
  },
 
  {
    id: "010",
    name: "JUAL STEVIA POLVO - 110gr.",
    category: "edulcorante",
    image: "/Images/jual-edulcorante-polvo.jpg",
    price: "550",
  },
  {
    id: "011",
    name: "KONY STEVIA POLVO - 100u.",
    category: "edulcorante",
    image: "/Images/kony.jpg",
    price: "600",
  },
  {
    id: "012",
    name: "GRANOLA ORANN LIGHT - 1kg.",
    category: "cereales",
    image: "/Images/granola-oran.JPG",
    price: "1260",
  },

  {
    id: "013",
    name: "FRUTOS SECOS CON BANANA Y PASAS - 200gr.",
    category: "cereales",
    image: "/Images/frutossecosnuevo.JPG",
    price: "290",
  },
  {
    id: "014",
    name: "NUEZ PELADA - 100gr.",
    category: "cereales",
    image: "/Images/nuezpeladadorada.JPG",
    price: "215",
  },
  {
    id: "015",
    name: "ALMENDRAS - 200gr.",
    category: "cereales",
    image: "/Images/almendrasbowl.JPG",
    price: "650",
  },
  {
    id: "016",
    name: "AVENA TRADICIONAL - 1kg.",
    category: "cereales",
    image: "/Images/avena.JPG",
    price: "420",
  },
  {
    id: "017",
    name: "ALMOHADILLA DE SALVADO - 400gr.",
    category: "cereales",
    image: "/Images/almohadilla-salvado.jpg",
    price: "500",
  },
  {
    id: "018",
    name: "ALMOHADILLA RELLENA FRUTILLA - 200gr.",
    category: "cereales",
    image: "/Images/frutillas.JPG",
    price: "300",
  },
  {
    id: "019",
    name: "ARITOS FRUTADOS - 160gr.",
    category: "cereales",
    image: "/Images/aritosfrutados.JPG",
    price: "325",
  },
  {
    id: "020",
    name: "ARITOS AVENA & MIEL - 180gr.",
    category: "cereales",
    image: "/Images/aritosavenamiel.JPG",
    price: "370",
  },
  {
    id: "021",
    name: "COPOS DE MAIZ - 150gr.",
    category: "cereales",
    image: "/Images/3arroyos.webp",
    price: "270",
  },

  {
    id: "023",
    name: "PEPAS INTEGRALES MEMBRILLO - 1kg.",
    category: "cereales",
    image: "/Images/pepas-integrales.jpeg",
    price: "1400",
  },
  {
    id: "024",
    name: "PEPAS INTEGRALES MEMBRILLO - 250grs.",
    category: "cereales",
    image: "/Images/pepas-integrales.jpeg",
    price: "410",
  },
  {
    id: "025",
    name: "COOKIES INTEGRALES NARANJA - 1kg.",
    category: "cereales",
    image: "/Images/cnaranja.JPG",
    price: "1200",
  },
  {
    id: "026",
    name: "COOKIES INTEGRALES NARANJA - 200gr.",
    category: "cereales",
    image: "/Images/cnaranja.JPG",
    price: "410",
  },
  {
    id: "027",
    name: "COOKIES INTEGRALES VAINILLA Y PASAS - 1kg.",
    category: "cereales",
    image: "/Images/cintegrales.JPG",
    price: "1200",
  },
  {
    id: "028",
    name: "COOKIES INTEGRALES Y VAINILLA PASAS - 200gr.",
    category: "cereales",
    image: "/Images/cintegrales.JPG",
    price: "410",
  },
  {
    id: "029",
    name: "COOKIES INTEGRALES LIMON - 1kg.",
    category: "cereales",
    image: "/Images/cookielimon.JPG",
    price: "1200",
  },
  {
    id: "030",
    name: "COOKIES INTEGRALES LIMON - 200gr.",
    category: "cereales",
    image: "/Images/cookielimon.JPG",
    price: "410",
  },
  {
    id: "031",
    name: "COOKIES INTEGRALES CHOCOLATE CON MANI - 1kg.",
    category: "cereales",
    image: "/Images/cookiechocomani.JPG",
    price: "1200",
  },
  {
    id: "032",
    name: "COOKIES INTEGRALES CHOCOLATE CON MANI - 200gr.",
    category: "cereales",
    image: "/Images/cookieschocomani.jpg",
    price: "410",
  },

  {
    id: "033",
    name: "MERMELADA DIETETICA DURAZNO - 400gr.",
    category: "mermelada",
    image: "/Images/mermelada-durazno.JPG",
    price: "550",
  },
  {
    id: "034",
    name: "MERMELADA DIETETICA FRUTILLA - 400gr",
    category: "mermelada",
    image: "/Images/mermelada-frutilla.png",
    price: "550",
  },
  {
    id: "035",
    name: "MERMELADA DIETETICA ARANDANOS - 400gr",
    category: "mermelada",
    image: "/Images/arandanosmerme.JPG",
    price: "550",
  },
  {
    id: "036",
    name: "MIEL PURA - 400gr",
    category: "mermelada",
    image: "/Images/mielpura.JPG",
    price: "SIN STOCK",
  },

  {
    id: "037",
    name: "PAN ESPECIAL CALABAZA masa madre - 530gr.",
    category: "cereales",
    image: "/Images/pan-calabaza.jpg",
    price: "550",
  },
  {
    id: "038",
    name: "PAN DOBLE INTEGRAL masa madre - 530gr.",
    category: "cereales",
    image: "/Images/pan-integral.png",
    price: "SIN STOCK",
  },
  {
    id: "039",
    name: "MIX DE SEMILLAS (chía, lino, sesamo, girasol) - 200gr.",
    category: "cereales",
    image: "/Images/mixsemillas.webp",
    price: "200",
  },

  {
    id: "040",
    name: "GRANOLA INTEGRA CLASICA - 350gr.",
    category: "cereales",
    image: "/Images/granola-choco.webp",
    price: "800",
  },
  {
    id: "041",
    name: "GRANOLA CHOCOLATE - 350gr.",
    category: "cereales",
    image: "/Images/granola-choco.JPG",
    price: "800",
  },
  {
    id: "042",
    name: "PREMEZCLA PANCAKE MANI (ONETWOFIT) - 300gr.",
    category: "cereales",
    image: "/Images/onetwocacao.JPG",
    price: "1200",
  },
  {
    id: "043",
    name: "PREMEZCLA PANCAKE CON STEVIA (ONETWOFIT) - 300gr.",
    category: "cereales",
    image: "/Images/onetwocacao.JPG",
    price: "1300",
  },
  {
    id: "044",
    name: "PREMEZCLA PANCAKE CACAO (ONETWOFIT) - 300gr.",
    category: "cereales",
    image: "/Images/onetwocacao.JPG",
    price: "1450",
  },

  {
    id: "045",
    name: "BARRA INTEGRA BANANA Y NUEZ - 44gr.",
    category: "barritas",
    image: "/Images/BIbanana.jpg",
    price: "150",
  },
  {
    id: "046",
    name: "BARRA INTEGRA ALMENDRA Y NUEZ - 44gr.",
    category: "barritas",
    image: "/Images/BIalmendra.jpg",
    price: "150",
  },
  {
    id: "047",
    name: "BARRA INTEGRA CHOCOLATE y AVENA - 44gr.",
    category: "barritas",
    image: "/Images/BIchocolate.jpg",
    price: "150",
  },
  {
    id: "048",
    name: "BARRA INTEGRA CON GIRASOL - 44gr.",
    category: "barritas",
    image: "/Images/BIgirasol.jpg",
    price: "150",
  },
  {
    id: "049",
    name: "BARRA INTEGRA CAJU Y ARANDANOS - 44gr.",
    category: "barritas",
    image: "/Images/BIcajuarandano.jpg",
    price: "150",
  },
  {
    id: "050",
    name: "BARRA INTEGRA SEMILLAS Y CHOCOLATE SIN TACC - 27gr.",
    category: "barritas",
    image: "/Images/semilla-cacao.JPG",
    price: "150",
  },
  {
    id: "051",
    name: "BARRA INTEGRA BASE DE CHOCOLATE CON MANI - 44gr.",
    category: "barritas",
    image: "/Images/integrachocomani.JPG",
    price: "150",
  },
  {
    id: "052",
    name: "BARRA INTEGRA BASE DE CHOCOLATE con ARÁNDANOS - 44gr.",
    category: "barritas",
    image: "/Images/barra-chocoyarandano.jpg",
    price: "150",
  },
  {
    id: "053",
    name: "CRACKERS PARMESANO - 150gr.",
    category: "crackers",
    image: "/Images/parmesanointegra.jpeg",
    price: "SIN STOCK",
  },
  {
    id: "054",
    name: "CRACKERS TOMATE ALBAHACA - 150gr.",
    category: "crackers",
    image: "/Images/crackers-tomate.png",
    price: "SIN STOCK",
  },
  {
    id: "055",
    name: "CRACKERS SEMILLAS - 150gr.",
    category: "crackers",
    image: "/Images/crackers-semilla.png",
    price: "300",
  },

  {
    id: "056",
    name: "COOKIES INTEGRA ALMENDRA Y COCO - 120gr.",
    category: "galletitas",
    image: "/Images/cookiealmendra.jpeg",
    price: "300",
  },
  {
    id: "057",
    name: "COOKIES INTEGRA CHOCOLATE Y AVELLANA - 120gr.",
    category: "galletitas",
    image: "/Images/cookiechocolate.jpeg",
    price: "300",
  },
  {
    id: "058",
    name: "COOKIES INTEGRA LIMON Y AMAPOLAS - 120gr.",
    category: "galletitas",
    image: "/Images/cookielimon.jpeg",
    price: "300",
  },
  {
    id: "059",
    name: "BOCADITO INTEGRA MANI & CHOCOLATE - 26gr.",
    category: "bocadito",
    image: "/Images/bocaditochoco.png",
    price: "120",
  },
  {
    id: "060",
    name: "BOCADITO INTEGRA ARÁNDANOS & CHOCOLATE - 26gr.",
    category: "bocadito",
    image: "/Images/bocaditointegracya.png",
    price: "120",
  },
  {
    id: "061",
    name: "ALFAJOR CELIENERGY NUEZ Y DDL - 50gr.",
    category: "bocadito",
    image: "/Images/celienergy.JPG",
    price: "210",
  },
];

export default productsData;
