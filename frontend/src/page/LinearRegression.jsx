import { useState } from "react";
import { Card,Stack } from "react-bootstrap";
import InputRegresstion from "../component/lineargressionInput";
import { PolynomialRegression } from "../method/regression/polynomialregression";

import RegressionGraph from "../component/graphRegression";


export default function SimpleregressionPage(){
    const [points, setPoints] = useState([]);
    const [order, setOrder] = useState(1);
    const [xValue, setXValue] = useState();
    const [result , setResult] = useState([]);

    const Calculate =(pointsInput, xInput, orderInput)=>{
        try{
            const cal = new PolynomialRegression(pointsInput, xInput, orderInput).solve();
            setPoints(pointsInput);
            setOrder(orderInput);
            setXValue(xInput);
            setResult(cal);
        }catch(err){
            setResult({});
        }
        

    }

    return (
      <Card style={{ margin: "5rem auto", width: "60rem" }}>
        <Card.Body as="h4" style={{ textAlign: "center" }}>
          Regression
        </Card.Body>
        <Stack gap={4}>
          <InputRegresstion
            numPoint={points}
            order={order}
            xValue={xValue}
            onCalculate={Calculate}
          />
          {result.coefficients && result.coefficients.length > 0 && (
            <RegressionGraph
              points={points}
              coefficients={result.coefficients}
              XValue={xValue}
              Fx={result.fx}
            />
          )}
        </Stack>
      </Card>
    );

}