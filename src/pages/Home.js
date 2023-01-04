import React from 'react'
import Hero from '../component/Hero'
import Popular from '../component/Popular'
import Trending from '../component/Trending'


const Home = () => {
    return (
        <div className="p-5">
            <Hero />
            <Popular />
            <Trending />
        </div>
    )
}

export default Home
