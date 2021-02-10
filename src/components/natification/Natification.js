import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    height: 80px;
    background-color: tomato;
    position: absolute;
    border-radius: 5px;
    top: 90px;
    right: 190px;
    opacity: 0.5;
    p {
        font-size: 25px;
        padding: 10px;
        text-align: center;
    }
`;

export const Empty = () => {
    return (
        <Div>
            <p>ALL FIELDS MUST BE FILLED!</p>
        </Div>
    );
};
export const Used = () => {
    return (
        <Div>
            <p>IS ALREADY IN USE!</p>
        </Div>
    );
};
export const NoticeError = () => {
    return (
        <Div>
            <p>SOMETHING WRONG!</p>
        </Div>
    );
};
