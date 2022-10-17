import React from "react";
import {
    Alert,
    Badge,
    Card,
    Col,
    Container,
    ListGroup,
    Row,
    Spinner,
    Stack,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { rootState } from "../../redux/store";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import Meta from "../../components/Meta";

const Details = () => {
    const { movieDetails } = useSelector(
        (state: rootState) => state.stateSlice
    );

    return (
        <div className="bg-dark py-5">
            <Meta title={movieDetails.Title} />
            <Container>
                {Object.entries(movieDetails).length > 0 ? (
                    <Row className="py-3 bg-light">
                        <Col
                            xs={12}
                            className="d-flex flex-lg-row flex-column justify-content-start align-items-top gap-3"
                        >
                            <Image
                                src={movieDetails.Poster}
                                alt=""
                                height={450}
                                width={350}
                            />

                            <div>
                                <Alert variant="secondary" className="mb-1">
                                    <h1 className="mb-0">
                                        {movieDetails.Title}
                                    </h1>{" "}
                                </Alert>
                                <ul>
                                    <div className="d-flex gap-5">
                                        <li>{movieDetails.Year}</li>
                                        <li>{movieDetails.Rated}</li>
                                        <li>{movieDetails.Runtime}</li>
                                    </div>
                                </ul>
                                <div className="d-flex align-items-center gap-2 py-2 border-top border-bottom border-dark">
                                    <strong>IMDb RATING:</strong> <AiFillStar />
                                    {movieDetails.imdbRating}
                                    <Badge className="bg-dark" pill>
                                        {movieDetails.Genre}
                                    </Badge>
                                </div>
                                <p className="my-3">{movieDetails.Plot}</p>

                                <p className="border-dark border-bottom">
                                    <strong>Director:</strong>{" "}
                                    {movieDetails.Director}
                                </p>
                                <p className="border-dark border-bottom">
                                    <strong>Writer:</strong>{" "}
                                    {movieDetails.Writer}
                                </p>
                                <p className="border-dark border-bottom">
                                    <strong>Stars:</strong>{" "}
                                    {movieDetails.Actors}
                                </p>
                            </div>
                        </Col>
                    </Row>
                ) : (
                    <div className="text-center">
                        <Spinner variant="light" animation="border"></Spinner>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default Details;
