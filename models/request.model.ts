export type LoginRequest = {
  login: string;
  password: string;
  name: string;
};

export type UserInfo = {
  name: string;
  password: string;
  id_operator: boolean;
  id_operacional: boolean;
  id_manager: boolean;
  user: number;
  company:number;
};
