const expect = require('chai').expect

const BouquetSpec = require('../src/models/bouquet-spec')
const Flower = require('../src/models/flower')
const parser = require('../src/parser')

describe('parser', () => {
  describe('#parseBouquetSpecLine', () => {
    it('does throw an incorrect bouquet params error when parameter is undefined', () => {
      expect(parser.parseBouquetSpecLine).to.throw('Incorrect bouquet params')
    })

    it('does throw an incorrect bouquet params error when parameter is null', () => {
      expect(() => parser.parseBouquetSpecLine(null)).to.throw('Incorrect bouquet params')
    })

    it('does throw an incorrect bouquet params error when parameter is empty', () => {
      expect(() => parser.parseBouquetSpecLine('')).to.throw('Incorrect bouquet params')
    })

    it('does throw an incorrect bouquet params error when parameter is not a string', () => {
      expect(() => parser.parseBouquetSpecLine(99)).to.throw('Incorrect bouquet params')
    })

    it('does throw an incorrect bouquet params error when the first element of the parameter is not a letter character', () => {
      expect(() => parser.parseBouquetSpecLine('1S')).to.throw('Incorrect bouquet params')
    })

    it('does throw an incorrect bouquet params error when the first element of the parameter is not a upper case character', () => {
      expect(() => parser.parseBouquetSpecLine('aS')).to.throw('Incorrect bouquet params')
    })

    it('does throw an incorrect bouquet params error when the second element of the parameter is not a letter character', () => {
      expect(() => parser.parseBouquetSpecLine('A1')).to.throw('Incorrect bouquet params')
    })

    it('does throw an incorrect bouquet params error when the second element of the parameter is not a upper case character', () => {
      expect(() => parser.parseBouquetSpecLine('Al')).to.throw('Incorrect bouquet params')
    })

    it('does throw an incorrect bouquet params error when the second element of the parameter is not a "L" or "S" character', () => {
      expect(() => parser.parseBouquetSpecLine('AM')).to.throw('Incorrect bouquet params')
    })

    it('does throw an incorrect bouquet params error when upper case letter params length is bigger than 2', () => {
      expect(() => parser.parseBouquetSpecLine('ASL')).to.throw('Incorrect bouquet params')
    })

    it('does throw an incorrect bouquet params error when upper case letter param is placed between flower params', () => {
      expect(() => parser.parseBouquetSpecLine('BL15Xb1c')).to.throw('Incorrect bouquet params')
    })

    it('does throw an incorrect bouquet params error when flowers disposition is not on alphabetical order', () => {
      expect(() => parser.parseBouquetSpecLine('BL15b15a')).to.throw('Incorrect bouquet params')
    })

    it('does throw an incorrect bouquet params error when flowers amount is 0', () => {
      expect(() => parser.parseBouquetSpecLine('BL15b0c')).to.throw('Incorrect bouquet params')
    })

    it('does throw an incorrect bouquet params error when flowers are repeated on bouquet spec', () => {
      expect(() => parser.parseBouquetSpecLine('BL15b3b')).to.throw('Incorrect bouquet params')
    })

    it('parses line and returns correct bouquet spec', () => {
      const bouquetSpecLine = 'BL15b1c'
      const bouquetSpec = parser.parseBouquetSpecLine(bouquetSpecLine)
      expect(bouquetSpec).to.deep.equal(
        new BouquetSpec('B', 'L', { b: 15, c: 1 })
      )
    })
  })

  describe.only('#parseFlowerLine', () => {
    it('does throw an incorrect flower params error when parameter is undefined', () => {
      expect(parser.parseFlowerLine).to.throw('Incorrect flower params')
    })

    it('does throw an incorrect flower params error when parameter is null', () => {
      expect(() => parser.parseFlowerLine(null)).to.throw('Incorrect flower params')
    })

    it('does throw an incorrect flower params error when parameter is empty', () => {
      expect(() => parser.parseFlowerLine('')).to.throw('Incorrect flower params')
    })

    it('does throw an incorrect flower params error when parameter is not a string', () => {
      expect(() => parser.parseFlowerLine(99)).to.throw('Incorrect flower params')
    })

    it('does throw an incorrect flower params error when the first element of the parameter is not a letter character', () => {
      expect(() => parser.parseFlowerLine('1S')).to.throw('Incorrect flower params')
    })

    it('does throw an incorrect flower params error when the first element of the parameter is not a lower case character', () => {
      expect(() => parser.parseFlowerLine('AS')).to.throw('Incorrect flower params')
    })

    it('does throw an incorrect flower params error when the second element of the parameter is not a letter character', () => {
      expect(() => parser.parseFlowerLine('a1')).to.throw('Incorrect flower params')
    })

    it('does throw an incorrect flower params error when the second element of the parameter is not a upper case character', () => {
      expect(() => parser.parseFlowerLine('as')).to.throw('Incorrect flower params')
    })

    it('does throw an incorrect flower params error when the second element of the parameter is not a "L" or "S" character', () => {
      expect(() => parser.parseFlowerLine('aM')).to.throw('Incorrect flower params')
    })

    it('does throw an incorrect flower params error when params length is bigger than 2', () => {
      expect(() => parser.parseFlowerLine('aSL')).to.throw('Incorrect flower params')
    })

    it('parses line and returns correct flower', () => {
      const flowerLine = 'cS'
      const flower = parser.parseFlowerLine(flowerLine)
      expect(flower).to.deep.equal(new Flower('c', 'S'))
    })
  })
})
