import React from 'react'
import { Table} from 'reactstrap'
function TableComponent(props) {
  let id = 1
  let {productsData} =props
  return (
    <>
    <Table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Category</th>
        <th>Name</th>
        <th>Price</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      
      {productsData.map(
        item => <tr >
        <td>{item.id=id++}</td>
        <td>{item.category}</td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td><button style={{backgroundColor:'red',color:'#fff'}} onClick={() => props.propRemoveFunction(item.id)}>Delete</button></td>
      </tr>
      
      )}
    </tbody>
  </Table>
    </>
  )
}

export default TableComponent