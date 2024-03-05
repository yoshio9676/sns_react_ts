export type UserState = {
  uid: string;
  name: string;
  photo: string;
  email: string;
};

export type InitialUserState = {
  user: null | UserState;
};
