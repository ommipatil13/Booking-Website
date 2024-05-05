import Express from "express";

const app = Express();

app.use('/', (req, res, next) => {
    res.send('hello');
})

app.listen(8080, () => {
    console.log(`server is live ${8080}`)
})