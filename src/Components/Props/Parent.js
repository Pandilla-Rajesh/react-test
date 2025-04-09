import React from 'react'
import { Card, CardBody, CardHeader, CardTitle, Col, Container, Row } from 'react-bootstrap'
import Child from './Child'

const Paretnt=()=>{


    const userDetails = [

        {name:'Rajesh', lname:'Pandilla', age:38, role:'SSE/UI/UX/Developer', email:'rajesharjun786@gmail.com', phone:1234567890},
        {name:'Ushasri', lname:'Pandilla', age:32, role:'Home maker', email:'ushasrichitti@gmail.com', phone:1234567890},
        {name:'Aadhya', lname:'Pandilla', age:8, role:'Child one', email:'rajesharjun786@gmail.com', phone:1234567890},
        {name:'Arjun', lname:'Pandilla', age:3, role:'Child two', email:'rajesharjun786@gmail.com', phone:1234567890},
        {name:'Sathyanarayana', lname:'Pandilla', age:72, role:'Home maker', email:'rajesharjun786@gmail.com', phone:1234567890},
        {name:'Aanasurya', lname:'Pandilla', age:60, role:'Home maker', email:'rajesharjun786@gmail.com', phone:1234567890},
    
    ]

    return(
     <Container>
        <Row>
            <Col lg={12}>
               <div className='my-0'>
               <h1 className=''>Props Component</h1>
               </div>
            </Col>
            {userDetails.map((user, index) =>(
                <Col lg={4} className={` ${userDetails ? 'mb-3' : 'mb-0'}`} key={index}>
                    <Card>
                    <CardHeader>
                        <CardTitle>
                            User Details
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Child userDetails={user}/>
                    </CardBody>
                </Card>
                </Col>
            ))}
        </Row>
     </Container>
    )
}
export default Paretnt