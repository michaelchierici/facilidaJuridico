export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  coordinate_point: {
    x: string;
    y: string;
  };
}

export interface INewUser {
  name: string;
  email: string;
  phone: string;
  coordinate_point: {
    x: string;
    y: string;
  };
}
