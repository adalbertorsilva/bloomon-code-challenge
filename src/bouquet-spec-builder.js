const BouquetSpec = require('./models/bouquet-spec')
const validator = require('./validator')

const getFlowers = (params) => {

  const regularExpression = /(\d{1,}[a-z]{1})/
  return params.substring(2, params.length)
    .split(regularExpression)
    .filter(match => match)
}
  
const arrangeFlowersFromBouquet = (params) => {
  const flowers = {}
  
  getFlowers(params).forEach(flower => {

    const flowerName = flower.charAt(flower.length -1)
    const flowerAmount = parseInt(flower.substring(0, flower.length -1))

    if (validator.hasInvalidAmountOfFlowers(flowerAmount)) {
      throw new Error('Incorrect bouquet params')
    }
  
    flowers[flowerName] = flowerAmount
      
  })
  
  return flowers
}

exports.buildBouquet = (params) => {
  return new BouquetSpec(params[0], params[1], arrangeFlowersFromBouquet(params))
}