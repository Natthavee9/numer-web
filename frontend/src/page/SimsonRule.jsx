import { useState } from "react";
import {Card,FormControl,Button,Row,Col,Stack} from "react-bootstrap"
import 'katex/dist/katex.min.css';
import { BlockMath } from "react-katex";
import Boxresult from "../component/CardResult"
import { Simsonrule } from "../method/integration/simsonrule";

export default function SimpsonRulePage(){
    const [equation,setEquation] = useState("");
    const [a,setA] = useState("");
    const [b,setB] = useState("");
    const [result,setResult] = useState("");
    
    const Calculate=()=>{
        try{
            const cal = new Simsonrule(equation,a,b).solve();
            setResult("𝙸 ≈ " + cal.I.toFixed(8));
        }
        catch(err){
            setResult("Error: " + err.message);
        }
    }

    return (
        <Card style={{margin:"5rem auto",width:"60rem"}}>
            <Card.Header as="h4" style={{textAlign:"center"}}>Simpson Rule</Card.Header>
            <Card.Body>

            
            <Stack gap={4}>
                <BlockMath math={`\\int_{${a}}^{${b}} ${equation} \\, dx`}/>
                <Row>
                    <Col>
                      <FormControl type="number" value={a} onChange={(e)=>setA(e.target.value)} placeholder="Input A"/>
                    </Col>
                    <Col>
                    <FormControl type="number" value={b} onChange={(e)=>setB(e.target.value)} placeholder="Input B"/>
                    </Col>
                </Row>
                <FormControl  value={equation} onChange={(e)=>setEquation(e.target.value)} placeholder="Input equation"/>
                <Button type="button" size="md" onClick={Calculate} style={{background:"#000000",color:"#A4f600"}}>
                    calculate
                </Button>
                <Boxresult myResult={result}/>

            </Stack>
            </Card.Body>

        </Card>
    )
}