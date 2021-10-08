import React from "react";
import styled from "styled-components/macro";
import { Container } from "react-bootstrap";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import HomeScreen from "./screens/homeScreen";

function App() {
    return (
        <>
            <Header />
            <Content>
                <Sidebar />
                <Container fluid>
                    <HomeScreen />
                </Container>
            </Content>
        </>
    );
}

const Content = styled.div`
    display: flex;
    min-height: 90vh;
`;

export default App;
