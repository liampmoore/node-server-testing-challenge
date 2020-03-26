const db = require('../database/db-Config.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(bird) {
  const ids = await db('birds').insert(bird)
  const newBird = await findById(ids[0])
  return newBird;
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('birds');
}

async function findById(id) {
  const bird = await db('birds').where({id: id}).first();
  return bird;

}
