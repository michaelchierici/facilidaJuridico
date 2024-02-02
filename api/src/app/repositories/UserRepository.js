const db = require("../../database");
const sortByCoordinatePoint = require("../../utils/sortedByCoordinatedPoint");

class UsersRepository {
  async findAll(orderBy = "ASC") {
    const direction = orderBy.toUpperCase() === "DESC" ? "DESC" : "ASC";
    const rows = await db.query(`
    SELECT * FROM users ORDER BY users.name ${direction}`);

    return rows;
  }

  async create({ name, email, phone, coordinate_point }) {
    const [row] = await db.query(
      `INSERT INTO users(name, email, phone, coordinate_point)
     VALUES($1, $2, $3, $4)
     RETURNING *
     `,
      [name, email, phone, coordinate_point]
    );

    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    return row;
  }

  async reorderRoutes() {
    const users = await db.query(`SELECT * FROM users`);
    const orderedRoutesByCoordinatePoints = sortByCoordinatePoint(users);
    return orderedRoutesByCoordinatePoints;
  }

  async delete(id) {
    const userToDelete = id;
    const [row] = await db.query(`DELETE FROM users WHERE id = $1`, [
      userToDelete,
    ]);
    return row;
  }
}

module.exports = new UsersRepository();
