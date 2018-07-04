const expect = require('chai').expect

const BouquetSpec = require('../src/models/bouquet-spec')
const bouquetSpecStore = require('../src/stores/bouquet-spec-store')

describe('bouquet spec store', () => {
  describe('#add', () => {
    it ('must add an attribute to a map when a new bouquet spec is created', () => {
      const bouquetSpec = new BouquetSpec('B', 'L', { b: 15, c: 1 })
      bouquetSpecStore.add(bouquetSpec)
      
      expect(bouquetSpecStore.getStorage()).to.deep.equal({ BLb15c1: new BouquetSpec('B', 'L', { b: 15, c: 1 }) })
    })

    it ('must not add an attribute to a map when a new bouquet spec is created if it already exists', () => {
      const bouquetSpec = new BouquetSpec('B', 'L', { b: 15, c: 1 })
      bouquetSpecStore.add(bouquetSpec)
      bouquetSpecStore.add(bouquetSpec)
  
      expect(bouquetSpecStore.getStorage()).to.deep.equal({ BLb15c1: new BouquetSpec('B', 'L', { b: 15, c: 1 }) })
    })
  })
})