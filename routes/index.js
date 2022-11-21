const express = require('express')
const router = express.Router();

const EventEmitter = require('events');
const bookRouter = require('./book');
const myEvent = new EventEmitter();

myEvent.on("test-Event", (data) => {
    console.log("this event is listening");
    console.log(data)
})

router.get('/', (req, res) => {
    myEvent.emit("test-Event", {name: "Obinna Franklin Duru"})
  res.send('Hello World!')
})

router.post('/', (req, res) => {
    myEvent.emit("test-Event", {name: "Obinna Franklin Duru"})
  res.json({title: 'Hello World!'})
})

router.use(bookRouter);

router.all('/*', (req, res) => {
    myEvent.emit("test-Event", {name: "Obinna Franklin Duru"})
  res.send('Page Not Found')
})

module.exports = router