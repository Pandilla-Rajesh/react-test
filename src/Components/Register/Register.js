import Lottie from 'lottie-react'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Registration from '../../lottie/registration.json'

const Register = ()=>{
    return(
      <section className='info-register h-100'>
            <Container fluid>
                <Row className='info-reg-layout'>
                    <Col lg={11}>
                        <div className='d-flex align-items-center justify-content-center'>
                             <h1 className='fs-1 text-white'>Create an Account</h1>
                        </div>
                        <Row>
                            <Col lg={6}>
                               <div className='info-reg-img bg-white rounded-4'>
                                    <Lottie animationData={Registration} />
                               </div>
                            </Col>
                            <Col lg={6}>
                                kjfdnvf
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
      </section>
    )
}

export default Register