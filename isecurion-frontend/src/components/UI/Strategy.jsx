import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom';

function Strategy(title, onDismiss) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // If running on the server, return null to prevent hydration errors
    if (!mounted) {
        return null;
    }
    return createPortal(
        <div
            // These fixed classes guarantee full screen coverage
            className="fixed inset-0 h-screen w-screen bg-[#304782] z-[99999] flex flex-col items-center justify-center text-white p-4"
        >
            <h1 className="text-4xl font-bold mb-4 animate-pulse">Redirecting...</h1>
            <p className="text-xl text-center">

            </p>
            <button
                onClick={onDismiss}
                className="mt-8 px-6 py-2 border border-white rounded hover:bg-white hover:text-[#304782] transition duration-300"
            >
                Go Back / Close
            </button>
        </div>,
        document.body // This is the target node (the <body> element)
    );
}

export default Strategy