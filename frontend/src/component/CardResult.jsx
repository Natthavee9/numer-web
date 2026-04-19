// component/BoxResult.jsx
import Card from 'react-bootstrap/Card';

function BoxResult({ myResult }) {
  if (!myResult) return null; // ถ้าไม่มี คำตอบ ไม่ต้องแสดง

  return (
    <Card style={{background:"#A4f600" , textAlign:"center"}}>
      <Card.Body>
       
        {myResult}
       
      </Card.Body>
    </Card>
  );
}

export default BoxResult;
