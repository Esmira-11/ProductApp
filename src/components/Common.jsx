import React, { useState } from 'react'
import { Container ,Row ,Col } from 'reactstrap'
import FormComponent from './FormComponent'
import TableComponent from './TableComponent'

function Common() {

    const [products ,setProducts]= useState([]) ;

    const addProduct = (element)=>
    {
        products.push(element)
        setProducts([...products]) ;
    }

  return (
    <>
     <Container >
            <Row>
                <h1>Products Table</h1>
            </Row>
            <Row>
                <Col xs={6}>
                    <TableComponent productsData = {products}/>

                </Col>
                <Col xs={6}>
                    <FormComponent propFunction = {addProduct} />
                </Col>

            </Row>

     </Container>
     </>
    
  )
}

export default Common