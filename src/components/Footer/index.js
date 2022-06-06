import React from 'react';
import styled from 'styled-components'

const FooterDefault = styled.p`
    width: 100%;
    color: #fff;
    position: absolute;
    bottom: 0em;
    text-align: center;
    background-color: var(--dark-grey);
    font-size: 22px;
`

export const Footer= () => {
    return (
        <>
            <FooterDefault
                className="footer-infos">Developed by &nbsp;
                <a href='https://github.com/Gregisa' target="_blank" rel="noopener noreferrer">
                    Isabela Gregoraci &nbsp;
                </a> 2022
            </FooterDefault>
        </>
    )
}