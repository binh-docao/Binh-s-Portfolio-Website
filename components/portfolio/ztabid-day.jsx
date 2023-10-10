
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
    function importAll(r) {
        return r.keys().map(r);
      }
      
      // Dynamically include all .jpg files from the folder
      const images = importAll(require.context('../../public/img/portfolio/ztabid-day/', false, /\.jpg$/));
      
      const portfolioImages = images.map(module => {
        const src = module.default.src;  // Extract the src property from the default export
        return {
            original: src,
            thumbnail: src,
            width: 600,  // You can use module.default.width if you want the actual width
            height: 900,  // You can use module.default.height if you want the actual height
            dataFor: 'shot',
            filename: src.split('/').pop()  // Extract the filename (e.g., 10.6ee3dcc7.jpg)
        };
    }).sort((a, b) => {
        // Extract the number from the filename and compare
        const numA = parseInt(a.filename.split('.')[0], 10);
        const numB = parseInt(b.filename.split('.')[0], 10);
        return numA - numB;
    });
    
      
    return (
        <>
            {isMounted && (
                <Gallery>
                    <Tabs>
                        <TabList>
                            <Tab>Events</Tab>
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
