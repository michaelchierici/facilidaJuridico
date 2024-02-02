import { api } from "../..";
import { INewUser, IUser } from "../../../types/User";
import { formattedCoordinatePoint } from "../../../utils/formatCoordinate";

class UserService {
  async findAllUsers(orderBy: "asc" | "desc" = "asc"): Promise<IUser[]> {
    const { data } = await api.get(`/users?orderBy=${orderBy}`);
    return data;
  }

  async createUser({
    name,
    email,
    phone,
    coordinate_point,
  }: INewUser): Promise<INewUser> {
    const { data } = await api.post(`/users`, {
      name,
      email,
      phone,
      coordinate_point: formattedCoordinatePoint(coordinate_point),
    });
    return data;
  }

  async deleteUser(id: string) {
    const { data } = await api.delete(`/users/${id}`);
    return data;
  }

  async orderedByRoutes(): Promise<IUser[]> {
    const { data } = await api.get(`/users/routes`);

    return data;
  }
}

export default new UserService();
