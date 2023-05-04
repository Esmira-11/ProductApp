import React from 'react'
import { Table} from 'reactstrap'
function TableComponent({productsData}) {
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
        e => <tr>
        <td>{e.id}</td>
        <td>{e.category}</td>
        <td>{e.name}</td>
        <td>{e.price}</td>
        <td><button style={{backgroundColor:'red',color:'#fff'}}>Delete</button></td>
      </tr>
      )}
    </tbody>
  </Table>
    </>
  )
}

export default TableComponent