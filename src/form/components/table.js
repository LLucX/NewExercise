
import Table from 'react-bootstrap/Table';
import data from "../data/data"

function BasicExample(props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      {data.map(ele => {
        ...ele,
      })}
    </Table>
  );
}

export default BasicExample;
