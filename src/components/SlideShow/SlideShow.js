import { useEffect, useState, React, useRef } from "react";
import "./SlideShow.css";

function SlideShow(props) {
    const [slideIndex, setSlideIndex] = useState(0);
    const [hover, setHover] = useState(false);
    const [images, setImages] = useState({});
    const timeoutRef = useRef(null);
    const delay = 4000;

    const handleMouseOver = () => {
        setHover(true);
    };

    const handleMouseOut = () => {
        setHover(false);
    };

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }
    const changeIndex = (index) => {
        let slides = document.getElementsByClassName("mySlides");
        if (index > slides.length - 1) {
            index = 0;
        }
        if (index < 0) {
            index = slides.length - 1;
        }
        setSlideIndex(index);
    };
    const showSlides = (slideIndex) => {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex].style.display = "flex";
        dots[slideIndex].className += " active";
    };
    useEffect(() => {
        resetTimeout();
        if (!hover) {
            timeoutRef.current = setTimeout(() => {
                changeIndex(slideIndex + 1);
            }, delay);
        }
        showSlides(slideIndex);
        return () => {
            resetTimeout();
        };
    }, [slideIndex]);
    useEffect(() => {
        resetTimeout();
        if (!hover) {
            timeoutRef.current = setTimeout(() => {
                changeIndex(slideIndex + 1);
            }, delay);
        }
    }, [hover]);
    useEffect(() => {
        const importedImages = {};
        let i = 0;
        const r = require.context(
            "../../images/", // relative path to folder with images, that we want to be imported and preloaded
            false, // with subfolders or not
            /\.(png|jpe?g|svg)$/ // extensions of files
        );
        r.keys().forEach((item) => {
            const importedImg = r(item); // import image
            importedImages[item.replace("./", "")] = importedImg; // name of file will be a key, path to file will be a value
            const img = new Image();
            img.src = importedImg;
        });
        setImages(importedImages);
    }, []);
    return (
        <>
            <div
                className='slideshow-wrapper'
                id='slideshow-wrapper'
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseOut}
            >
                <div className='slideshow-container'>
                    {props.data.map((slide, i) => {
                        console.log(slide.image);
                        return (
                            <div className='mySlides fade'>
                                <img
                                    className={`${
                                        slide.imagePlace + "SlideImage"
                                    }`}
                                    src={images[slide.image]}
                                    alt={slide.imageAlt}
                                />
                                <div
                                    className={`${
                                        slide.textPlace + "SlideText"
                                    }`}
                                >
                                    {slide.text}
                                </div>
                            </div>
                        );
                    })}
                    <a
                        className='prev'
                        onClick={() => changeIndex(slideIndex - 1)}
                    >
                        &#10094;
                    </a>
                    <a
                        className='next'
                        onClick={() => changeIndex(slideIndex + 1)}
                    >
                        &#10095;
                    </a>
                </div>
                <br />
                <ol className='slideShow-indicator'>
                    {props.data.map((slide, i) => {
                        return (
                            <>
                                <li
                                    className={`dot ${
                                        hover
                                            ? "paused"
                                            : slideIndex === i
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() => changeIndex(i)}
                                    onMouseEnter={handleMouseOver}
                                    onMouseLeave={handleMouseOut}
                                ></li>
                            </>
                        );
                    })}
                </ol>
            </div>
        </>
    );
}

export default SlideShow;
