import { useState, useEffect } from "react";
import {
  query,
  collection,
  onSnapshot,
  DocumentData,
  Query,
} from "firebase/firestore";
import { db } from "../firebase";

export type Channel = {
  id: string;
  channel: DocumentData;
};

const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channel[]>([]);
  const queryData: Query<DocumentData> = query(collection(db, data));

  useEffect(() => {
    onSnapshot(queryData, (querySnapshot) => {
      const channelsResult: Channel[] = [];
      querySnapshot.docs.forEach((doc) => {
        channelsResult.push({
          id: doc.id,
          channel: doc.data(),
        });
      });
      setDocuments(channelsResult);
    });
  }, []);

  return { documents };
};

export default useCollection;
