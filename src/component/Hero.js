import React from 'react'
import ImageSlider from './ImageSlider'

const Hero = () => {
    const slides = [
        {
            url: "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg",
            title: "Blind"

        },
        {
            url: "https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/oo4Qn2q2MRpWVXeZnlIGYk38HPh.jpg",
            title: "thor"
        }
    ]
    return (
        <>
        <div className="h-72 md:h-96 border-2 border-[#de5801] flex">
            <ImageSlider slides={slides}/>
        </div>
        </>
    )
}

export default Hero
