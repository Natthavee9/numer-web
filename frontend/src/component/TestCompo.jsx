import { useState } from "react";
import { Card,Stack } from "react-bootstrap";

export default function TestCompo(){
    const [point,setPoint] = useState();
    const [xValue,setXvalue] = useState();




    return(
         <Card>
            <label>Point</label>
            <input
                type="number"
                value={xValue}
                onChange={}

            />
         </Card>

    );
} 