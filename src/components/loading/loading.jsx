import React from 'react';
import {Box, CircularProgress} from "@mui/material";

const Loading = (props) => {

    const {
        styles
    } = props

    return (
        <Box style={styles}>
            <CircularProgress color="secondary" />
        </Box>
    );
};

export default Loading;