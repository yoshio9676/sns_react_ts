import { useState, useEffect } from "react";
import {
  query,
  collection,
  onSnapshot,
  DocumentData,
  Query,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAppDispatch } from "../app/hooks";
import { setChannelInfo } from "../features/channelSlice";

export type Channel = {
  id: string;
  channel: DocumentData;
};

const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channel[]>([]);
  const queryData: Query<DocumentData> = query(collection(db, data));
  const dispatch = useAppDispatch();

  useEffect(() => {
    onSnapshot(queryData, (querySnapshot) => {
      const channelsResult: Channel[] = [];
      querySnapshot.docs.forEach((doc, index) => {
        channelsResult.push({
          id: doc.id,
          channel: doc.data(),
        });

        if (index === 0) {
          dispatch(
            setChannelInfo({
              channelId: doc.id,
              channelName: doc.data().channelName,
            }),
          );
        }
      });
      setDocuments(channelsResult);
    });
  }, []);

  return { documents };
};

export default useCollection;
