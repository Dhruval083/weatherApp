import React from 'react';
import PropTypes from 'prop-types';

import Icon from './Icon';
import './SearchWrapper.scss';

const SearchWrapper = ({ onClick, onChange, searchText }) => (
    <div className="SearchWrapper">
        <label className="SearchWrapper__location nonvisible" htmlFor="SearchWrapper__text">Location</label>

        <input
        className="SearchWrapper__text"
        id="SearchWrapper__text"
        onChange={onChange}
        onKeyDown={onChange}
        value={searchText}
        type="text"
        />

        <button className="SearchWrapper__button" onClick={onClick}>
        <Icon />
        <span className="nonvisible">Search</span>
        </button>
    </div>
);

SearchWrapper.propTypes = {
    onClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    searchText: PropTypes.string.isRequired
};

export default SearchWrapper;
