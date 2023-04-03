const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Routes testing", () => {
  describe("Route: GET rickandmorty/onsearch/:id", () => {
    it("Expect status code 200", async () => {
      const response = await agent.get("/rickandmorty/onsearch/1");
      expect(response.statusCode).toBe(200);
    });

    it("Expect object with properties: 'id', 'name', 'species', 'gender' and 'image'", async () => {
      const response = await agent.get("/rickandmorty/onsearch/1");
      expect(Object.keys(response.body)).toContain(
        "id",
        "name",
        "species",
        "gender",
        "image"
      );
    });

    it("Expect status code 500 for errors", async () => {
      const response = await agent.get(
        "/rickandmorty/onsearch/IDThatDoesNotExist"
      );
      expect(response.statusCode).toBe(500);
    });
  });
});
