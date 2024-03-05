type UserState = {
  uid: string;
  photo: string;
  email: string;
};

export type InitialUserState = {
  user: null | UserState;
};
