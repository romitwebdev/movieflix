import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Modal, Row, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { rootState } from "../redux/store";
import {
    addSearchMovies,
    addMovies,
    addMovieDetails,
} from "../redux/stateSlice";
import cardStyle from "../styles/Home.module.css";
import Link from "next/link";

const KEY = 56948020;

const Content = () => {
    const { movies } = useSelector((state: rootState) => state.stateSlice); //moives list

    const dispatch = useDispatch();

    // fetch the movie details
    const fetchDetails = async (imdbID: string) => {
        let res = await fetch(
            `http://www.omdbapi.com/?i=${imdbID}&apikey=${KEY}`
        );
        let data = await res.json();
        return data;
    };

    // takes imdbID as args to fetch the movie details on click
    const handleDetails = (args: string) => {
        dispatch(addMovieDetails({ args: "" }));
        fetchDetails(args)
            .then((data) => {
                dispatch(addMovieDetails({ args: data }));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Row>
                {movies !== undefined && movies.length > 0 ? (
                    movies.map((mv) => {
                        return (
                            <Col
                                xs={12}
                                md={6}
                                lg={3}
                                className="mt-3"
                                key={mv.imdbID}
                            >
                                <Card>
                                    <Card.Img
                                        src={mv.Poster}
                                        height={350}
                                    ></Card.Img>
                                    <Card.ImgOverlay
                                        className={cardStyle.cardItems}
                                    >
                                        <Card.Header>
                                            <Card.Title
                                                className={
                                                    `text-light ` +
                                                    cardStyle.cardTitle
                                                }
                                            >
                                                {mv.Title}
                                            </Card.Title>
                                            <Card.Subtitle className="text-light">
                                                {mv.Year}
                                            </Card.Subtitle>
                                        </Card.Header>
                                        <Card.Footer className="d-flex flex-md-row flex-column gap-2">
                                            <Button variant="info">
                                                <Link
                                                    href={
                                                        `https://www.imdb.com/title/` +
                                                        mv.imdbID
                                                    }
                                                >
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={
                                                            cardStyle.buttonLink
                                                        }
                                                    >
                                                        Watch Trailer
                                                    </a>
                                                </Link>
                                            </Button>
                                            <Button variant="warning">
                                                <Link
                                                    href={`${mv.imdbID}/details`}
                                                >
                                                    <a
                                                        className={
                                                            cardStyle.buttonLink
                                                        }
                                                        onClick={() =>
                                                            handleDetails(
                                                                mv.imdbID
                                                            )
                                                        }
                                                    >
                                                        Details
                                                    </a>
                                                </Link>
                                            </Button>
                                        </Card.Footer>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                        );
                    })
                ) : (
                    <Alert
                        variant="danger"
                        className="text-center mt-5 w-50 mx-auto"
                    >
                        Sorry not found
                    </Alert>
                )}
            </Row>
        </>
    );
};

export default Content;
