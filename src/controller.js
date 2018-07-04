const { parseBouquetSpecLine, parseFlowerLine } = require('./parser')

module.exports = (bouquetSpecStore, flowerStore, rl) => {
  /**
   * Bouquet specs are input first, then flowers.
   */
  let readingBouquetSpecs = true
  
  /**
   * Produce a bouquet from the available flowers, if possible.
   */
  function outputBouquet() {
    const bouquetStorage = bouquetSpecStore.getStorage()

    Object.keys(bouquetStorage).forEach(bouquetSpecKey => {

      const bouquetSpec = bouquetStorage[bouquetSpecKey]
     
      if (flowerStore.hasEnoughFlowersToBuild(bouquetSpec)) {
        flowerStore.withdrawFlowers(bouquetSpec)
        rl.write(`A BOUQUET IS DONE ! ---> ${JSON.stringify(bouquetSpec)}`)
      }
    })
  }

  /**
   * Read lines and output bouquets.
   */
  function processLine(line) {
    readLine(line)
    if (!readingBouquetSpecs) {
      outputBouquet()
    }
  }

  /**
   * Read bouquet specs then flowers, line by line.
   */
  function readLine(line) {
    if (readingBouquetSpecs) {
      if (!line) {
        readingBouquetSpecs = false
        return
      }

      const bouquetSpec = parseBouquetSpecLine(line)
      if (bouquetSpec) {
        bouquetSpecStore.add(bouquetSpec)
      }
      return
    }

    const flower = parseFlowerLine(line)
    if (flower) {
      flowerStore.add(flower)
    }
  }

  return {
    processLine
  }
}
