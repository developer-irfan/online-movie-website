import React, { useState } from "react";
import CreateContext from "./CreateContext";
const MainContext = (props) => {
  //data
  const [data, setData] = useState([{
       id: 1, 
       name: "irfan",
        age: 20
     }]);
  console.log(data);
  return (
    <CreateContext.Provider value={[data, setData]}>
      {props.children}
    </CreateContext.Provider>
  );
};

export default MainContext;
