import React from 'react';
import styles from './ListItem.module.css'

const ListItem = (props) => {
  return (
    <>
    <li onClick={props.getValue} className={`${styles['Sh-List']} font-bold my-0 px-4 py-2 mx-2`}>{`${props.idx+1}. ${props.item}`}</li>
    </>
  );
};

export default ListItem;