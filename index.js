const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));


app.get('', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

//app.post('/', (req, res) => {

    //const n1 = req.body.value1
    //const n2 = req.body.value2
    //let sum = n1 + n2
    //res.send('The value is:' + sum)
//})

//app.post('/', (req, res) => {

    //const n1 = req.body.value1
    //const n2 = req.body.value2
    //let multiply = n1 * n2
    //res.send('The value is:' + multiply)
//})

//app.post('/', (req, res) => {

    //const n1 = req.body.value1
    //const n2 = req.body.value2
    //let sub = n1 - n2
    //res.send('The value is:' + sub)
//})

app.post('/', (req, res) => {

    const n1 = req.body.value1
    const n2 = req.body.value2
    let divide = n1 / n2
    res.send('The value is:' + divide)
})






app.listen(3000, (res) => {
    console.log("server is running at port 3000")
})