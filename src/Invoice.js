import React, { useState, useEffect, useRef } from "react";
import { firestore } from "./firebaseConfig";
import "./InvoiceStyles.css";

const Invoice = ({ data }) => {
  const prodDataRef = useRef(null);
  const [foodDetail, setFoodDetail] = useState(null);

  function convertTimestampToDateTime(timestamp) {
    return new Date(
      timestamp.seconds.toString() * 1000 +
        timestamp.nanoseconds.toString() / 1000000
    ).toLocaleString();
  }
  const calculateGrandTotal = () => {
    // Perform calculations to get the grand total
    const orderPrice = parseFloat(data.OrderPrice);
    const taxRate = 0.15; // Assuming tax rate of 15%
    const taxAmount = orderPrice * taxRate;
    const grandTotal = orderPrice + taxAmount;

    return grandTotal.toFixed(2); // Format the grand total to 2 decimal places
  };
  useEffect(() => {
    const fetchFoodDetail = async () => {
      if (data.FoodDetails && data.FoodDetails.length > 0) {
        const foodDocumentRef = data.FoodDetails[0]; // Assuming you only want to retrieve the first food document reference
        const documentId = foodDocumentRef.id;
        const collectionRef = firestore.collection("product");
        const documentRef = collectionRef.doc(documentId);
        const snapshot = await documentRef.get();
        if (snapshot.exists) {
          const data = snapshot.data();
          prodDataRef.current = data;
          setFoodDetail(data.name);
        } else {
          console.log("Document does not exist");
        }
      }
    };

    fetchFoodDetail();
  }, [data.FoodDetails]);

  return (
    <div className="invoice-container">
      <div className="invoice-header">
        <div className="invoice-header-top">
          <div className="invoice-logo-container">
            <img src={data.passedImage} alt="Logo" className="invoice-logo" />
          </div>
          <div className="invoice-info">
            <h2 className="invoice-name">{data.passedName}</h2>
            <div className="invoice-gst-number">
              GST Number: {data.passedGST}
            </div>
          </div>
        </div>
        <h1 className="invoice-title">Invoice Receipt</h1>
      </div>
      <div className="invoice-content">
        <div className="invoice-section">
          <h2 className="section-title">Order Details</h2>
          <div className="section-field">
            <span className="field-label">Completed:</span>
            <span className="field-value">{data.Completed ? "Yes" : "No"}</span>
          </div>
          <div className="section-field">
            <span className="field-label">Cooked:</span>
            <span className="field-value">{data.Cooked ? "Yes" : "No"}</span>
          </div>
          <div className="section-field">
            <span className="field-label">Date:</span>
            <span className="field-value">
              {convertTimestampToDateTime(data.DateTime)}
            </span>
          </div>
          <div className="section-field">
            <span className="field-label">Delivered:</span>
            <span className="field-value">{data.Delivered ? "Yes" : "No"}</span>
          </div>
        </div>
        <div className="invoice-section">
          <h2 className="section-title">Customer Details</h2>
          <div className="section-field">
            <span className="field-label">Name:</span>
            <span className="field-value">{data.personName}</span>
          </div>
          <div className="section-field">
            <span className="field-label">Address:</span>
            <span className="field-value">{data.personAddress}</span>
          </div>
          <div className="section-field">
            <span className="field-label">Phone:</span>
            <span className="field-value">{data.personPhone}</span>
          </div>
          <div className="section-field">
            <span className="field-label">Payment Type:</span>
            <span className="field-value">{data.personPaymentType}</span>
          </div>
        </div>
        <div className="invoice-section">
          <h2 className="section-title">Order Summary</h2>
          <div className="section-field">
            <span className="field-label">Order Price:</span>
            <span className="field-value">{data.OrderPrice}</span>
          </div>
          <div className="section-field">
            {data.StoreFoodDetails ? (
              <>
                <span className="field-label">Store Food Details:</span>
                <span className="field-value">
                  <ol className="field-value">
                    {data.StoreFoodDetails.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ol>
                </span>
              </>
            ) : (
              <>
                <>
                  <span className="field-label">Food Details:</span>
                  <span className="field-value">
                    <ol className="field-value">
                      {foodDetail && <li>{foodDetail}</li>}
                    </ol>
                  </span>
                </>
              </>
            )}
          </div>
          {data.offer ? (
            <div className="section-field">
              <span className="field-label">Offer:</span>
              <span className="field-value">{data.offer}</span>
            </div>
          ) : (
            <></>
          )}
          {data.tableNumber ? (
            <div className="section-field">
              <span className="field-label">Table Number:</span>
              <span className="field-value">{data.tableNumber}</span>
            </div>
          ) : (
            <></>
          )}
          {data.timeline ? (
            <div className="section-field">
              <span className="field-label">Timeline:</span>
              <span className="field-value">{data.timeline}</span>
            </div>
          ) : (
            <></>
          )}
          <hr />
          <div className="section-field">
            <span className="field-label">Grand Total:</span>
            <span className="field-value grand-total">
              {calculateGrandTotal()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
