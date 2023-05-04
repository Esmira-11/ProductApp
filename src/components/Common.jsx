import React, { useState } from 'react'
import { Container ,Row ,Col } from 'reactstrap'
import FormComponent from './FormComponent'
import TableComponent from './TableComponent'

function Common() {
    
    const [products ,setProducts]= useState([]) ;
    const [product, setproduct] = useState(products);

    const addProduct = (element)=>
    {
        products.push(element)
        setProducts([...products]) ;
    }

    const removeProduct = (id) => {
        let filteredProducts = product.filter(q => q.id != id);
        setproduct([...filteredProducts])
    }

  return (
    <>
     <Container >
            <Row>
                <h1>Products Table</h1>
            </Row>
            <Row>
                <Col xs={6}>
                    <TableComponent productsData = {products} propRemoveFunction = {removeProduct}/>

                </Col>
                <Col xs={6}>
                    <FormComponent propAddFunction = {addProduct}  />
                </Col>

            </Row>

     </Container>
     </>
    
  )
}

export default Common