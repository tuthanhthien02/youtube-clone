import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginAuth } from "../../features/auth/authSlice";
import { Wrapper, Container, Logo } from "./styles/loginScreen";

export default function LoginScreen() {
    const dispatch = useDispatch();
    const history = useHistory();

    const accessToken = useSelector((state) => state.auth.accessToken);

    const handleLogin = () => {
        dispatch(loginAuth());
    };

    useEffect(() => {
        if (accessToken) {
            history.push("/");
        }
    }, [accessToken, history]);

    return (
        <Wrapper>
            <Container>
                <Logo
                    src="/images/YouTube-White-Full-Color-Logo.wine.svg"
                    alt=""
                />
                <button onClick={handleLogin}>Login With Google</button>
                <p>youtube-clone is made using YOUTUBE API</p>
            </Container>
        </Wrapper>
    );
}
