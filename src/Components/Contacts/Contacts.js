import React from 'react';
import styles from './contacts.module.css'

const Contacts = ({ list,  onDeleteContact}) => (
    <>
        
        <ul className={styles.list}>
            {list.map(({number, name}) => (
                <li key={number} className={styles.listItem}>
                    <p className={styles.contactName}>{name}: {number}</p>
                    <button className={styles.contactBtn} onClick={() => onDeleteContact(number)}>Delete</button>
                </li>
            ))}
        </ul>
    </>
);

export default Contacts;