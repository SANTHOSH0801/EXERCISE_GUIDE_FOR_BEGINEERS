import React from 'react'

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-10">
            <div className="container mx-auto flex flex-col items-center gap-4">
                <div className="flex items-center gap-4">
                    <span className="font-semibold text-lg">Social profiles</span>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <img src="../src/assets/facebook.png" alt="Facebook" className="w-8 h-8 rounded-full bg-white p-1 hover:scale-110 transition" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src="../src/assets/instagram.png" alt="Instagram" className="w-8 h-8 rounded-full bg-white p-1 hover:scale-110 transition" />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <img src="../src/assets/twitter.png" alt="Twitter" className="w-8 h-8 rounded-full bg-white p-1 hover:scale-110 transition" />
                    </a>
                </div>
                <div className="text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Fitness Trainer. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer