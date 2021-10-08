import React from "react";
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
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../features/sidebar/sidebarSlice";

export default function Header() {
    const dispatch = useDispatch();

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
                <LogoWrapper href="#">
                    <Logo
                        src="/images/YouTube-White-Full-Color-Logo.wine.svg"
                        alt=""
                    />
                </LogoWrapper>
            </Menu>
            <Form action="">
                <input type="text" placeholder="Search" />
                <button>
                    <SearchIcon size={22} />
                </button>
            </Form>
            <HeaderIcons>
                <SearchToggleIcon size={28} />
                <MdNotificationsIcon size={28} />
                <MdAppsIcon size={28} />
                <UserProfile
                    src="https://yt3.ggpht.com/yti/APfAmoFiqCE0BbpBvUO5HCzZIcVnoY8dBOAGKz1RDB5H=s88-c-k-c0x00ffffff-no-rj-mo"
                    alt="User Profile"
                />
            </HeaderIcons>
        </Wrapper>
    );
}
