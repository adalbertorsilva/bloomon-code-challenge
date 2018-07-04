/**
 * Simulate the flower storage facility.
 */

// Maximum capacity of the storage facility.
// const DEFAULT_MAX_FLOWERS = 256;
const store = {}

/**
 * Add a flower.
 * @param {Object} flower
 */
exports.add = (flower) => {
  const key = flower.name.concat(flower.size)
  store.hasOwnProperty(key) ? store[key]++ : store[key] = 1
  return store
}

exports.getStorage = () => {
  return store
}

exports.hasEnoughFlowersToBuild = (bouquetSpec) => {

  const flowerAmounts = []

  bouquetSpec.getFlowerKeys().forEach(key => {
    flowerAmounts.push(store.hasOwnProperty(key) && store[key] >= bouquetSpec.flowers[key[0]])
  })

  const flowersSet = new Set(flowerAmounts)
  return flowersSet.size === 1 && flowersSet.entries().next().value[0]
}

exports.withdrawFlowers = (bouquetSpec) => {

  bouquetSpec.getFlowerKeys().forEach(key => {
    store[key] = store[key] - bouquetSpec.flowers[key[0]]
  })

  return store
}
