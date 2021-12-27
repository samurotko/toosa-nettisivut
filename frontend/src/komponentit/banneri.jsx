import React from 'react'
import styled from 'styled-components';


const BannerText = styled.div`
    font-size: 28px;
    font-family: 'IBM Plex Sans Devanagari', sans-serif;
    font-weight: 350;
    opacity: 0.9;
    color: white;
`; // d3def0


const Banneri = () => {

    return (
        <>
            <h1>
                Apoptoosi XVIII
            </h1>
            <BannerText>
            Aalto-yliopiston bioinformaatioteknologian ainejärjestö Inkubio täyttää 18 vuotta vuonna 2022. Tätä merkittävää tapahtumaa juhlistetaan 5.3. Inkubion vuosijuhlissa, Apoptoosi XVIII:ssa. 
            </BannerText>
        </>
    )
};


export default Banneri;