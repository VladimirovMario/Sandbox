import { useState, useEffect } from 'react';

function GlobalLoader({ isLoading }) {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        let timeout;

        if (isLoading) {
            // Show the loader immediately when navigation starts
            setVisible(true);
        } else {
            // Wait a bit before hiding the loader to avoid flickering
            timeout = setTimeout(() => {
                setVisible(false);
            }, 500);
        }

        // Clear timeout if component unmounts or isLoading changes
        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [isLoading]);

    return (
        // Conditionally render the loader only when visible
        isVisible && (
            <div className={`global-loader ${isLoading ? 'is-loading' : ''}`}>
                {/* Fills the top of the screen with a sliding animation */}
                <div className="global-loader-fill" />
            </div>
        )
    );
}

export default GlobalLoader;
