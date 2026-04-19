import { useState, useEffect } from "react";
import { Card, FormControl, Row, Col, Stack } from "react-bootstrap";

export default function TestPage() {
  const [x, setXvalue] = useState("");
  const [numpoint, setNumpoint] = useState("");
  const [point, setPoint] = useState([]);

  useEffect(() => {
    const newPoints = Array.from({ length: Number(numpoint) || 0 }, (_, i) => 
      point[i] || { x: "", y: "" }
    );
    setPoint(newPoints);
  }, [numpoint]);

  const PointChange = (i, field, value) => {
    const newPoints = [...point];
    newPoints[i][field] = value;
    setPoint(newPoints);
  };

  return (
    <Card style={{ width: "60rem", margin: "5rem auto" }}>
      <Card.Header as="h4" style={{ textAlign: "center" }}>Test</Card.Header>
      <Card.Body>
        <Stack gap={4 }>
          <Row>
            <Col>
              <FormControl
                type="number"
                value={numpoint}
                onChange={(e) => setNumpoint(e.target.value)}
                placeholder="Number of Points"
              />
            </Col>
            <Col>
              <FormControl
                type="number"
                value={x}
                onChange={(e) => setXvalue(e.target.value)}
                placeholder="X"
              />
            </Col>
          </Row>

          {/* แสดง input ของแต่ละจุด */}
          {point.map((p, i) => (
            <Row key={i} className="mt-2">
              <Col>
                <FormControl
                  type="number"
                  value={p.x}
                  onChange={(e) => PointChange(i, "x", e.target.value)}
                  placeholder={`x${i + 1}`}
                />
              </Col>
              <Col>
                <FormControl
                  type="number"
                  value={p.y}
                  onChange={(e) => PointChange(i, "y", e.target.value)}
                  placeholder={`y${i + 1}`}
                />
              </Col>
            </Row>
          ))}
        </Stack>
      </Card.Body>
    </Card>
  );
}
