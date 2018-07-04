#!/usr/bin/env node

'use strict'

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const bouquetSpecStore = require('./stores/bouquet-spec-store')
const flowerStore = require('./stores/flower-store')
const controller = require('./controller')(
  bouquetSpecStore,
  flowerStore,
  readline
)

process.stdin.setEncoding('utf8')
readline.setPrompt('')

// Read bouquet specs (designs) and flowers, line by line,
// and output a bouquet when possible.
readline.on('line', controller.processLine)
