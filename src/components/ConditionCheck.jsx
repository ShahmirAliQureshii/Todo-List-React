import React from 'react';

const ConditionCheck = (props) => {
  let checkCond = props.arr.length === 0 ? <h1>There Is No List</h1> : null;
  return (
    <>
    {checkCond}
    </>
  );
};

export default ConditionCheck;