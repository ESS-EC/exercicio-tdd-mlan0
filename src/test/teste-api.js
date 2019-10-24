let chai = require('chai');
let chaiHttp = require('chai-http');
let api = require('../api');
let should = chai.should();

chai.use(chaiHttp);

var temperatura = 100;

describe('Testando conversão de temperatura C° -> F° ', () => {
    it('Teste: Conversão de Celsius para Fahrenheit correta', (done) => {
      chai.request(api)
        .get('/converterTemperatura?valor='+ temperatura +'&de=C&para=F')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('message').eql("212.00");
          done();
        });
    });
  });
  

describe('Testando conversão de temperatura C° -> K° ', () => {
  it('Teste: Conversão de Celsius para Kelvin correta', (done) => {
    chai.request(api)
      .get('/converterTemperatura?valor='+ temperatura +'&de=C&para=K')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message').eql("373.15");
        done();
      });
  });
});

describe('Testando conversão de temperatura F° -> C° ', () => {
    it('Teste: Conversão de Fahrenheit para Celsius correta', (done) => {
      chai.request(api)
        .get('/converterTemperatura?valor='+ temperatura +'&de=F&para=C')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('message').eql("37.78");
          done();
        });
    });
  });
  
describe('Testando conversão de temperatura F° -> K° ', () => {
    it('Teste: Conversão de Fahrenheit para Kelvin correta', (done) => {
      chai.request(api)
        .get('/converterTemperatura?valor='+ temperatura +'&de=F&para=K')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('message').eql("310.93");
          done();
        });
    });
  });

describe('Testando conversão de temperatura K° -> C° ', () => {
  it('Teste: Conversão de Kelvin para Celsius correta', (done) => {
    chai.request(api)
      .get('/converterTemperatura?valor='+ temperatura +'&de=K&para=C')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message').eql("-173.15");
        done();
      });
  });
});

describe('Testando conversão de temperatura K° -> F° ', () => {
  it('Teste: Conversão de Kelvin para Fahrenheit correta', (done) => {
    chai.request(api)
      .get('/converterTemperatura?valor='+ temperatura +'&de=K&para=F')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message').eql("-279.67");
        done();
      });
  });
});