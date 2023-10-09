
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
            original: "/img/portfolio/alexfrench/2.jpg",
            thumbnail: "/img/portfolio/alexfrench/2.jpg",
            width: 600,
            height: 900,
            dataFor: "shot",
        },
        {
            original: "/img/portfolio/alexfrench/3.jpg",
            thumbnail: "/img/portfolio/alexfrench/3.jpg",
            width: 600,
            height: 900,
            dataFor: "shot",
        },
        {
            original: "/img/portfolio/alexfrench/4.jpg",
            thumbnail: "/img/portfolio/alexfrench/4.jpg",
            width: 600,
            height: 900,
            dataFor: "shot",
        },
        {
            original: "/img/portfolio/alexfrench/5.jpg",
            thumbnail: "/img/portfolio/alexfrench/5.jpg",
            width: 600,
            height: 900,
            dataFor: "shot",
        },
        {
            original: "/img/portfolio/alexfrench/1.jpg",
            thumbnail: "/img/portfolio/alexfrench/1.jpg",
            width: 600,
            height: 900,
            dataFor: "shot",
        },
        {
            original: "/img/portfolio/alexfrench/6.jpg",
            thumbnail: "/img/portfolio/alexfrench/6.jpg",
            width: 600,
            height: 900,
            dataFor: "shot",
        },
        {
            original: "/img/portfolio/alexfrench/7.jpg",
            thumbnail: "/img/portfolio/alexfrench/7.jpg",
            width: 600,
            height: 900,
            dataFor: "shot",
        },
        {
            original: "/img/portfolio/alexfrench/8.jpg",
            thumbnail: "/img/portfolio/alexfrench/8.jpg",
            width: 600,
            height: 900,
            dataFor: "shot",
        },
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
