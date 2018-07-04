const Flower = require('./models/flower')
const validator = require('./validator')
const bouquetSpecBuilder = require('./bouquet-spec-builder')

/**
 * Validate and parse bouquet spec.
 * @param {string} line
 * @return {?BouquetSpec} new BouquetSpec or null if line is invalid
 */

exports.parseBouquetSpecLine = (line) => {

  if (validator.hasInvalidBouquetSpecParams(line)) {
    throw new Error('Incorrect bouquet params')
  }

  return bouquetSpecBuilder.buildBouquet(line)
}

/**
 * Validate and parse flower.
 * @param {string} line
 * @return {?Flower} new Flower or null if line is invalid
 */
exports.parseFlowerLine = (line) => {

  if (validator.hasInvalidFlowerParams(line)) {
    throw new Error('Incorrect flower params')
  }

  return new Flower (line[0], line[1])
}
