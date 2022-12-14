const platos = [
    {
        "id":"1",
        "nombre":"Milanesa de carne con papas fritas",
        "precio":"390",
        "imgSrc":"/images/milanesa.png",
        "desc":"Milanesa de carne vacuna, acompañada con papas fritas de la casa y ensalada mixta , como aderezo guacamole y mayonesa saborizada con morrones",
        "cat":""
    },
    {
        "id":"2",
        "stock":"5",
        "nombre":"Alitas de pollo",
        "precio":"250",
        "imgSrc":"/images/alitas de pollo.png",
        "desc":"Alitas de pollo estilo kentucky acompañadas con un salsa barbacoa de la casa",
        "cat":"principal"
    },
    {
        "id":"3",
        "stock":"5",
        "nombre":"Brochets",
        "precio":"280",
        "imgSrc":"/images/bochetas.png",
        "desc":"Brochetas de un mix de carnes, vacuna y porcina , asadas al estilo barbacoa",
        "cat":"principal"
    },
    {
        "id":"4",
        "stock":"5",
        "nombre":"Brownie con nuez",
        "precio":"200",
        "imgSrc":"/images/brownie con nuez.png",
        "desc":"Bronie de chocolate , con un topping de nueces y chocolate amargo",
        "cat":"postre"
    },
    {
        "id":"5",
        "stock":"5",
        "nombre":"Brownie",
        "precio":"180",
        "imgSrc":"/images/brownie.png",
        "desc":"Bronie de chocolate",
        "cat":"postre"
    },
    {
        "id":"6",
        "stock":"5",
        "nombre":"Burrito",
        "precio":"180",
        "imgSrc":"/images/burrito.png",
        "desc":"Burrito relleno con carne , lechuga , tomate , repollo , mayonesa , aderezo con yogurt y cebolla morada",
        "cat":"principal"
    },
    {
        "id":"7",
        "stock":"5",
        "nombre":"Carne a la parrilla",
        "precio":"220",
        "imgSrc":"/images/carne a la parrilla.png",
        "desc":"Bife de colita de cuadril , asado a la parrilla",
        "cat":"principal"
    },
    {
        "id":"8",
        "stock":"10",
        "nombre":"Cheescake",
        "precio":"150",
        "imgSrc":"/images/cheescake.png",
        "desc":"Cheescake con un toping de gelatina con frutos rojos(frambuesa , frutilla y cereza) y una salsa dulce de frutillas",
        "cat":"postre"
    },
    {
        "id":"9",
        "stock":"10",
        "nombre":"Chivito",
        "precio":"300",
        "imgSrc":"/images/chivito.png",
        "desc":"Chivito al estilo Uruguayo , sanguche de lomito , con tomate , lechuga , muzarella , jamon , mayonesa , morron y huevo frito , acompañado con papas fritas",
        "cat":"principal"
    },
    {
        "id":"10",
        "stock":"10",
        "nombre":"Copa helada",
        "precio":"150",
        "imgSrc":"/images/copa helado.png",
        "desc":"Copa de helado sabor crema , con un baño con salsa de chocolate , acompañada con galletitas molidas sabor chocolate",
        "cat":"postre"
    },
    {
        "id":"11",
        "stock":"10",
        "nombre":"Ensalada cesar",
        "precio":"230",
        "imgSrc":"/images/ensalada con pollo.png",
        "desc":"Bowl de ensalada de tomate lechuga , tomate , cebolla y pepino con pollo estilo crispy y una salsa con yogurt griego",
        "cat":"principal"
    },
    {
        "id":"12",
        "stock":"10",
        "nombre":"Ensalada de frutas",
        "precio":"110",
        "imgSrc":"/images/ensalada de frutas.png",
        "desc":"Ensalada de frutas con frutilla, kiwi, durazno , melon , manzana, banana, piña y frambuesa",
        "cat":"postre"
    },
    {
        "id":"13",
        "stock":"7",
        "nombre":"Ensalada Mixta",
        "precio":"130",
        "imgSrc":"/images/ensalada mixtra.png",
        "desc":"Ensalada mixta compuesta de lechuga , tomate y cebolla morada",
        "cat":"principal"
    },
    {
        "id":"15",
        "stock":"7",
        "nombre":"Helado",
        "precio":"150",
        "imgSrc":"/images/helado.png",
        "desc":"Copa de helado, de sabores a eleccion(chocolate, crema , frutilla,banana split o tramontana)",
        "cat":"postre"
    },
    {
        "id":"16",
        "stock":"7",
        "nombre":"Milanesa Napolitana",
        "precio":"280",
        "imgSrc":"/images/milanesa napolitana.png",
        "desc":"Milanesa de carne vacuna , con salsa de tomate , jamon y muzarella , acompañada con papas fritas y/o ensalada rusa",
        "cat":"principal"
    },
    {
        "id":"17",
        "stock":"7",
        "nombre":"Nuggets",
        "precio":"160",
        "imgSrc":"/images/nuggets.png",
        "desc":"12 piesas de nuggets de pollo con variedad de aderezos(ketchup , mayonesas saborizadas , mostaza y salsa barbacoa)",
        "cat":"principal"
    },
    {
        "id":"18",
        "stock":"12",
        "nombre":"Papas rusticas",
        "precio":"160",
        "imgSrc":"/images/papas rusticas.png",
        "desc":"Papas estilo rusticas",
        "cat":"principal"
    },
    {
        "id":"19",
        "stock":"12",
        "nombre":"Piza carbonara",
        "precio":"280",
        "imgSrc":"/images/piza carbonara.png",
        "desc":"Pizza de masa madre estilo carbonara",
        "cat":"principal"
    }
    ,
    {
        "id":"25",
        "stock":"12",
        "nombre":"Piza con peperoni",
        "precio":"300",
        "imgSrc":"/images/pizza con peperoni.png",
        "desc":"Pizza de masa madre con muzarella y topping de peperoni",
        "cat":"principal"
    },
    {
        "id":"20",
        "stock":"12",
        "nombre":"Sanguche de pollo",
        "precio":"280",
        "imgSrc":"/images/sanguche de pollo.png",
        "desc":"Sanguche con lechuga , tomate , muzarella , huevo y pollo a la plancha con aderezo de la casa acompañado de papas fritas",
        "cat":"principal"
    },
    {
        "id":"21",
        "stock":"12",
        "nombre":"Sanguche de pollo crispy",
        "precio":"300",
        "imgSrc":"/images/sandwich pollo.png",
        "desc":"Sanguche de pollo estilo crispy con rebozado de cereales , con tomate, lechuga , cheddar , bacon y aderezo de la casa , acompañado con papas fritas",
        "cat":"principal"
    },
    {
        "id":"22",
        "stock":"12",
        "nombre":"Tacos de carne asada",
        "precio":"250",
        "imgSrc":"/images/tacos carne asada.png",
        "desc":"6 tacos de carne vacuna asada con cebolla , cilantro y salsa de la casa",
        "cat":"principal"
    },
    {
        "id":"23",
        "stock":"12",
        "nombre":"Tacos de pollo asado",
        "precio":"250",
        "imgSrc":"/images/tacos de pollo.png",
        "desc":"6 tacos de carne de pollo asada con cebolla , cilantro y salsa de la casa",
        "cat":"principal"
    },
    {
        "id":"24",
        "stock":"12",
        "nombre":"Torta de chocolate",
        "precio":"180",
        "imgSrc":"/images/torta choco.png",
        "desc":"Porcion de torta de chocolate amargo rellena con un mouse de crema de avellanas",
        "cat":"postre"
    }

]


export const getPlatos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(platos)
        }, 2000)
    })
}

export const getPlatoById = (id)=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(platos.find(plato => plato.id === id))
        }, 2000)
    })
}

export const getCategoriaPlatos = (_cat)=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(platos.filter(plato => plato.cat === _cat))
        }, 2000)
    })
}

