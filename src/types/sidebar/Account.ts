import * as Icons from "@mui/icons-material";

type AccountType = {
  id: number;
  name: string;
  icon: keyof typeof Icons;
  color: string;
};

export default AccountType;

export const accounts: Array<AccountType> = [
  {
    id: 1,
    name: "account1",
    icon: "AccountCircle",
    color: "#69f0ae",
  },
  {
    id: 2,
    name: "account2",
    icon: "AccountCircle",
    color: "#ffecb3",
  },
  {
    id: 3,
    name: "account3",
    icon: "AccountCircle",
    color: "#81d4fa",
  },
];
