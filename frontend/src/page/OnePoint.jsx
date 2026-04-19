import { useState } from 'react';
import {Card,Button,FormControl,Stack,} from 'react-bootstrap';
import 'katex/dist/katex.min.css';
import { BlockMath } from "react-katex";
import { OnePoint } from '../method/root of equation/onepoint';
import GraphOnePoint from '../component/graphOnepoint'; 
import TableOnepoint from '../component/tableOnepoint'
import BoxResult from '../component/CardResult'; 
//#A4F600 

export default function OnePointPage(){
    const [equation,setEquation] = useState("");
    const [x,setX] = useState("");
    const [result,setResult] = useState("");
    const [data,setData] = useState([]);

    const Calculate =()=>{
        if (equation == "") {
            setResult("No equation");
            return;
        }

        try{
            const cal = new OnePoint(equation,x).solve();
            setResult("Root ≈ " + cal.root.toFixed(6)+" , " + cal.iteration +" iterations");
            setData(cal.dataStore);

        }catch(err){
            setResult(`Error: ${err.message}`);
            setData([]);
        }

    };
    return(
        <Card style={{margin:"5rem auto",width:"60rem"}}>
            <Card.Header as="h4" style={{textAlign:"center"}}>One Point Iteration Method</Card.Header>
            <Card.Body>
                <Stack gap={4}>
                    <BlockMath math={"f(x) = " + equation} />
                    <FormControl value={equation} onChange={(e)=>setEquation(e.target.value)} placeholder='Input Equation'/>
                    <FormControl type="number" value={x} onChange={(e)=>setX(e.target.value)} placeholder='X Initial'/>
                    <Button type='button' size='md' onClick={Calculate} style={{background:"#000000" , color:"#A4F600"}}>
                        Calculate
                    </Button>

                    <BoxResult myResult={result}/>
                    <GraphOnePoint myData={data}/>
                    <TableOnepoint myData={data}/>
                </Stack>
            </Card.Body>
        </Card>
    )
}