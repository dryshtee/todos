import { React } from "react";

const Item = ({item, removeItem}) => {
  return (
    <div> 
      <span>{item}</span> 
      <button className="del-button" onClick={() => removeItem(item)}>X</button>
    </div>
  );
};

export default Item;