import { useState } from 'react';
import {Card,Button,FormControl,Row,Col,Stack, CardBody} from 'react-bootstrap';
import 'katex/dist/katex.min.css';
import { BlockMath } from "react-katex";
import { Secant } from '../method/root of equation/secant';
import Graph from '../component/graph';
import TableComponent from '../component/table';
import BoxResult from '../component/CardResult';

export default function SecantPage(){
    const [equation,setEquation] = useState("");
    const [x0,setX0] = useState("");
    const [x1,setX1] = useState("");
    const [result,setResult] = useState("");
    const [data,setData] = useState([]);

    const Calculate =()=>{
        if (equation == "") {
            setResult("No equation");
            return;
        }

        try{
            const cal = new Secant(equation,x0,x1).solve();
            setResult("Root ≈ " + cal.root.toFixed(6)+" , " + cal.iteration +" iterations");
            setData(cal.dataStore);
        }catch(err){
            setResult(`Error: ${err.message}`);
            setData([]);
        }
    };
    
    return(
        <Card style={{margin:"5rem auto",width:"60rem"}}>
            <Card.Header as = "h4" style={{textAlign : "center"}}>Secant Method</Card.Header>
            <Card.Body>
                <Stack gap={4}>
                    <BlockMath math={"f(x) = " + equation} />
                    <FormControl value={equation} onChange={(e)=>setEquation(e.target.value)} placeholder='Input Equation'/>
                    <Row>
                        <Col>
                          <FormControl type="number" value={x0} onChange={(e)=>setX0(e.target.value)} placeholder='X Start' />
                        </Col>
                        <Col>
                          <FormControl type="number" value={x1} onChange={(e)=>setX1(e.target.value)} placeholder='X End' />
                        </Col>
                    </Row>

                    <Button type='button' size='md' onClick={Calculate} style={{background:"#000000",color:"#A4F600"}}>
                        calculate
                    </Button>

                    <BoxResult myResult={result}/>
                    <Graph myData={data}/>
                    <TableComponent myData={data}/>     
                </Stack>
            </Card.Body>
        </Card>
    )
}