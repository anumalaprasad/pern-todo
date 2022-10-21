import React, { Fragment, useState, useEffect } from "react";
import getBlockchain from './ethereum.js';

const InputTodo = () => {
  const [userAddress, setUser] = useState(undefined);
  const [referralAddress, setReferral] = useState(undefined);
  const [tokenInstance, setTokenInstance] = useState(undefined);
  const [contractInstance, setContractInstance] = useState(undefined);
 
  useEffect(() => {
    const init = async () => {
      const { tokenInstance, contractInstance, currentAcc } = await getBlockchain(); 
      setTokenInstance(tokenInstance);
      setContractInstance(contractInstance);
      setUser(currentAcc); 
    };
    init();
  }, []);

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { userAddress, referralAddress };

      const response = await fetch("http://localhost:5000/airdrops", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

 

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={userAddress}
          onChange={e => setUser(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={referralAddress}
          onChange={e => setReferral(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
