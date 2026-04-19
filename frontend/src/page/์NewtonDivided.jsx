import { useState } from "react";
import {Card,FormControl,Button,Row,Col,Stack} from "react-bootstrap"
import InterpolationInput from "../component/InterpolationInput";

export default function NewtonDividedPage(){
    return(
        <Card style={{width:"60rem",margin:"5rem auto"}}>
            <Card.Header as="h4" style={{textAlign:"center"}}>Newton's Divided Difference</Card.Header>
            <Card.Body>
                <InterpolationInput/>

            </Card.Body>

        </Card>
    )
}