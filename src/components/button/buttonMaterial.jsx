import React from 'react';
import Button from '@mui/material/Button';

const   ButtonMaterial = (props) => {

    const {
        text,
        onClick
    } = props

    const styles = {
        width:'220px' ,
        padding: '15px',
    }

    return (
        <Button style={styles}
                color="secondary"
                onClick={onClick}
        >
            {text}
        </Button>
    );
};

export default ButtonMaterial;