const db = require("../database/db-Config.js");
const Birds = require("./birds-model.js");

beforeEach(async () => {
    // this function executes and clears out the table before each test
    await db('birds').truncate();
  });

describe("Birds model", () => {

  describe("getAll(", () => {
    it("Should return an array", async () => {
        const birds = await Birds.getAll()
        expect(birds).toHaveLength(0)
    })
  })

  describe("insert()", () => {
    it("Should insert the bird into the database and return the bird", async () => {
        const bluebird = await Birds.insert({name: 'Bluebird'});
        const crow = await Birds.insert({name: 'Crow'});



        expect(crow.name).toMatch(/crow/i)
    });
  });
  describe("get by id", () => {
    it("Should return a bird with the specified id.", async () => {
      await Birds.insert({name: 'Crow'})
      const id = 1;
      const crow = await Birds.findById(1);
      console.log("here", crow)
      expect(crow.name).toMatch(/crow/i)
    })
  })
  describe("Get all birds", () => {
    it("Should return an array", async () => {
        const bluebird = await Birds.insert({name: 'Bluebird'});
        const crow = await Birds.insert({name: 'Crow'});

        const birds = await Birds.getAll();

        expect(birds).toHaveLength(2)

        expect(birds[0].name).toMatch(bluebird.name)
        expect(birds[1].name).toMatch(crow.name)
    })
  })
});
