const mercadopago = require("mercadopago");

mercadopago.configure({
  access_token:
    "APP_USR-6317427424180639-042414-47e969706991d3a442922b0702a0da44-469485398",
  integrator_id: "dev_24c65fb163bf11ea96500242ac130004",
});

module.exports = {
    home: (req, res) => {
        return res.render("index");
    },
    detail: (req, res) => {

        let preferenceObj = {
            items: [
                {
                id: 1234,
                title: req.query.title,
                picture_url: `http://gzevallos-mp-ecommerce-php.herokuapp.com/images/products/${req.query.img}`,
                description: "Calzado con demasiada facha",
                quantity: Number(req.query.unit),
                unit_price: Number(req.query.price),
                },
            ],
            payer: {
                name: "Lalo",
                surname: "Landa",
                email: "test_user_63274575@testuser.com",
                phone: {
                area_code: "11",
                number: 22223333,
                },
                address: {
                street_name: "False",
                street_number: 123,
                zip_code: "1111",
                },
            },
            back_urls: {
                success: "http://gonzalozevallos-mercadopago.herokuapp.com/success",
                failure: "http://gonzalozevallos-mercadopago.herokuapp.com/failure",
                pending: "http://gonzalozevallos-mercadopago.herokuapp.com/pending",
            },
            auto_return: "approved",
            payment_methods: {
                excluded_payment_methods: [
                {
                    id: "amex",
                },
                ],
                excluded_payment_types: [
                {
                    id: "atm",
                },
                ],
                installments: 6,
            },
            notification_url:
                "http://gzevallos-mp-ecommerce-nodejs.herokuapp.com/notifications?source_news=webhooks",
            external_reference: "gonzalo.zev@gmail.com"
        };

        mercadopago.preferences.create(preferenceObj)
            .then(response => {
                preference = response.body;
                return res.render("detail", { ...req.query, preference});
            })
            .catch(err => console.log(err));
    },
    success: (req, res) => {
        return res.render("home", {
            ...req.query,
            status: "Success",
            success: true,
        });
    },
    failure: (req, res) => {
        return res.render("home", { status: "Failure" });
    },
    pending: (req, res) => {
        return res.render("home", { status: "Pending" });
    },
}