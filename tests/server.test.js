// dependencies
const chai = require("chai");
const chaiHttp = require("chai-http");

// import express app
const app = require("../server");

// configure chai to mock http calls
chai.use(chaiHttp);
chai.should();

// tests
describe("Server", () => {
  describe("Unknown routes", () => {
    it("should return 404 for any unknown route", (done) => {
      chai
        .request(app)
        .get("/unknown")
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});
