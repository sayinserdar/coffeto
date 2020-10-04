import React from 'react'
import { History } from 'pages/history/components'
import { Headerion } from 'pages/components'
import { useHistory } from 'react-router-dom'

const index = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory()
    const handleBack = () => {
        history.goBack()
    }
    return (
        <Headerion>
            <div className=" flex flex-col h-screen justify-around items-center">
                <button onClick={handleBack} className="z-10 focus:outline-none outline-none w-full overflow-visible top-10 left-0 text-white text-l lg:text-5xl  bg-ocean px-4" type="button">THESE PRETZELS ARE MAKING ME THIRSTY!</button>



                <History />

            </div>
        </Headerion>

    )
}

export default index
