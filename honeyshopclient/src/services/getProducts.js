let allProducts = [
    {
        tabId: 0,
        categoryName: "Med",
        products: [
            {
                productId: 1,
                productTitle: "Cvjetni med",
                productDescription: "Dobiven iz nektara različitih biljnih livadnih vrsta, ovaj prirodni med odličan je zaslađivač i izvrsna zamjena za šećer u raznim jelima i pićima.",
                productPrice: 20,
                amount: 1,
                addedToBasket: false
            },
            {
                productId: 2,
                productTitle: "Bagremov med",
                productDescription: "Med je pogodan za mlađe osobe i pomaže u oporavku od bolesti. Bagremov je med pogodniji za alergičare od ostalih vrsta meda jer sadrži manje peludi. Vrlo je ugodnoga i blagoga okusa te odlično nadomješta izgubljenu energiju. Djeca najradije jedu bagremov med zbog blagog okusa. Regulira rad želuca i probavnog sustava, a pomaže i kod bronhitisa i upala grla. Ima smirujuć učinak na živčani sustav i pomaže u borbi protiv nesanice.",
                productPrice: 30,
                amount: 1,
                addedToBasket: false
            },
            {
                productId: 3,
                productTitle: "Perin med",
                productDescription: "Jebački med",
                productPrice: 40,
                amount: 1,
                addedToBasket: false
            }
        ]
    },
    {
        tabId: 1,
        categoryName: "Propolis",
        products: [
            {
                productId: 1,
                productTitle: "Cvjetni Propolis",
                productDescription: "",
                productPrice: 20,
                amount: 1,
                addedToBasket: false
            },
            {
                productId: 2,
                productTitle: "Bagremov Propolis",
                productDescription: "",
                productPrice: 25,
                amount: 1,
                addedToBasket: false
            },
            {
                productId: 3,
                productTitle: "Perin Propolis",
                productDescription: "Jebački Propolis",
                productPrice: 30,
                amount: 1,
                addedToBasket: false
            }
        ]
    },
    {
        tabId: 2,
        categoryName: "Zajednice",
        products: [
            {
                productId: 1,
                productTitle: "Mala zajednica",
                productDescription: "Velika",
                productPrice: 200,
                amount: 1,
                addedToBasket: false
            },
            {
                productId: 2,
                productTitle: "Srednja zajednica",
                productDescription: "Srednja",
                productPrice: 300,
                amount: 1,
                addedToBasket: false
            },
            {
                productId: 3,
                productTitle: "Velika zajednica",
                productDescription: "Jebačka zajednica",
                productPrice: 400,
                amount: 1,
                addedToBasket: false
            }
        ]
    }
]

function getProducts() {
    return allProducts
}

export default getProducts
