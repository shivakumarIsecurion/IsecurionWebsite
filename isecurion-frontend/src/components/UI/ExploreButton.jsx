import React from 'react'

function ExploreButton({ onClick, className }) {
    return (
        <button
            onClick={onClick}
            className={`relative h-auto overflow-hidden group w-70  text-center py-3  rounded-full font-semibold text-white bg-[#3BC6E7] hover:cursor-pointer ${className}`}
        >
            <span className="relative z-10">EXPLORE CAREERS ISECURION </span>

            {/* hover color reveal diagonal from top left */}
            <span className="absolute inset-0 bg-[#25B8CB] rounded-full
        origin-top-left scale-0 group-hover:scale-100
        transition-transform duration-600 ease-out">
            </span>
        </button>
    )
}

export default ExploreButton