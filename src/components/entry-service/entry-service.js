import React from 'react';

import "./entry-service.styles.css"

const EntryService = ({ title, content}) => (
    <div className="service">
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
)

export default EntryService