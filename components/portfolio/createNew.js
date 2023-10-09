const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the name: ', (name) => {
    createFiles(name);
    rl.close();
});

function createFiles(name) {
    const formattedName = name.toLowerCase().replace(' ', '');
    const jsxFileName = `${formattedName}.jsx`;
    const jsFileName = `${formattedName}.js`;
    const jsxContent = `
import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";

const Portfolio = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    const portfolioImages = [
        {
            original: "/img/portfolio/${formattedName}/1.jpg",
            thumbnail: "/img/portfolio/${formattedName}/1.jpg",
            width: 600,
            height: 900,
            dataFor: "shot",
        },
        //... Add more images as needed
    ];
    return (
        <>
            {isMounted && (
                <Gallery>
                    <Tabs>
                        <TabList>
                            <Tab>Friends</Tab>
                        </TabList>
                        <div className="list_wrapper">
                            <TabPanel>
                                <ul className="portfolio_list" data-aos="fade-right" data-aos-duration="1200">
                                    {portfolioImages.map((img, index) => (
                                        <li key={index}>
                                            <div className="inner">
                                                <div className="entry tokyo_tm_portfolio_animation_wrap">
                                                    <Item original={img.original} thumbnail={img.thumbnail} width={img.width} height={img.height}>
                                                        {({ ref, open }) => (
                                                            <Image
                                                                width={img.width}
                                                                height={img.height}
                                                                srl_gallery_image="true"
                                                                src={img.original}
                                                                data-for={img.dataFor}
                                                                role="button"
                                                                ref={ref}
                                                                onClick={open}
                                                            />
                                                        )}
                                                    </Item>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </TabPanel>
                        </div>
                    </Tabs>
                </Gallery>
            )}
        </>
    );
};

export default Portfolio;
`;

    const jsContent = `
import Seo from "../components/Seo";
import Portfolio from "../components/portfolio/${formattedName}";
import Sidebar from "../components/sidebar/Sidebar";
import Link from 'next/link';

const index = () => {
    return (
        <>
            <Seo pageTitle="${name}" imageUrl="/img/portfolio/${formattedName}/1.jpg"></Seo>
            <Sidebar />
            <div className="rightpart">
                <div className="rightpart_in">
                    <div className="tokyo_tm_section">
                        <div className="container">
                            <div className="tokyo_tm_portfolio">
                                <div className="tokyo_tm_title">
                                    <div className="title_flex">
                                        <div className="left">
                                            <Link href="/portfolio">
                                                <div className="back-to-portfolio">
                                                    ← Back to Portfolio
                                                </div>
                                            </Link>
                                            <h3>${name}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio_filter">
                                    <Portfolio />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;
`;

    fs.writeFileSync(jsxFileName, jsxContent);
    fs.writeFileSync(jsFileName, jsContent);

    console.log(`Files ${jsxFileName} and ${jsFileName} created successfully!`);
    const portfolioDir = path.join(__dirname, "/"); // Adjust the path
    const portfolioJsxPath = path.join(portfolioDir, "Portfolio.jsx");
    updateExistingFile(portfolioJsxPath); // Replace 'path_to_existing_file.js' with your file's path.
}

function updateExistingFile(filePath) {
    // ... [rest of the updateExistingFile code] ...

    console.log(`Updated the file: ${filePath}`);
}

// Note: You might want to move the call to updateExistingFile() elsewhere if you don't want it to run immediately after file creation.
