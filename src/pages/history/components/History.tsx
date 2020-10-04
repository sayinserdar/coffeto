import React from 'react'

const History = () => {
    const keys: any[] = Object.keys(localStorage)
    const dates: string[] = keys.filter((key: string) => key.substring(0, 16) === 'COFFETO-HISTORY-')
    return (



        <div style={{ height: "80%" }} className="overflow-scroll w-full flex flex-col justify-center items-center" >
            {dates.map(date => {
                const counter: any = JSON.parse(localStorage.getItem(date) || "{counter:0}")?.counter || 0;
                return (<div style={{ width: "60%" }} className="flex justify-between items-center bg-ocean rounded shadow-xl p-4 mb-12" key={date}>

                    <div className="text-white">{date.substring(16)}</div>
                    <div className="text-white">
                        {counter}
                    </div>

                </div >)
            }
            )
            }
        </div>
    );
}

export default History
