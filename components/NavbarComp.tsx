import React, { useEffect, useState } from "react";
import {
    Button,
    Container,
    FloatingLabel,
    Form,
    Nav,
    Navbar,
    NavbarBrand,
    NavDropdown,
    NavLink,
} from "react-bootstrap";
import Image from "next/image";
import { RiMenu4Line } from "react-icons/ri";
import { BsPersonCircle } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { IconContext } from "react-icons";
import {
    handleSidebar,
    addSearchMovies,
    addMovies,
    toggleLoading,
} from "../redux/stateSlice";
import { useSelector, useDispatch } from "react-redux";
import { rootState } from "../redux/store";
import Link from "next/link";
import homeModule from "../styles/Home.module.css";
import { useRouter } from "next/router";

const KEY = 56948020;

const NavbarComp = () => {
    const [searchInput, setSearchInput] = useState<string>(""); //save the search value so we can store to searchMovies state
    // searchMovies used to fetch the data
    const { searchMovies } = useSelector(
        (state: rootState) => state.stateSlice
    );
    const router = useRouter(); // to push to homepage while searching movies from another page

    const dispatch = useDispatch();

    // sets the searchInput on submit
    const handleMovieSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/");
        dispatch(addSearchMovies({ args: searchInput }));
        setSearchInput("");
    };

    // fetching the data
    const getData = async () => {
        let res = await fetch(
            `http://www.omdbapi.com/?s=${searchMovies}&apikey=${KEY}`
        );
        let data = await res.json();
        return data;
    };

    useEffect(() => {
        dispatch(toggleLoading({ args: "true" }));
        getData()
            .then((data) => {
                dispatch(addMovies({ args: data.Search }));

                dispatch(toggleLoading({ args: "false" }));
            })
            .catch((err) => {
                console.log(err);
            });
        dispatch(toggleLoading({ args: "false" }));
    }, [searchMovies]);

    return (
        <>
            <Navbar variant="dark" bg="danger" expand="lg" sticky="top">
                <Container>
                    <Nav.Link
                        onClick={() =>
                            dispatch(handleSidebar({ args: "show" }))
                        }
                    >
                        <IconContext.Provider
                            value={{ className: "text-light lead" }}
                        >
                            <RiMenu4Line />
                        </IconContext.Provider>
                    </Nav.Link>
                    <NavbarBrand>
                        {/* <Link href="/"> */}
                        <a
                            className={
                                `d-flex align-items-center ms-3 ` +
                                homeModule.navBrand
                            }
                            href="/"
                        >
                            <Image
                                src="/images/logo.png"
                                alt=""
                                width={35}
                                height={25}
                                className="d-inline-block"
                            />
                            <span className="ms-2">MovieFlix</span>
                        </a>
                        {/* </Link> */}
                    </NavbarBrand>
                    <Navbar.Toggle aria-controls="navbar-collapse"></Navbar.Toggle>
                    <Navbar.Collapse id="navbar-collapse">
                        <Nav>
                            <Nav.Item>
                                <NavLink disabled>Movies</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink disabled>Series</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink disabled>Tv Shows</NavLink>
                            </Nav.Item>
                            <NavDropdown title="Genre" disabled>
                                <NavDropdown.Item>Action</NavDropdown.Item>
                                <NavDropdown.Item>Comedy</NavDropdown.Item>
                                <NavDropdown.Item>Historical</NavDropdown.Item>
                                <NavDropdown.Item>Romance</NavDropdown.Item>
                                <NavDropdown.Item>Drama</NavDropdown.Item>
                                <NavDropdown.Item>Adventure</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form
                            className="ms-auto d-flex gap-2"
                            onSubmit={handleMovieSearch}
                        >
                            <Form.Control
                                type="search"
                                placeholder="Search Movies"
                                className="rounded-5 bg-dark text-light border border-secondary"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                            />
                            <Button
                                type="submit"
                                variant="outline-dark"
                                className="rounded-4"
                            >
                                <ImSearch />
                            </Button>
                        </Form>
                        <Nav.Link className="d-flex align-items-center justify-content-start ms-lg-5 mt-2 mt-lg-0 text-light">
                            <BsPersonCircle />
                            <span className="ms-1">John Doe</span>
                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarComp;
