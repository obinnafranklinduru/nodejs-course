const EventEmitter = require('events');
const myEvent = new EventEmitter();

myEvent.on("test-Event", (data) => {
    console.log("this event is listening");
    console.log(data)
})


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    myEvent.emit("test-Event", {name: "Obinna Franklin Duru"})
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    myEvent.emit("test-Event", {name: "Obinna Franklin Duru"})
  res.json({title: 'Hello World!'})
})

app.route('/book').get((req, res) => {
    myEvent.emit("test-Event", {name: "Obinna Franklin Duru"})
  res.send('The book world')
}).post((req, res) => {
    myEvent.emit("test-Event", {name: "Obinna Franklin Duru"})
  res.json({title: 'Hello World!'})
})

app.get('/book/:id', (req, res) => {
    myEvent.emit("test-Event", {name: "Obinna Franklin Duru"})
  res.json(`obinna book ${req.params.id}`)
})

app.all('/*', (req, res) => {
    myEvent.emit("test-Event", {name: "Obinna Franklin Duru"})
  res.send('Page Not Found')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})