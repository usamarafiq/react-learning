import React ,{Component } from 'react';

class NameInputRenderProps extends  Component {

state = {
    name:''
}

handleChange=(e)=>{
this.setState({name:e.target.value})
}

render() {
    const {name}= this.state;
return this.props.children({name, handleChange:this.handleChange})
}
}

class NameInput extends  Component{

render(){

    return(
        <NameInputRenderProps>
 { ({name,handleChange})=>(
<>
        <label>
       Name: <input defaultValue ={name} onChange={handleChange}></input>

        </label>
        <div>
     you type: {name}

        </div>
        </>
        ) }
        </NameInputRenderProps>
    )
}

}

export default NameInput;

// class textInput extends  Component{

//     render(){
    
//         return(
//             <NameInputRenderProps>
//      { ({name,handleChange})=>(
//     <>
//             <label>
//            Name: <input defaultValue ={name} onChange={handleChange}></input>
    
//             </label>
//             <div>
//          you type input: {name}
    
//             </div>
//             </>
//             ) }
//             </NameInputRenderProps>
//         )
//     }
    
//     }
    
//     export default textInput;