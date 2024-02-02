import { IUser } from "./User";

export interface ICardUser {
  user: IUser;
  onClick: () => void;
}

export interface ICreateUser {
  onCreateUser: () => void;
  onClose: () => void;
}

export interface ICardDelete {
  user: IUser;
  onDeleteUser: () => void;
  onClose: () => void;
}

export interface ICardRoute {
  user: IUser;
}
