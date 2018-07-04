const expect = require('chai').expect

const Flower = require('../src/models/flower')
const BouquetSpec = require('../src/models/bouquet-spec')
const flowerStore = require('../src/stores/flower-store')

describe('bouquet spec store', () => {
  describe('#add', () => {
    it ('must add an attribute to a map when a new bouquet spec is created', () => {
      const flower = new Flower('a', 'L')
      flowerStore.add(flower)
      const storage = flowerStore.getStorage()

      expect(storage).to.deep.equal({ aL: 1 })
    })

    it ('must increment the value of the attribute when it already exists', () => {
      const flower = new Flower('a', 'L')
      flowerStore.add(flower)
      const storage = flowerStore.getStorage()

      expect(storage).to.deep.equal({ aL: 2 })
    })
  })

  describe('#hasEnoughFlowersToBuild', () => {
    it ('must return false if doesn\'t have enougth flowers', () => {
      const bouquetSpec = new BouquetSpec('X', 'L', { a: 2, x: 1, y: 1, z: 1 })
      expect(flowerStore.hasEnoughFlowersToBuild(bouquetSpec)).to.be.false
    })
  })

  describe('#withdrawFlowers', () => {
    it ('must decrement the value of the attribute when flowers are withdrown', () => {
      const bouquetSpec = new BouquetSpec('X', 'L', { a: 2, x: 1, y: 1, z: 1 })
      const flower1 = new Flower('x', 'L')
      const flower2 = new Flower('y', 'L')
      const flower3 = new Flower('z', 'L')
      flowerStore.add(flower1)
      flowerStore.add(flower2)
      flowerStore.add(flower3)

      expect(flowerStore.getStorage()).to.deep.equal({ aL: 2 , xL: 1, yL: 1, zL: 1 })

      flowerStore.withdrawFlowers(bouquetSpec)

      expect(flowerStore.getStorage()).to.deep.equal({ aL: 0 , xL: 0, yL: 0, zL: 0 })

    })
  })
})