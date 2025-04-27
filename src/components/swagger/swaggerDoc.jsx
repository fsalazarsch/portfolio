import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerDoc = () => {
    return (
        <div className="main-wrapper">
            <SwaggerUI url="./assets/swagger.json" />
        </div>
    );
};

export default SwaggerDoc;
