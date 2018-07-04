exports.hasInvalidFlowerParams = (params) => {

  const regexPattern = /[a-z]{1}[L|S]{1}/

  return !params || 
    typeof params !== 'string' || 
    params.length > 2 ||
    !regexPattern.test(params)
}

exports.hasInvalidBouquetSpecParams = (params) => {

  return !params || 
    typeof params !== 'string' ||
    !params.substring(0,2).match(/[A-Z]{1}[L|S]{1}/) ||
    params.match(/[A-Z]{3}/) || 
    params.match(/[A-Z]{2}.{1,}[A-Z]/) || 
    isFlowerDispositionInvalid(params) ||
    hasDuplicatedFlowers(params)
}

exports.hasInvalidAmountOfFlowers = (params) => {
  return params <= 0
}

const isFlowerDispositionInvalid = (params) => {

  const flowers = params.split(/[A-Z0-9]/).filter(flower => flower)
  const lastFlowerIndex = flowers.length - 1

  for (let i = 0; i < flowers.length; i++) {
    if (i !== lastFlowerIndex && flowers[i] > flowers[i+1]) {
      return true
    }
  }

  return false
}

const hasDuplicatedFlowers = (params) => {

  const regularExpression = /(\d{1,}[a-z]{1})/
  const flowers = params.substring(2, params.length)
    .split(regularExpression)
    .filter(match => match)
    .map(element => element[element.length -1])

  const set = new Set (flowers)
  
  return set.size !== flowers.length
}

