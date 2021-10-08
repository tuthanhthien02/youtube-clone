import styled from "styled-components/macro";
import { media } from "../../../theme/mediaQuery";
import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied,
} from "react-icons/md";

export const Wrapper = styled.nav`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 90vh;
    padding-top: 2rem;
    background-color: var(--black-secondary);
    transition: transform 0.2s ease-in;
    transform: ${(props) =>
        props.isToggle ? "translateX(0%)" : "translateX(-100%)"};
    position: fixed;
    z-index: 10;

    ${media.lessThan("md")`
		width: 90px;	

		li{
			justify-content: center;
		}

		span{
			display: none;
		}
	`}

    ${media.lessThan("sm")`
        position: fixed;
        z-index: 10;
	`}

    li {
        display: flex;
        align-items: center;
        padding: 0.6rem 1.5rem;
        margin: 0.2rem 0;
        cursor: pointer;

        span {
            margin-left: 1rem;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 0.4px;
        }

        &:hover {
            background-color: var(--border-color);
        }
    }

    hr {
        background-color: var(--border-color);
    }
`;

export const IconHome = styled(MdHome)``;

export const IconSubscriptions = styled(MdSubscriptions)``;

export const IconThumbUp = styled(MdThumbUp)``;

export const IconLibraryBooks = styled(MdLibraryBooks)``;

export const IconSentimentDissatisfied = styled(MdSentimentDissatisfied)``;

export const IconExitToApp = styled(MdExitToApp)``;

export const IconHistory = styled(MdHistory)``;
