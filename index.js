let express = require("express");
let fs = require('fs');
const app = express();

const index = fs.readFileSync('index.html', 'utf-8')
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const product = data.products