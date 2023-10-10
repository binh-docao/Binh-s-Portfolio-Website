import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useRouter } from 'next/router';
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";
import Modal from "react-modal";

Modal.setAppElement('#__next') // Assuming `#__next` is the root element of your Next.js app


const Portfolio = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [passwordType, setPasswordType] = useState("password");
    const form = useRef(null);
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);

        if (router.query.password === 'true') {
            setShowPasswordModal(true);
        }

    }, [router.query]);

    const handleTabClick = () => {
        setShowPasswordModal(true);
    };

    const verifyPassword = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const enteredPassword = formData.get("password");
    
        const correctPassword = "harris";  // Ensure you have the right password
    
        if (enteredPassword === correctPassword) {
            toast.success("Redirecting...", {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            setTimeout(() => {
                window.location.href = "https://drive.google.com/drive/folders/1HcHLaE6LzGpQ8plAPzNGIG6sY84PE1j1?usp=sharing"; // Your Google Drive link
            }, 2200); // 2000 milliseconds (or 2 seconds)
        } else {
            toast.error("Incorrect Password", {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const portfolioImages = [
        {
            original: "/img/portfolio/alexharris/1.jpg",
            thumbnail: "/img/portfolio/alexharris/1.jpg",
            width: 600,
            height: 900,
            dataFor: "shot",
        },
        {
            original: "/img/portfolio/alexharris/2.jpg",
            thumbnail: "/img/portfolio/alexharris/2.jpg",
            width: 600,
            height: 900,
            dataFor: "shot",
        },
        {
            original: "/img/portfolio/alexharris/3.jpg",
            thumbnail: "/img/portfolio/alexharris/3.jpg",
            width: 600,
            height: 900,
            dataFor: "shot",
        },
        {
            original: "/img/portfolio/alexharris/4.jpg",
            thumbnail: "/img/portfolio/alexharris/4.jpg",
            width: 600,
            height: 900,
            dataFor: "shot",
        },
        {
            original: "/img/portfolio/alexharris/5.jpg",
            thumbnail: "/img/portfolio/alexharris/5.jpg",
            width: 600,
            height: 900,
            dataFor: "shot",
        },
        {
            original: "/img/portfolio/alexharris/6.jpg",
            thumbnail: "/img/portfolio/alexharris/6.jpg",
            width: 600,
            height: 900,
            dataFor: "shot",
        },
        {
            original: "/img/portfolio/alexharris/7.jpg",
            thumbnail: "/img/portfolio/alexharris/7.jpg",
            width: 600,
            height: 900,
            dataFor: "shot",
        },
        {
            original: "/img/portfolio/alexharris/8.jpg",
            thumbnail: "/img/portfolio/alexharris/8.jpg",
            width: 600,
            height: 900,
            dataFor: "shot",
        }
        //... Add more images as needed
    ];
 return (
        <>
<Modal
    isOpen={showPasswordModal}
    onRequestClose={() => setShowPasswordModal(false)}
    contentLabel="Password Modal"
    style={{
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)', 
            zIndex: 1000,
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: '500px',
            minHeight: '200px',  // This ensures the modal isn't too tall.
            maxHeight: '400px',  // This ensures the modal isn't too tall.
            border: '2px solid #000',
            position: 'relative',
            padding: '20px',
            background: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }}
>
    <button className="pass-close-button" onClick={() => setShowPasswordModal(false)} >X</button>

    <h3 style={{ textAlign: 'center', marginBottom: '20px',marginTop:"20px" }}>Enter Password to Access</h3>
    <form
        className="password_form"
        id="passwordForm"
        ref={form}
        onSubmit={verifyPassword}
        style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
        <input
            type={passwordType}
            name="password"
            placeholder="Enter Password"
            required
            style={{ width: '80%', color: 'inherit', textAlign: 'center', marginBottom: '20px' }}
        />
        <button type="submit" className="ib-button">
            Submit
        </button>
    </form>
</Modal>

            {isMounted && (
                <Gallery>
                    <Tabs>
                        <TabList>
                            <Tab onClick={handleTabClick}>Full Access</Tab>
                        </TabList>
                        <div className="list_wrapper">
                            <TabPanel>
                                <ul className="portfolio_list" data-aos="fade-right" data-aos-duration="1200">
                                    {portfolioImages.map((img, index) => (
                                        <li key={index}>
                                            <div className="inner">
                                                <div className="entry tokyo_tm_portfolio_animation_wrap">
                                                    <Item 
                                                        original={img.original} 
                                                        thumbnail={img.thumbnail} 
                                                        width={img.width} 
                                                        height={img.height}>
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

