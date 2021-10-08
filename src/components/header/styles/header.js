import styled from "styled-components/macro";
import { media } from "../../../theme/mediaQuery";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BiLeftArrowAlt } from "react-icons/bi";
import { MdNotifications, MdApps } from "react-icons/md";

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    background-color: var(--black-primary);
    min-height: 10vh;
    width: 100%;

    ${media.lessThan("md")`
        padding: 0.5rem 1.5rem; 
    `}

    ${media.lessThan("sm")`
		padding: 0.5rem;	
	`}
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const SearchMenuToggle = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--black-primary);
    z-index: 10;
    /* refractor later............. */
    display: none;

    & > div {
        margin-right: 0.5rem;
    }
`;

export const MenuToggleButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: 40px;
    height: 40px;
    color: white;
    background-color: transparent;
    border-radius: 100rem;

    &:focus {
        background: #313131;
    }
`;

export const BackButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0.1;
    border: none;
    width: 40px;
    height: 40px;
    color: white;
    background-color: transparent;
    border-radius: 100rem;

    &:focus {
        background: #313131;
    }
`;

export const LeftArrowIcon = styled(BiLeftArrowAlt)`
    width: 100%;
    height: 100%;
`;

export const FormToggle = styled.form`
    display: flex;
    flex: 0.9;
    padding: 0.1rem;
    margin: 0.1rem;
    background-color: var(--black-secondary);

    input {
        width: 100%;
        border: none;
        font-weight: 500;
        background: transparent;
        padding: 0.3rem;
        color: var(--text-color);
        border: 1.2px solid hsl(0, 0%, 18.82%);

        &:focus {
            outline: none;
            border: 1.2px solid #1c62b9;
        }
    }

    input {
        width: 100%;
        border: none;
        font-weight: 500;
        background: transparent;
        padding: 0.3rem;
        color: var(--text-color);
        border: 1.2px solid hsl(0, 0%, 18.82%);

        &:focus {
            outline: none;
            border: 1.2px solid #1c62b9;
        }
    }

    button {
        padding: 0 1.25rem;
        color: var(--text-color);
        background: #313131;
        border: none;

        &:focus {
            border: none;
        }
    }
`;

export const MenuToggle = styled(FaBars)`
    width: 24px;
    height: 24px;
`;

export const LogoWrapper = styled.a`
    display: inline-block;
    width: 120px;
    height: 80px;

    ${media.lessThan("sm")`
        width: 90px; 
        height: 60px;
    `}
`;

export const Logo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;

    ${media.lessThan("sm")`
		/* display: none;	 */
	`}
`;

export const Form = styled.form`
    display: flex;
    flex: 0.6;
    padding: 0.1rem;
    margin: 0.1rem;
    background-color: var(--black-secondary);

    input {
        width: 100%;
        border: none;
        font-weight: 500;
        background: transparent;
        padding: 0.3rem;
        color: var(--text-color);
        border: 1.2px solid hsl(0, 0%, 18.82%);

        &:focus {
            outline: none;
            border: 1.2px solid #1c62b9;
        }
    }

    button {
        padding: 0 1.25rem;
        color: var(--text-color);
        background: #313131;
        border: none;

        &:focus {
            border: none;
        }
    }

    ${media.lessThan("35rem")`
        flex: 0;
        display: none;  
    `}
`;

export const HeaderIcons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 0.15;

    & > * {
        margin: 8px;
    }

    ${media.lessThan("sm")`
        flex: 0.4;

        & > *:not(img) {
            width: 24px;
            height: 24px;
        }

    `}
`;

export const UserProfile = styled.img`
    border-radius: 50%;
    width: 40px;
    object-fit: contain;
    margin-left: 5px;
`;

export const SearchIcon = styled(AiOutlineSearch)``;

export const SearchToggleIcon = styled(AiOutlineSearch)`
    display: none;

    ${media.lessThan("35rem")`
        display: block;
   `}
`;

export const MdNotificationsIcon = styled(MdNotifications)``;

export const MdAppsIcon = styled(MdApps)``;
