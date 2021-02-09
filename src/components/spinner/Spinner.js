import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 60px;
`;

const Spinner = () => {
    return (
        <Div>
            <Loader type="Audio" color="#3f51b5" height={80} width={100} />
        </Div>
    );
};
export default Spinner;
