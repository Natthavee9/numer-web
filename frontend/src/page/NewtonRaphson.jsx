import { useState } from 'react';
import {Card,Button,FormControl,Stack} from 'react-bootstrap';
import 'katex/dist/katex.min.css';
import { BlockMath } from "react-katex";
import { NewtonRaphson } from '../method/root of equation/newtonraphson';
import GraphNewtonRaph from '../component/graphNewtonRaph';
import BoxResult from '../component/CardResult';
import TableNewton from '../component/tableNewton';

export default function NewtonRaphsonPage(){
    const [equation,setEquation] = useState("");
    const [x,setX] = useState("");
    const [result,setResult] = useState("");
    const [data,setData] = useState([]);

    const Calculate =()=>{
        try{
            const cal = new NewtonRaphson(equation,x).solve();
            setResult("Root ≈ " + cal.root.toFixed(6)+" , " + cal.iteration +" iterations");
            setData(cal.dataStore);
        }catch (err){
            setResult(`Error: ${err.message}`);
            setData([]);
        }
    };
    return(
        <Card style={{margin:"5rem auto",width:"60rem"}}>
            <Card.Header as="h4" style={{textAlign:"center"}}>Newton Raphson Method</Card.Header>
            <Card.Body>
                <Stack gap={4}>
                    <BlockMath math={"f(x) = " + equation} />
                    <FormControl value={equation} onChange={(e)=>setEquation(e.target.value)} placeholder='Input Equation'/>
                    <FormControl type='number' value={x} onChange={(e)=>setX(e.target.value)} placeholder='X initial' />
                    <Button type='button' onClick={Calculate} style={{background:"#000000",color:"#A4f600"}}>
                        calculate
                    </Button>
                    
                    <BoxResult myResult={result}/>
                    <GraphNewtonRaph myData={data}/> 
                    <TableNewton myData={data}/>
                </Stack>
            </Card.Body>
        </Card>
    )

}