import React from 'react'

function Logo() {
    return (
        <div className="group duration-50 flex items-center space-x-4">
            <div className="px-2 py-3 text-candlelight bg-black">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    stroke="currentColor"
                    viewBox="0 0 126 100"
                    className="h-12"
                >
                    <path
                        d="M110.136-218.5L47.5-118.593h30.024l32.612-53.318 9.318 16.565-12.941 20.706h26.917l9.835 16.047h29.506L110.136-218.5z"
                        transform="translate(-7.5) translate(-40 218.5)"
                    />
                </svg>
            </div>
        </div>
    )
}

export default Logo
