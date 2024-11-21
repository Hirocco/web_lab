'use strict';

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

//4
let categories = ['funnyJoke', 'lameJoke'];
let funnyJoke = [
  { 'joke': 'Dlaczego komputer poszedł do lekarza?', 'response': 'Bo złapał wirusa!' },
  { 'joke': 'Dlaczego komputer nie może być głodny?', 'response': 'Bo ma pełen dysk!' },
  { 'joke': 'Co mówi jeden bit do drugiego?', 'response': '„Trzymaj się, zaraz się przestawiamy!”' }
];

let lameJoke = [
  { 'joke': 'Dlaczego programiści preferują noc?', 'response': 'Bo w nocy jest mniej bugów do łapania!' },
  { 'joke': 'Jak nazywa się bardzo szybki programista?', 'response': 'Błyskawiczny kompilator!' }
];

app.get('/jokebook/categories', (req, res) => {
  res.json(categories);
});

app.get('/jokebook/joke/:category', (req, res) => {
  const category = req.params.category;

  if(!categories.includes(category)) {
    return res.status(400).json( { error: `Wrong category: ${category}` } ) 
  }

  const jokes = category === 'funnyJoke' ? funnyJoke : lameJoke;
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.json(randomJoke);
});

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {
//TODO1
  const r = parseFloat(req.params.r);

  if(isNaN(r) || r <= 0) {
    return res.status(400).json( { error: "Invalid radius" } );
  }

  const area = Math.PI * Math.pow(r, 2);
  const obwod = 2 * Math.PI * r;

  const result = {
    area: area.toFixed(2),
    obwod: obwod.toFixed(2)
  };

  res.json(result);
  console.log(result);
});

//TODO2
app.get('/math/rectangle/:width/:height', (req, res) => {
  const w = parseFloat(req.params.width);
  const h = parseFloat(req.params.height);

  if(isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
    return res.status(400).json( { error: "Invalid width or/and height" } ); 
  }

  const area = w * h;
  const obwod = 2 * w + 2 * h;

  const result = {
    area: area.toFixed(2),
    obwod: obwod.toFixed(2)
  }
  res.json(result);
  console.log(result);
});

//TODO3
app.get('/math/power/:base/:exponent', (req, res) => {
  const b = parseFloat(req.params.base);
  const e = parseFloat(req.params.exponent);

  if(isNaN(b) || isNaN(e)) {
    return res.status(400).json( { error: "Invalid base or/and exponent" } );
  }

  const powered = Math.pow(b, e);

  const result = { power: powered };

  if(req.query.root === 'true') {
    const rooted = Math.sqrt(b, e);
    result.root = rooted;
  }

  res.json(result);
  console.log(result);

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});