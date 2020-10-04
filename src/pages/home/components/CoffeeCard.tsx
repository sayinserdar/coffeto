import React, { useState } from 'react'
import { ReactComponent as CoffeeIcon } from 'assets/coffee.svg';
import { useHistory } from 'react-router-dom'

const CoffeeCard = () => {
    const [counter, setCounter] = useState(0)
    const history = useHistory();
    const [isHovered, setIsHovered] = useState(false)
    const hoveredTextColor = isHovered ? 'text-ocean' : 'text-white';
    const hoveredBackgroundColor = isHovered ? 'bg-white' : 'bg-ocean';

    const onClick = () => {
        setTimeout(() => {
            setIsHovered(!isHovered);
            history.push(`/history`);
        }, 500);



    }

    return (
        <div className={["transition duration-500 ease-in-out flex flex-col items-center justify-start rounded-lg shadow-xl h-100 w-64 p-4", hoveredBackgroundColor].join(' ')}>
            <h1 className={["text-white text-3xl border-b-4 border-salmon mb-4 w-full", hoveredTextColor].join(' ')}>Coffeto</h1>

            <p className={hoveredTextColor}>How many did you drink today ?</p>

            <div className="text-salmon text-5xl mb-2">{counter}</div>


            <svg onClick={() => { setCounter(counter + 1) }} className={["stroke-current h-12 cursor-pointer", hoveredTextColor].join(' ')} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            <svg onClick={() => { if (counter > 0) setCounter(counter - 1) }} className={["stroke-current h-12 cursor-pointer", hoveredTextColor].join(' ')} fill="none" stroke="currentColo" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" /></svg>


            {/* <CoffeeIcon width={30} height={40} /> */}
            <button onClick={onClick} onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)} className="text-3xl focus:outline-none outline-none bg-salmon flex justify-center items-center text-white h-20 w-full p-1">Let's go</button>


        </div>
    )
}

export default CoffeeCard
