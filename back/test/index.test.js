const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("Route: GET rickandmorty/onsearch/:id", () => {
    it("Responde con status: 200", () => {
      agent.get("/rickandmorty/onsearch/1").expect(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', () => {
      return agent.get("/rickandmorty/onsearch/1").then((response) => {
        const expectedProperties = ["id", "name", "species", "gender", "image"];
        expect(Object.keys(response.body)).toContain(...expectedProperties);
      });
    });

    it("Si hay un error responde con status: 500", () => {
      agent.get("/rickandmorty/onsearch/IDqueNoExiste").expect(500);
    });
  });
});
