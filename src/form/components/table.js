import Table from 'react-bootstrap/Table';
import data from "../data/data"
import { useState } from 'react';





function BasicExample(props) {

const [tableData, setTableData] = useState(data);

const remove = (index) =>{
  const updatedData = [...tableData];
  updatedData.splice(index, 1);
  setTableData(updatedData);
}
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
        {data.map((ele, index) => (
          <tr key={index}>
            <td onClick={() => remove(index)}>{index + 1}</td>
            <td onClick={() => remove(index)} >{ele.name}</td>
            <td onClick={() => remove(index)}>{ele.surname}</td>
            <td onClick={() => remove(index)}>{ele.email}</td>
          </tr>
        ))}
      </thead>
      <tbody>
        
      </tbody>
    </Table>
  );
}

export default BasicExample;
