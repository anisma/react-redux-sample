/******* Using connect ******/

// import React from "react";
// import { connect } from "react-redux";

// const SomeComponent = ({ name }) => {
//   return <h1>Hello, my name is {name}</h1>;
// };

// const mapStateToProps = (state) => ({
//   name: state.someState.name
// });

// export default connect(mapStateToProps)(SomeComponent);

/****** using hooks *******/

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userRequest } from "../redux/user/user-ducks";

const SomeComponent = () => {
  const user = useSelector((state) => state.user.user);
  const errMessage = useSelector((state) => state.user.errMessage);

  const dispatch = useDispatch();
  const getUserName = () => dispatch(userRequest());

  useEffect(() => {
    if (errMessage) {
      alert(errMessage);
    }
  }, [errMessage]);

  return (
    <div>
      <h1>Hello, my name is {user.name}</h1>
      <button onClick={getUserName}>Change User</button>
    </div>
  );
};

export default SomeComponent;
