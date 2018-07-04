/**
 * Store bouquet specs.
 */

/**
 * Add a bouquet spec if it doesn't exist.
 * @param {Object} bouquetSpec
 */
const store = {}

const createBouquetSpecKey = (bouquetSpec) => {

  let bouquetSpecKey = bouquetSpec.name.concat(bouquetSpec.size)

  Object.keys(bouquetSpec.flowers).forEach(flower => {
    bouquetSpecKey = bouquetSpecKey.concat(flower)
      .concat(bouquetSpec.flowers[flower])
  })

  return bouquetSpecKey
}

exports.add = (bouquetSpec) => {
  store[createBouquetSpecKey(bouquetSpec)] = bouquetSpec
}

exports.getStorage = () => {
  return store
}
