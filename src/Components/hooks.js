/*import {useState} from 'react'

let commonHooks = (callback) =>{

    const [inputs, setInputs] = useState({})

    let handleOnChange = (e) =>{
        e.persist()  
        setInputs(inputs =>({...inputs,[e.target.name]:e.target.value}))
        console.log("inputs : "+inputs.todo + " = "+ inputs.label)
      }
  
    return {inputs, setInputs, handleOnChange }

}

export default commonHooks*/