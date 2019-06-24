import React from 'react';
import PropTypes from 'prop-types';

import './ErrorWrapper.scss';

const ErrorWrapper = ({ message }) => <p className="ErrorMessage">{message}</p>;

ErrorWrapper.defaultProps = {
    message: 'Something Went Wrong!!!'
};

ErrorWrapper.propTypes = {
    message: PropTypes.string
};

export default ErrorWrapper;
