import React from 'react';
import { Spinner } from 'reactstrap';

import './Loader.css';

export default function Loader() {
    return (
        <div className="app-loader">
            <div className="app-loader-spinner">
                <Spinner style={{ width: '3rem', height: '3rem' }} />
            </div>
        </div>
    );
}