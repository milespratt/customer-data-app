// dependencies
const chai = require("chai");
const chaiHttp = require("chai-http");

// import express app
const app = require("../server");

// configure chai to mock http calls
chai.use(chaiHttp);
chai.should();

// tests
describe("Account Routes", () => {
  describe("GET /api/accounts", () => {
    it("should return all accounts in an array", (done) => {
      chai
        .request(app)
        .get("/api/accounts")
        .end((err, res) => {
          const { body } = res;
          const { accounts } = res.body;
          res.should.have.status(200);
          body.should.be.a("object");
          body.should.have.property("accounts");
          accounts.should.be.an("array");
          done();
        });
    });
  });
  describe("GET /api/accounts/customer/:customerID", () => {
    it("should return a non-empty array of customer accounts", (done) => {
      const customerID = 5;
      chai
        .request(app)
        .get(`/api/accounts/customer/${customerID}`)
        .end((err, res) => {
          const { body } = res;
          const { customerAccounts } = res.body;
          res.should.have.status(200);
          body.should.be.a("object");
          body.should.have.property("customerAccounts");
          customerAccounts.should.be.an("array");
          customerAccounts.should.have.lengthOf.above(0);
          done();
        });
    });

    it("should return an empty array for customer with no accounts", (done) => {
      const customerID = 0;
      chai
        .request(app)
        .get(`/api/accounts/customer/${customerID}`)
        .end((err, res) => {
          const { body } = res;
          const { customerAccounts } = res.body;
          res.should.have.status(200);
          body.should.be.a("object");
          body.should.have.property("customerAccounts");
          customerAccounts.should.be.an("array");
          customerAccounts.should.have.lengthOf(0);
          done();
        });
    });
  });
});
