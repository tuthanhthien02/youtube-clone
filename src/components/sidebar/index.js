import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    Wrapper,
    IconHome,
    IconSubscriptions,
    IconThumbUp,
    IconHistory,
    IconLibraryBooks,
    IconSentimentDissatisfied,
    IconExitToApp,
} from "./styles/sidebar";
import {
    toggleSidebar,
    closeSidebar,
    openSidebar,
    getSidebarToggle,
} from "../../features/sidebar/sidebarSlice";
import { store } from "../../app/store";
import { useMediaQuery } from "react-responsive";

export default function Sidebar() {
    const dispatch = useDispatch();
    const isSidebarToggle = useSelector(getSidebarToggle);
    const isPortrait = useMediaQuery({ query: "(max-width: 768px)" });

    if (isPortrait) {
        // dispatch(openSidebar());
    }

    return (
        <Wrapper
            isToggle={isSidebarToggle}
            onClick={() => dispatch(closeSidebar())}
        >
            <li>
                <IconHome size={23} />
                <span>Home</span>
            </li>
            <li>
                <IconSubscriptions size={23} />
                <span>Subscriptions</span>
            </li>
            <li>
                <IconThumbUp size={23} />
                <span>Liked Video</span>
            </li>
            <li>
                <IconHistory size={23} />
                <span>History</span>
            </li>
            <li>
                <IconLibraryBooks size={23} />
                <span>Library</span>
            </li>
            <li>
                <IconSentimentDissatisfied size={23} />
                <span>I dont know</span>
            </li>

            <hr />

            <li>
                <IconExitToApp size={23} />
                <span>Log Out</span>
            </li>

            <hr />
        </Wrapper>
    );
}
