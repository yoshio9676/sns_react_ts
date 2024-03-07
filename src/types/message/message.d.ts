import { Timestamp } from "@firebase/firestore";
import { UserState } from "../user/initialUserState";

export type MessageType = {
  id: string;
  timestamp: Timestamp;
  message: string;
  user: UserState;
};
