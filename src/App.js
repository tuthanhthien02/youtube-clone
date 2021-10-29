import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { Container } from "react-bootstrap";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import HomeScreen from "./screens/homeScreen";
import LoginScreen from "./screens/loginScreen";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Content>
                <Sidebar />
                <Container fluid>{children}</Container>
            </Content>
        </>
    );
};

function App() {
    const { accessToken, loading } = useSelector((state) => state.auth);
    const history = useHistory();

    useEffect(() => {
        if (!loading && !accessToken) {
            history.push("/login");
        }
    }, [accessToken, loading, history]);

    return (
        <Switch>
            <Route path="/" exact>
                <Layout>
                    <HomeScreen />
                </Layout>
            </Route>
            <Route path="/login">
                <LoginScreen />
            </Route>
            <Route path="/search">
                <Layout>
                    <h1>Search Results</h1>
                </Layout>
            </Route>
            <Route>
                <Redirect to="/" />
            </Route>
        </Switch>
    );
}

const Content = styled.div`
    display: flex;
    min-height: 90vh;
`;

export default App;
