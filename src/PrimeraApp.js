import React from 'react';
import PropTypes from 'prop-types';
;



export const PrimeraApp = ({data, subtitle = 'Subtitle'}) => {

    return (
        <>
            <h1>{data}</h1>
            {/* <pre>{ JSON.stringify(saludo, null, 3)}</pre> */}
            <p>{subtitle}</p>
        </>
    );
};

PrimeraApp.propTypes = {
    data: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
    subtitle: 'Default Subtitle',
}