import React from 'react';
import styles from './alert.module.css'


const Alert = (props) => {

    const {
        title ,
        message
    } = props

    return (
        <div>
           <h4 className={styles.test}>{title}</h4>
            <p>{message}</p>
        </div>
    );
};

export default Alert;