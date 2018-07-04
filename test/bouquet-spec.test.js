const expect = require('chai').expect

const BouquetSpec = require('../src/models/bouquet-spec')

describe('bouquet spec', () => {
  describe('#getFlowerKeys', () => {
    it ('must add an attribute to a map when a new bouquet spec is created', () => {
      const bouquetSpec = new BouquetSpec('B', 'L', { a: 1, b: 1, c: 1 })
      expect(bouquetSpec.getFlowerKeys()).to.deep.equal(['aL', 'bL', 'cL'])
    })
  })
})