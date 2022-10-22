import type { NextPage } from "next";
import { Container } from "react-bootstrap";
import Content from "../components/Content";
import Meta from "../components/Meta";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";
import { stateType } from "../redux/stateSlice";
import {
    addMovies,
    toggleInitialLoadData,
    toggleLoading,
} from "../redux/stateSlice";
import { useSelector, useDispatch } from "react-redux";
import { rootState } from "../redux/store";
import { useEffect } from "react";
import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();

export const getServerSideProps = async () => {
    let res = await fetch(
        `http://www.omdbapi.com/?s="hulk"&apikey=${serverRuntimeConfig.KEY}`
    );
    let movies = await res.json();

    return {
        props: { movies: movies.Search || null },
    };
};

const Home: NextPage<stateType> = ({ movies }) => {
    const dispatch = useDispatch();
    const { initialLoadData } = useSelector(
        (state: rootState) => state.stateSlice
    );

    useEffect(() => {
        if (initialLoadData) {
            dispatch(addMovies({ args: movies }));

            dispatch(toggleInitialLoadData({ args: "false" }));

            dispatch(toggleLoading({ args: "false" }));
        }
    }, [movies]);

    return (
        <div className={styles.container}>
            <Meta />
            <Container>
                <Content />
                <Sidebar />
            </Container>
        </div>
    );
};

export default Home;
