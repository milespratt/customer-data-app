// dependencies
const chai = require("chai");
const chaiHttp = require("chai-http");

// import express app
const app = require("../server");

// configure chai to mock http calls
chai.use(chaiHttp);
chai.should();

// tests
describe("Customer Routes", () => {
  describe("GET /api/customers", () => {
    it("should return all customers in an array", (done) => {
      chai
        .request(app)
        .get("/api/customers")
        .end((err, res) => {
          const { body } = res;
          const { customers } = res.body;
          res.should.have.status(200);
          body.should.be.a("object");
          body.should.have.property("customers");
          customers.should.be.an("array");
          done();
        });
    });
  });
  describe("GET /api/customers/:customerID", () => {
    it("should return an object with customer details", (done) => {
      const customerID = 5;
      chai
        .request(app)
        .get(`/api/customers/${customerID}`)
        .end((err, res) => {
          const { body } = res;
          const { customer } = res.body;
          res.should.have.status(200);
          body.should.be.a("object");
          body.should.have.property("customer");
          customer.should.be.an("object");
          done();
        });
    });

    it("should return 404 if customer is not found", (done) => {
      const customerID = 0;
      chai
        .request(app)
        .get(`/api/customers/${customerID}`)
        .end((err, res) => {
          const { body } = res;
          res.should.have.status(404);
          body.should.be.a("object");
          body.should.have.property("error");
          done();
        });
    });
  });
});
