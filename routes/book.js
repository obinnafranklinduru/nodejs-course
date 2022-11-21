const express = require('express')
const bookRouter = express.Router();

const EventEmitter = require('events');
const myEvent = new EventEmitter();

myEvent.on("test-Event", (data) => {
    console.log("this event is listening");
    console.log(data)
})

bookRouter.route('/book').get((req, res) => {
    myEvent.emit("test-Event", {name: "Obinna Franklin Duru"})
  res.send('The book world')
}).post((req, res) => {
    myEvent.emit("test-Event", {name: "Obinna Franklin Duru"})
  res.json({title: 'Hello World!'})
})

bookRouter.get('/book/:id', (req, res) => {
    myEvent.emit("test-Event", {name: "Obinna Franklin Duru"})
  res.json(`obinna book ${req.params.id}`)
})

module.exports = bookRouter