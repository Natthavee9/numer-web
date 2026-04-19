import { useState } from "react";
import { Card, Stack ,Row,Col,FormControl, CardBody,Button } from "react-bootstrap";
import { CompositeTrapezoidal } from "../method/integration/composittrapzoidal";
import TrapziodalGraph from "../component/graphintegrate"


export default function CompositeTrapezoidalPage(){
    const [a,setA] = useState("");
    const [b,setB] = useState("");
    const [n ,setN] = useState("");
    const [equation,setEquation] = useState("");
    const [result,setResult] = useState("");
    const [graph ,setGraph] = useState({equation:null , a:null ,b:null,n:null});
    

    const Calculate=()=>{
        try{
            const cal = new CompositeTrapezoidal(equation,a,b,n).solve();
            setResult("I = " + cal.I.toFixed(6))
            setGraph({equation:equation , a:Number(a),b:Number(b),n:Number(n)})


        }catch(err){
            setResult("ERROR : " + err.message)
            setGraph({equation:null , a:null ,b:null,n:null})

        }
    }

    return(
        
        < Card style={{width: "60rem" , margin:"5rem auto"}}>
            <Card.Header as="h4" style={{textAlign:"center"}}>Composite Trapzoidal</Card.Header>
            <Card.Body>
                <Stack gap={4}>

                <Row>
                    <Col>
                      <FormControl value={a} onChange={(e)=>setA(e.target.value)} placeholder="A"/>
                    </Col>
                    <Col>
                      <FormControl value={b} onChange={(e)=>setB(e.target.value)} placeholder="B"/>
                    </Col>
                    <Col>
                     <FormControl type="number" value={n} onChange={(e)=>setN(e.target.value)} placeholder="N"/>
                    </Col>
                </Row>
                <FormControl  value={equation} onChange={(e)=>setEquation(e.target.value)} placeholder="equa"/>
                <Button type="button" onClick={Calculate}>
                    Calculate
                </Button>


                {graph.equation && <TrapziodalGraph equation={equation} a={a} b={b} n={n}/>}
                
                
                </Stack>
                
                

            </Card.Body>
                
                


                
                
              
            
            
            

        </Card>
    )
}