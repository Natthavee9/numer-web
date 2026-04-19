import {Table} from 'react-bootstrap';

export default function TableComponent({myData}){
    if (!myData || myData.length === 0) return null;

    return(
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>iteration</th>
          <th>Xm</th>
          <th>f(x)</th>
          <th>error</th>
        </tr>
      </thead>
      <tbody>
        {myData.map((d,i) =>(
            <tr key ={i}>
                <td>{d.iteration}</td>
                <td>{d.root.toFixed(6)}</td>
                <td>{d.fx.toFixed(6)}</td>
                <td>{d.e.toFixed(6)}</td>
            </tr>
        ))}
      </tbody>
    </Table>
    );
}