import React, { useState } from "react";
import { Badge, Nav, Offcanvas } from "react-bootstrap";
import {
    AiFillHome,
    AiFillCompass,
    AiFillClockCircle,
    AiFillStar,
    AiOutlineDownload,
    AiFillSetting,
    AiFillInfoCircle,
} from "react-icons/ai";
import { BsFillPeopleFill, BsFillAlarmFill } from "react-icons/bs";
import { handleSidebar } from "../redux/stateSlice";
import { useSelector, useDispatch } from "react-redux";
import { rootState } from "../redux/store";

const Sidebar = () => {
    const showSidebar = useSelector(
        (state: rootState) => state.stateSlice.showSidebar
    );
    const dispatch = useDispatch();

    return (
        <>
            <Offcanvas
                show={showSidebar}
                className="bg-dark"
                onHide={() => dispatch(handleSidebar({ args: "hide" }))}
            >
                <Offcanvas.Body>
                    <Offcanvas.Header
                        closeButton
                        className="text-secondary mb-2"
                    >
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Nav
                        defaultActiveKey={0}
                        variant="pills"
                        className="flex-column"
                    >
                        <Nav.Link
                            eventKey={0}
                            className="text-light mb-2 d-flex align-items-center"
                        >
                            <AiFillHome />
                            <span className="ms-2">Home</span>
                        </Nav.Link>
                        <Nav.Link
                            eventKey={1}
                            className="text-light mb-2 d-flex align-items-center"
                        >
                            <AiFillCompass />
                            <span className="ms-2">Discovery</span>
                        </Nav.Link>
                        <Nav.Link
                            eventKey={2}
                            className="text-light mb-2 d-flex align-items-center"
                        >
                            <BsFillPeopleFill />
                            <span className="ms-2">Community</span>
                        </Nav.Link>
                        <Nav.Link
                            eventKey={3}
                            className="text-light mb-2 d-flex align-items-center"
                        >
                            <BsFillAlarmFill />
                            <span className="ms-2">Coming soon</span>{" "}
                            <Badge bg="danger" className="ms-2" pill>
                                2
                            </Badge>
                        </Nav.Link>

                        <hr className="border border-light" />

                        <Offcanvas.Header className="text-secondary">
                            <Offcanvas.Title>Library</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Nav.Link
                            eventKey={4}
                            className="text-light mb-2 d-flex align-items-center"
                        >
                            <AiFillClockCircle />
                            <span className="ms-2">Recent</span>
                        </Nav.Link>
                        <Nav.Link
                            eventKey={5}
                            className="text-light mb-2 d-flex align-items-center"
                        >
                            <AiFillStar />
                            <span className="ms-2">Top rated</span>
                        </Nav.Link>
                        <Nav.Link
                            eventKey={6}
                            className="text-light mb-2 d-flex align-items-center"
                        >
                            <AiOutlineDownload />
                            <span className="ms-2">Downloaded</span>
                        </Nav.Link>

                        <hr className="border border-light" />

                        <Nav.Link
                            eventKey={7}
                            className="text-light mb-2 d-flex align-items-center"
                        >
                            <AiFillSetting />
                            <span className="ms-2">Settings</span>
                        </Nav.Link>
                        <Nav.Link
                            eventKey={8}
                            className="text-light mb-2 d-flex align-items-center"
                        >
                            <AiFillInfoCircle />
                            <span className="ms-2">Help</span>
                        </Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Sidebar;
