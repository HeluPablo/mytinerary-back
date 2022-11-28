const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");

describe("/api/cities", function () {  /// Test de  la MT-01-37
  it("should return an array of objects", function (done) {
    request(app)
      .get("/api/cities/")
      .expect((res) => {
        assert.isArray(res.body.response); /// Verifica que la respuesta sea un array
        res.body.response.forEach((e) => {
          assert.isObject(e); //// Verifica que cada elemento del array sea un objeto
        });
      })
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
  it("The user sent a string in the name field", function (done) {
    request(app)
      .post("/api/cities")
      .send({
        name: "La matanza avanza",
        continent: "America",
        photo: "https://cnnespanol.cnn.com/wp-content/uploads/2022/04/la-matanza.jpeg?quality=100&strip=info",
        population: 100,
        userId: "6375e7b7a417c13e23b73296",
      })
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .expect((res) => {
        assert.isString(res.body.response.name, "Name is a string");
      })
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
  it("should return 400", function (done) {
    request(app)
      .post("/api/cities")
      .send({
        name: "La plata que no pagas",
        population: 13400,
        userId: "dgfuhftjfgj6745845956456",
      })
      .expect((res) => res.success === false)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  }); 
});
