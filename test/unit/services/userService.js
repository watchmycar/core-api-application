const { expect } = require('chai');
const sinon = require('sinon');
const idGenerator = require('../../../src/libs/idGenerator');
const token = require('../../../src/libs/token');

const {
  authenticate,
  getToken,
} = require('../../../src/services/resourceService');

describe('User Service',  () => {
  describe('when getToken is called', () => {
    const mockedToken = 'any jwt token goes here';
    const mockedId = 'some id goes here';
    const expectedResponse = {
      jwtToken: mockedToken,
    };

    it('should retun a token successfully', async () => {
      const idGeneratorCall = sinon.stub(idGenerator, 'generate')
        .callsFake(() => mockedId)
        .withArgs();

      const tokenCall = sinon.stub(token, 'generateToken')
        .callsFake(() => mockedToken)
        .withArgs(mockedId);

      const result = await getToken();
      expect(idGeneratorCall.calledOnce).to.be.equal(true);
      expect(tokenCall.calledOnce).to.be.equal(true);
      expect(result).to.be.deep.equal(expectedResponse);
    });
  });

  describe('when authenticate is called', () => {
    const expectedResponse = {
      authenticated: true,
      message: 'You are now authenticated',
    };

    it('should return a response successfully', async () => {
      const result = await authenticate();
      expect(result).to.be.deep.equal(expectedResponse);
    });
  });
});
