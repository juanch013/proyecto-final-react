const platos = [
    {
        "id":"1",
        "nombre":"Milanesa de carne con papas fritas",
        "precio":"390",
        "imgSrc":"images/milanesa.png",
        "desc":"Milanesa de carne vacuna, acompañada con papas fritas de la casa y ensalada mixta , como aderezo guacamole y mayonesa saborizada con morrones"
    },
    {
        "id":"2",
        "stock":"5",
        "nombre":"Alitas de pollo",
        "precio":"250",
        "imgSrc":"images/alitas de pollo.png",
        "desc":"Alitas de pollo estilo kentucky acompañadas con un salsa barbacoa de la casa"
    },
    {
        "id":"3",
        "stock":"5",
        "nombre":"Brochets",
        "precio":"280",
        "imgSrc":"images/bochetas.png",
        "desc":"Brochetas de un mix de carnes, vacuna y porcina , asadas al estilo barbacoa"
    },
    {
        "id":"4",
        "stock":"5",
        "nombre":"Brownie con nuez",
        "precio":"200",
        "imgSrc":"images/brownie con nuez.png",
        "desc":"Bronie de chocolate , con un topping de nueces y chocolate amargo"
    },
    {
        "id":"5",
        "stock":"5",
        "nombre":"Brownie",
        "precio":"180",
        "imgSrc":"images/brownie.png",
        "desc":"Bronie de chocolate"
    },
    {
        "id":"6",
        "stock":"5",
        "nombre":"Burrito",
        "precio":"180",
        "imgSrc":"images/burrito.png",
        "desc":"Burrito relleno con carne , lechuga , tomate , repollo , mayonesa , aderezo con yogurt y cebolla morada"
    },
    {
        "id":"7",
        "stock":"5",
        "nombre":"Carne a la parrilla",
        "precio":"220",
        "imgSrc":"images/carne a la parrilla.png",
        "desc":"Bife de colita de cuadril , asado a la parrilla"
    },
    {
        "id":"8",
        "stock":"10",
        "nombre":"Cheescake",
        "precio":"150",
        "imgSrc":"images/cheescake.png",
        "desc":"Cheescake con un toping de gelatina con frutos rojos(frambuesa , frutilla y cereza) y una salsa dulce de frutillas"
    },
    {
        "id":"9",
        "stock":"10",
        "nombre":"Chivito",
        "precio":"300",
        "imgSrc":"images/chivito.png",
        "desc":"Chivito al estilo Uruguayo , sanguche de lomito , con tomate , lechuga , muzarella , jamon , mayonesa , morron y huevo frito , acompañado con papas fritas"
    },
    {
        "id":"10",
        "stock":"10",
        "nombre":"Copa helada",
        "precio":"150",
        "imgSrc":"images/copa helado.png",
        "desc":"Copa de helado sabor crema , con un baño con salsa de chocolate , acompañada con galletitas molidas sabor chocolate"
    },
    {
        "id":"11",
        "stock":"10",
        "nombre":"Ensalada cesar",
        "precio":"230",
        "imgSrc":"images/ensalada con pollo.png",
        "desc":"Bowl de ensalada de tomate lechuga , tomate , cebolla y pepino con pollo estilo crispy y una salsa con yogurt griego"
    },
    {
        "id":"12",
        "stock":"10",
        "nombre":"Ensalada de frutas",
        "precio":"110",
        "imgSrc":"images/ensalada de frutas.png",
        "desc":"Ensalada de frutas con frutilla, kiwi, durazno , melon , manzana, banana, piña y frambuesa"
    },
    {
        "id":"13",
        "stock":"7",
        "nombre":"Ensalada Mixta",
        "precio":"130",
        "imgSrc":"images/ensalada mixtra.png",
        "desc":"Ensalada mixta compuesta de lechuga , tomate y cebolla morada"
    },
    {
        "id":"15",
        "stock":"7",
        "nombre":"Helado",
        "precio":"150",
        "imgSrc":"images/helado.png",
        "desc":"Copa de helado, de sabores a eleccion(chocolate, crema , frutilla,banana split o tramontana)"
    },
    {
        "id":"16",
        "stock":"7",
        "nombre":"Milanesa Napolitana",
        "precio":"280",
        "imgSrc":"images/milanesa napolitana.png",
        "desc":"Milanesa de carne vacuna , con salsa de tomate , jamon y muzarella , acompañada con papas fritas y/o ensalada rusa"
    },
    {
        "id":"17",
        "stock":"7",
        "nombre":"Nuggets",
        "precio":"160",
        "imgSrc":"images/nuggets.png",
        "desc":"12 piesas de nuggets de pollo con variedad de aderezos(ketchup , mayonesas saborizadas , mostaza y salsa barbacoa)"
    },
    {
        "id":"18",
        "stock":"12",
        "nombre":"Papas rusticas",
        "precio":"160",
        "imgSrc":"images/papas rusticas.png",
        "desc":"Papas estilo rusticas"
    },
    {
        "id":"19",
        "stock":"12",
        "nombre":"Piza carbonara",
        "precio":"280",
        "imgSrc":"images/piza carbonara.png",
        "desc":"Pizza de masa madre estilo carbonara"
    }
    ,
    {
        "id":"19",
        "stock":"12",
        "nombre":"Piza con peperoni",
        "precio":"300",
        "imgSrc":"images/pizza con peperoni.png",
        "desc":"Pizza de masa madre con muzarella y topping de peperoni"
    },
    {
        "id":"20",
        "stock":"12",
        "nombre":"Sanguche de pollo",
        "precio":"280",
        "imgSrc":"images/sanguche de pollo.png",
        "desc":"Sanguche con lechuga , tomate , muzarella , huevo y pollo a la plancha con aderezo de la casa acompañado de papas fritas"
    },
    {
        "id":"21",
        "stock":"12",
        "nombre":"Sanguche de pollo crispy",
        "precio":"300",
        "imgSrc":"images/sandwich pollo.png",
        "desc":"Sanguche de pollo estilo crispy con rebozado de cereales , con tomate, lechuga , cheddar , bacon y aderezo de la casa , acompañado con papas fritas"
    },
    {
        "id":"22",
        "stock":"12",
        "nombre":"Tacos de carne asada",
        "precio":"250",
        "imgSrc":"images/tacos carne asada.png",
        "desc":"6 tacos de carne vacuna asada con cebolla , cilantro y salsa de la casa"
    },
    {
        "id":"23",
        "stock":"12",
        "nombre":"Tacos de pollo asado",
        "precio":"250",
        "imgSrc":"images/tacos de pollo.png",
        "desc":"6 tacos de carne de pollo asada con cebolla , cilantro y salsa de la casa"
    },
    {
        "id":"24",
        "stock":"12",
        "nombre":"Torta de chocolate",
        "precio":"180",
        "imgSrc":"images/torta choco.png",
        "desc":"Porcion de torta de chocolate amargo rellena con un mouse de crema de avellanas"
    }

]


export const getPlatos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(platos)
        }, 2000)
    })
}