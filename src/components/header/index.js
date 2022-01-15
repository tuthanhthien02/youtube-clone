import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {
    MenuToggle,
    Menu,
    MenuToggleButton,
    BackButton,
    LogoWrapper,
    SearchIcon,
    SearchMenuToggle,
    FormToggle,
    SearchToggleIcon,
    MdNotificationsIcon,
    MdAppsIcon,
    LeftArrowIcon,
    Wrapper,
    Logo,
    Form,
    HeaderIcons,
    UserProfile,
} from "./styles/header";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../features/sidebar/sidebarSlice";

export default function Header() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [input, setInput] = useState("");
    const user = useSelector((state) => state.auth.user);

    const handleLogoClick = () => {
        history.push("/");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        history.push(`/search/${input}`);
    };

    return (
        <Wrapper>
            <SearchMenuToggle>
                <div>
                    <BackButton>
                        <LeftArrowIcon />
                    </BackButton>
                </div>
                <FormToggle action="">
                    <input type="text" placeholder="Search" />
                    <button>
                        <SearchIcon size={22} />
                    </button>
                </FormToggle>
            </SearchMenuToggle>
            <Menu>
                <MenuToggleButton onClick={() => dispatch(toggleSidebar())}>
                    <MenuToggle size={26} />
                </MenuToggleButton>
                <LogoWrapper>
                    <Link to="/">
                        <Logo
                            src="/images/YouTube-White-Full-Color-Logo.wine.svg"
                            alt=""
                        />
                    </Link>
                </LogoWrapper>
            </Menu>
            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button>
                    <SearchIcon size={22} />
                </button>
            </Form>
            <HeaderIcons>
                <SearchToggleIcon size={28} />
                <MdNotificationsIcon size={28} />
                <MdAppsIcon size={28} />
                <UserProfile src={user.photoURL} alt={user.name} />
            </HeaderIcons>
        </Wrapper>
    );
}
