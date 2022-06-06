import React from 'react';
import styled from 'styled-components';

const ButtonDefault = styled.button`
    background-color: var(--terracota);
    padding: 0.25em 3em;
    color: black;
    border: none;
    font-size: 18px;
    margin-top: 1em;

    @media (min-width: 1440px) {
    
    }
    @media (min-width: 1660px) {
   
    }
`; 

export const SubmitButton = ({ onClick, children, type}) => {
    return (
        <ButtonDefault
            type={type}
            onClick={onClick}
        >
            {children}
        </ButtonDefault>
    )
};
