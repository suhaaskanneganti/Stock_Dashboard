const Joi = require('joi');
const express = require('express');

const app = express();

app.use( express.json() )

const stocks = [
        {      
            ticker: 'AAPL',
            price: 175.06,
            history: [175.06]
        },
        {
            ticker: 'TSLA',
            price: 1091.26,
            history: [1091.26]
        },
        {    
            ticker: 'AMZN',
            price: 3281.10,
            history: [3281.10]
        },
        {
            ticker: 'NIO',
            price: 22.47,
            history: [22.47]
        },
        {     
            ticker: 'GOOGL',
            price: 2821.26,
            history: [2821.26]
        }
]

app.get('/', (req, res) => {
    res.send("Welcome to the local host.")
})

app.get('/api', (req, res) => {
    res.send('Welcome to the SimdaqAPI.')
})

app.get('/api/stocks', (req, res) => {
    res.status(200).send(stocks)
})

app.get('/api/stocks/:name', (req, res) => {
    const stock = stocks.find( s => s.name === req.params.name )
    if(!stock) return res.status(404).send("The stock with the given name was not found.")
    res.send(stock)
})

app.post('/api/stocks/', (req, res) => {
    const { error } = validateStock(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const stock = {
        id: stocks.length + 1,
        name: req.body.name,
        ticker: req.body.ticker,
        price: req.body.price
    }
    stocks.push(stock)
    res.send(stock)
})


app.put('/api/stocks/:name', (req, res) => {

    const stock = stocks.find( s => s.name === req.params.name )
    if(!stock) return res.status(404).send("The stock with the given name was not found.")
    
    const { error } = validateStock(stock)

    if(error) return res.status(400).send(error.details[0].message)

    stock.price = req.body.price
    res.send(stock)

})

// app.delete('/api/stocks/:name', (req, res) => {
//     const stock = stocks.find( s => s.name === req.params.name )
//     if(!stock) return res.status(404).send("The stock with the given name was not found.")

//     const index = stocks.indexOf(stock)
//     stocks.splice(index, 1)

//     res.send(stock)

// })

function validateStock(stock) {
    const schema = {
        // id: Joi.number().min(1).required(),
        // name: Joi.string().min(1).required(),
        ticker: Joi.string().min(1).max(4).required(),
        price: Joi.number().min(1).required()
    } 
    return Joi.validate(stock, schema)
}

function changeStockPrices(arr) {
    setInterval( () => {
        arr.forEach((element, index) => {
            const percent = (Math.floor(Math.random() * (105 - 95 + 1) + 95))/100.0;
            const newPrice = arr[index].price * percent;
            arr[index].price = newPrice;
            arr[index].history.push(newPrice)
          });
    }, 1000)
}

const PORT = process.env.PORT || 3001;
app.listen(
    PORT,
    function() {
        console.log(`Started listening on http://localhost:${PORT}`);
        changeStockPrices(stocks)
    }
);

