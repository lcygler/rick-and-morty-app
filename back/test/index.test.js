const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Routes testing", () => {
  describe("Route: GET rickandmorty/onsearch/:id", () => {
    it("Expect status code 200", () => {
      agent.get("/rickandmorty/onsearch/1").expect(200);
    });

    it("Expect object with properties: 'id', 'name', 'species', 'gender' and 'image'", () => {
      return agent.get("/rickandmorty/onsearch/1").then((response) => {
        expect(Object.keys(response.body)).toContain(
          "id",
          "name",
          "species",
          "gender",
          "image"
        );
      });
    });

    it("Expect status code 500 for errors", () => {
      agent.get("/rickandmorty/onsearch/IDThatDoesNotExist").expect(500);
    });
  });
});
