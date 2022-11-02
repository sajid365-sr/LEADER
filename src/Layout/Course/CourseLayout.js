
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import AsideLeft from '../../Pages/Fixed/AsideLeft/AsideLeft';

const CourseLayout = () => {
    return (
        <div>
            <Container className='my-5'>
                <Row>
                    <Col lg='3' className='mt-3'>
                        <AsideLeft></AsideLeft>
                    </Col>
                    <Col lg='9'>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseLayout;