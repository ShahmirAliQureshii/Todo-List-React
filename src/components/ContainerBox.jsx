import React from 'react';

const ContainerBox = (props) => {
  return (
    <div className='w-auto mx-3 my-1 border-2 rounded bg-white border-black p-2'>
        {props.children}
    </div>
  );
};

export default ContainerBox;