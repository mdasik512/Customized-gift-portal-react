// src/components/OrderConfirmed.js
import React, { useEffect, useState } from 'react';

const OrderConfirmed = () => {
  const [randomID,setRandom]=useState("");
  useEffect(()=>{
    setRandom(Math.random());
  },[])
  return (
    <div style={styles.container}> 
      <h2>Order Confirmed!</h2>
      <p>Thank you for your order!</p>
      <p>Your gift will be shipped to:</p>
      <p>
        <strong></strong>
      </p>
      <p>Gift ID:{randomID} </p>
      <p>Your order is being processed and will be shipped soon!</p>
      <button style={styles.button} onClick={() => window.location.reload()}>
        Place Another Order
      </button>
    </div>
  );
};

// Basic styles
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: 'auto',
  },
  button: {
    padding: '10px 20px',
    marginTop: '20px',
    cursor: 'pointer',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
};

export default OrderConfirmed;
 