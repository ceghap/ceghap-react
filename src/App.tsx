import React from 'react'
import Logo from './components/Logo'

function App() {
    return (
        // eslint-disable-next-line max-len
        <div className="container p-4 space-y-8 md:px-32 md:pt-28 md:max-w-4xl md:space-y-16">
            <div className="text-white">
                <Logo />
            </div>

            <div className="space-y-8">
                <p className="text-2xl">
                    <span className="font-bold">Ceghap</span> is a full-stack
                    developer based in Penang, Malaysia. He love building app
                    and exploring newer technology in his spare time.
                </p>
                <p className="text-2xl">
                    He is currently in love with{' '}
                    <span className="font-bold border-b-2 border-black">
                        Node.js
                    </span>{' '}
                    and{' '}
                    <span className="font-bold border-b-2 border-black">
                        React.js
                    </span>{' '}
                    .
                </p>
                <p className="text-2xl">
                    This website is proof of his existence. Kind of.
                </p>
            </div>

            <div className="flex space-x-8">
                <a href="https://twitter.com/ceghap">
                    <img
                        className="w-10"
                        alt="Twitter"
                        src="/images/logo-twitter.svg"
                    />
                </a>
                <a href="https://github.com/ceghap">
                    <img
                        className="w-10"
                        alt="Github"
                        src="/images/logo-github.svg"
                    />
                </a>
                <a href="https://dribbble.com/ceghap">
                    <img
                        className="w-10"
                        alt="dribbble"
                        src="/images/logo-dribbble.svg"
                    />
                </a>
            </div>
            <p className="text-xs text-gray-400 fixed bottom-4 ">
                © {new Date().getFullYear()} Ceghap
            </p>
        </div>
    )
}

export default App
