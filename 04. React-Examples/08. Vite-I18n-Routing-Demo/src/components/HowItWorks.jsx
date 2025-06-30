import { useEffect, useRef } from 'react';
import { useLocation } from '../router/reactRouter';

export default function HowItWorks() {
    const location = useLocation();
    const targetElementRef = useRef(null);
    const currentSectionId = 'how-it-works';

    useEffect(() => {
        const idFromEnteredAnchor = location.hash.slice(1);
        if (idFromEnteredAnchor) {
            const element = targetElementRef.current;
            if (element && idFromEnteredAnchor === currentSectionId) {
                element.focus();
                element.scrollIntoView({
                    behavior: 'smooth',
                    alignToTop: true,
                });
            }
        }
    }, [location.hash]);

    return (
        <section
            id={currentSectionId}
            ref={targetElementRef}
            tabIndex={0}
            className="section"
        >
            <h2>How it works</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                beatae esse officia aspernatur quos, nostrum, iure ipsa magni
                dicta debitis laborum tempora harum minima expedita modi amet
                veritatis ducimus iusto!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                beatae esse officia aspernatur quos, nostrum, iure ipsa magni
                dicta debitis laborum tempora harum minima expedita modi amet
                veritatis ducimus iusto!
            </p>
        </section>
    );
}
