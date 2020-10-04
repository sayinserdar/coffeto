import React from 'react'
import { CoffeeCard } from 'pages/home/components'
import { Headerion } from 'pages/components'

const Home = () => {
    return (
        <Headerion >
            <>
                <h1 className="text-center mb-16 text-2xl lg:text-5xl text-white">I need to stop drinking coffee</h1>
                <CoffeeCard />
            </>
        </Headerion>
    )
}

export default Home
