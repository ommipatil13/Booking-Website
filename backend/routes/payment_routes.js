import Express from 'express';
import stripe from 'stripe';
const stripeApi = stripe('sk_test_51PIuutSAo5yI3WPvmeSvG9auNCtSFxfvlnJBUwQb2rnJYZq4DKJe3SdetIpeWEFGVKMh9RKEXX8kQcb4Eua3OKeW00aU9sZOZs')

const paymentRouter = Express.Router();

paymentRouter.post('/', async (req, res) => {
    const product = await stripeApi.products.create({
        name: "film"
    })

    if (product) {
        var price = await stripeApi.prices.create({
            product: `${product.id}`,
            unit_amount: 50 * 50,
            currency: 'usd',

        })
    }

    if (price.id) {
        var session = await stripeApi.checkout.sessions.create({
            line_items: [
                {
                    price: `${price.id}`,
                    quantity: 1
                }
            ],
            mode: 'payment',
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
            customer_email: 'demo@gmail.com',
        })

    }

    res.json(session)

});

export default paymentRouter;
