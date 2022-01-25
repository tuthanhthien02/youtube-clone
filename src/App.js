import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { Container } from "react-bootstrap";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import HomeScreen from "./screens/homeScreen";
import LoginScreen from "./screens/loginScreen";
import WatchScreen from "./screens/watchScreen";
import SearchScreen from "./screens/searchScreen";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Content>
                <Sidebar />
                <Container className="px-4" fluid>
                    {children}
                </Container>
            </Content>
        </>
    );
};

function App() {
    // const { accessToken, loading } = useSelector((state) => state.auth);
    // const history = useHistory();

    // useEffect(() => {
    //     if (!loading && !accessToken) {
    //         history.push("/login");
    //     }
    // }, [accessToken, loading, history]);

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

            <Route path="/search/:query">
                <Layout>
                    <SearchScreen />
                </Layout>
            </Route>

            <Route path="/watch/:id">
                <Layout>
                    <WatchScreen />
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
