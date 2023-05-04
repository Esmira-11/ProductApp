import React, { useState } from 'react'
import { Form,FormGroup,Label,Input,Button} from 'reactstrap'

function FormComponent(props) {

    const [data, setData] = useState({}) ;

    const addNewData =(value,dataName)=>
    {   
        const newState= {...data ,[dataName]: value }
        setData(newState)
         
    }

  return (
    <>
    <Form inline>
        <FormGroup>
          <Label for="exampleCategory" hidden>Category</Label>
          <Input type="text" name="category" id="exampleCategory" placeholder="Category" onChange={(e)=>addNewData(e.target.value,'category')} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleName" hidden>Name</Label>
          <Input type="text" name="name" id="exampleName" placeholder="Name" onChange={(e)=>addNewData(e.target.value,'name')}/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePrice" hidden>Price</Label>
          <Input type="text" name="price" id="examplePrice" placeholder="Price" onChange={(e)=>addNewData(e.target.value,'price')} />
        </FormGroup>
        <Button onClick={()=>props.propFunction(data)}>Submit</Button>
      </Form>
    </>
  )
}

export default FormComponent