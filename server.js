//Load express
const express = require('express')

//Create express app
const app = express()

//Set the port
port = 3000

// Mount routes
app.get('/', function (req, res) {
    res.send('<h2>99 Bottles of formula on the wall...<br/>99 Bottles of formula...<br/><a href="http://localhost:3000/98">Take one down, pass it around...</a><br/>98 Babies still crying down the hall!<br/>  <p><img alt="Crying babies cartoon" src="http://i.graphicmama.com/blog/wp-content/uploads/2022/01/31104231/Free-Baby-Cartoon-Vector-Characters-9.png"></p><h2>')
})

app.get('/:number_of_formulas', (req, res) => {
    console.log(req.params)
    let remaining = req.params.number_of_formulas
    let minusOne = (`${remaining}` - 1)
    let response = (`<h2>${remaining} Bottles of formula on the wall...<br/> ${remaining} Bottles of formula...<br/> <a href="http://localhost:3000/${minusOne}">Take one down, pass it around...</a> <br/> ${minusOne} Babies still crying down the hall!<br/>  <p><img alt="Crying babies cartoon" src="http://i.graphicmama.com/blog/wp-content/uploads/2022/01/31104231/Free-Baby-Cartoon-Vector-Characters-9.png"></p><h2>
    `)
    let startOver = ('<h2>There are zero bottles of formula left...<br /> Time for a Target run...<br/> <a href="http://localhost:3000/">Start Over</a><br/> <p><img alt="Target run cartoon" src="https://daily.slickdeals.net/wp-content/uploads/2021/09/Hero_Target_VideoGame_Promotion-1068x601.jpg"><p/><h2>')
    
    if (`${remaining}` > 0) {
        res.send(`${response}`)
    }else {
        res.send(startOver)
    }
})

//Tell the app to listen on port 3000
//for HTTP requests from the clients
app.listen(port, function () {
    console.log(`Listening to port ${port}`)
})