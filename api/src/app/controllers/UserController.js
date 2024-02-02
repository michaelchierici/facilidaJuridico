const UserRepository = require("../repositories/UserRepository");

class UserController {
  async index(request, response) {
    const { orderBy } = request.query;
    const users = await UserRepository.findAll(orderBy);
    response.json(users);
  }

  async store(request, response) {
    const { name, email, phone, coordinate_point } = request.body;

    if (!name) {
      return response.status(400).json({ error: "Nome é obrigatório!" });
    }

    if (email) {
      const userExists = await UserRepository.findByEmail(email);

      if (userExists) {
        return response
          .status(400)
          .json({ error: "Esse e-mail já está em uso!" });
      }
    }

    const user = await UserRepository.create({
      name,
      email: email || null,
      phone,
      coordinate_point,
    });

    return response.json(user);
  }

  async routes(_request, response) {
    const users = await UserRepository.reorderRoutes();
    response.json(users);
  }

  async delete(request, response) {
    const { id } = request.params;

    await UserRepository.delete(id);
    return response.json(200);
  }
}

module.exports = new UserController();
