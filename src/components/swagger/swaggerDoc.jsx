import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import { useState, useEffect } from 'react';

const SwaggerDoc = () => {
    const [swaggerUrl, setSwaggerUrl] = useState(null);

    useEffect(() => {
        const lang = localStorage.getItem('language') || 'en';
        setSwaggerUrl(`./assets/swagger-${lang}.json`);
    }, []);

    if (!swaggerUrl) return <p>Loading...</p>;

    return (
        <div className="main-wrapper">
            <SwaggerUI url={swaggerUrl} />
        </div>
    );
};

export default SwaggerDoc;