import React from "react";
import Head from "next/head";

// meta tags types
interface metaProps {
    title: string;
    description: string;
    keywords: string;
}

const Meta = ({ title, description, keywords }: metaProps) => {
    const headTitle = `MovieFlix | ${title}`;
    return (
        <>
            <Head>
                <title>{headTitle}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
        </>
    );
};

Meta.defaultProps = {
    title: "home",
    description: "search and information about movies",
    keywords: "movies, search, online, freemovies",
};

export default Meta;
