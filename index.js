#!/usr/bin/env node

const {getCode, getName} = require("country-list");
const axios = require("axios");

console.log(getName('IS'));
console.log(getCode('Iceland'));
console.log(getCode('Nowhere-to-be-found-land'));



