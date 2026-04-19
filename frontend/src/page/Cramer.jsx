import { useState } from 'react';
import {Card,Button,FormControl,Row,Col,Stack, CardBody,CardHeader} from 'react-bootstrap';


export default function CramerPage(){
    return(
        <Card style={{margin:"5rem auto" ,width:"60rem"}}>
            <Card.Header as="h4" style={{textAlign:"center"}}>Cramer's Rule</Card.Header>
            <Stack gap={4}>
                <Button style={{background:"#000000" ,color:"#A4f600",width:"20rem"}}>
                    calculate
                </Button>

            </Stack>

        </Card>
       

    )
}