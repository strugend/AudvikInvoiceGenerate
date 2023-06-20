import React, { useEffect, useState, useRef } from "react";
import { firestore } from "./firebaseConfig";
import Invoice from "./Invoice";

const DataFetching = () => {
  const [data, setData] = useState(null);
  const orderDataRef = useRef(null);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const documentId = urlParams.get("documentId");
    const imageParam = urlParams.get("imageUrl");
    const gstNum = urlParams.get("gstNum");
    const nameParam = urlParams.get("nameParam");
    const fetchData = async () => {
      try {
        const collectionRef = firestore.collection("order");
        const documentRef = collectionRef.doc(documentId);
        const snapshot = await documentRef.get();
        const documentData = snapshot.data();
        setData(documentData);
        orderDataRef.current = documentData;
        orderDataRef.current = {
          ...orderDataRef.current,
          passedImage: imageParam,
          passedGST: gstNum,
          passedName: nameParam
        };
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        {data ? (
          <div>
            <Invoice data={orderDataRef.current} />
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </>
  );
};

export default DataFetching;
