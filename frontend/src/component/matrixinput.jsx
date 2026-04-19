import {FormControl,Stack,Container,Row,Col} from "react-bootstrap"
import { useState } from "react"

export default function MatrixInput({onCal}){
    const [size , setSize]  = useState(3);

    //เก็บเมทริกซ์ A
    const [matrixA,setMatrixA] = useState([]);
    
     //เก็บเวคเตอร์ B
    const [vectorB , setVectorB] = useState([]);

    
    const MatrixChange=(i,j,value)=>{
        const newMatrix = [...matrixA];
        newMatrix[i][j] = value;
        setMatrixA(newMatrix);
    }

    const VectorChange=(i,value)=>{
        const newVector = [...vector];
        newVector[i] = value;
        setVectorB(newVector);  
    }

    const Resize=(n)=>{
        if(n<1) return;
        setSize(n);
        setMatrixA(Array.from({length: n},()=>Array(n).fill("")));
        setVectorB(Aerray(n).fill(""));
    }

    return(


    )
}