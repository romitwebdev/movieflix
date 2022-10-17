import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Container, Offcanvas } from "react-bootstrap";
import Content from "../components/Content";
import Meta from "../components/Meta";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
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
