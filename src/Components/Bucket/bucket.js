import React, { useState } from "react";
import ContentEditable from "react-contenteditable";

function transformation(data) {
  const test = `${data} It works`;
  return test;
}

let Bucket = (props) => {
  const [value, setValue] = useState("");

  const handleChanges = (event) => {
    setValue(event.target.value);
  };
 
  
  return (
    <ContentEditable
      style={{ border: "2px solid black" }}
      onChange={handleChanges}
      html={(props.label)}
    />
  );
}

export default Bucket;
