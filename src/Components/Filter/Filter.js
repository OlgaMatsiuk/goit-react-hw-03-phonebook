import React from 'react';
import styles from './filter.module.css'

const Filter = ({ value, onChange }) => (
    <label htmlFor="filter" className={styles.filterLabel}>Find contacts by name
        <input
            className={styles.filterInput}
            type="text"
            value={value}
            onChange={onChange}
            id="filter"
        />
    </label>
);

export default Filter;