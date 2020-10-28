const { expect } = require('chai')
const { resolve, reject } = require('bluebird')
const sinon = require('sinon')
const jsonwebtoken = require('jsonwebtoken')

const { validateToken } = require('../../../src/middleware')


describe('ValidateToken midleware',  () => {
  describe('when validateToken is called', () => {
    

    it('should retun a token successfully', async () => {
      const req = {
        token: 'any token goes here',
      }

      const res = {

      }
  

      const tokenCall = sinon.stub(token, 'generateToken')
        .callsFake(() => mockedToken)
        .withArgs(mockedId)

      const result = await validateToken()
      expect(idGeneratorCall.calledOnce).to.be.equal(true)
      expect(tokenCall.calledOnce).to.be.equal(true)
    })
  })
})
