import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CategoriesBar from "../../components/categoriesBar";
import Video from "../../components/video";

export default function HomeScreen() {
    return (
        <div>
            <Container>
                <CategoriesBar />
                <Row>
                    {[...new Array(20)].map(() => (
                        <Col lg={3} md={4} sm={6}>
                            <Video />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
