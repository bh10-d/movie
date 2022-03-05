import React from "react";

const Episode = () => {


    return (
        <div>
            <h1>Episode</h1>
            <div className="episode">
                <button className="py-2 px-4 mr-5 text-white rounded-lg bg-red-500 shadow-md hover:bg-red-700">
                    E1
                </button>
                <button className="py-2 px-4 mr-5 text-white rounded-lg bg-red-500 shadow-md hover:bg-red-700">
                    E2
                </button>
                <button className="py-2 px-4 mr-5 text-white rounded-lg bg-red-500 shadow-md hover:bg-red-700">
                    E3
                </button>
                <button className="py-2 px-4 mr-5 text-white rounded-lg bg-red-500 shadow-md hover:bg-red-700">
                    E4
                </button>
            </div>
        </div>
    )
}

export default Episode;