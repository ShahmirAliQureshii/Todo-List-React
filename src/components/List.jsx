import ListItem from "./ListItem";
import ContainerBox from "./ContainerBox";
import InputBox from "./InputBox";
import { useState } from "react";
import ConditionCheck from "./ConditionCheck";

const List = ({list}) => {
  const [FoodItem, setFoodItem] = useState(list);
  const OnKeyEnter = (e)=>{
    if(e.key === 'Enter') {
    let newFoodItem = e.target.value;
    e.target.value = '';
    let newItems = [...FoodItem, newFoodItem];
    setFoodItem(newItems);
    }
  }
  return (
    <>
      <ContainerBox>
        <InputBox
          OnKeyEnter={OnKeyEnter}
        ></InputBox>
          <ConditionCheck arr={FoodItem}></ConditionCheck>
        {FoodItem.map((items, idx) => (
          <ListItem
            getValue={() => console.log(`${items} is being bought`)}
            key={idx}
            item={items}
            idx={idx}
          ></ListItem>
        ))}
      </ContainerBox>
      <ContainerBox>
        <p>Above is the list of your todos!</p>
      </ContainerBox>
    </>
  );
};

export default List;
