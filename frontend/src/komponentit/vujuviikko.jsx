import React from 'react'
import styled from 'styled-components';


// yhteinen kapeampi alue textille ja laatikolle
const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const VujuviikkoHead = styled.div`
    padding-bottom: 25px;
    text-shadow: 4px 4px 8px #3E737D;
`;


const Vujuvuosi = () => {

    // linkki: teksti, nimi: teksti, pvm: teksti
    const VujuviikkoLinkki = (linkki, nimi, pvm) => {
        return <a id = "tapahtumalinkki" href ={linkki} >
            {pvm} 
            {nimi}
            </a>
    }

    return (
            <> 
                <ContentBox>
                    <VujuviikkoHead>
                        <h2>
                            Vuosijuhlaviikko
                        </h2>
                        </VujuviikkoHead>
                    <p class = "vvt">
                    Inkubio 18 -juhlahumua on havaittavissa jo useissa tapahtumissa ennen itse vuosijuhlaa. Heittäydy juhlatunnelmaan ja osallistu vujuviikon täyttäviin perinteikkäisiin aktiviteetteihin.
                    </p>
                </ContentBox>
                <ContentBox>
                    <div id = "tapahtumalista">
                        {VujuviikkoLinkki("https://www.inkubio.fi/ilmo/event/144", "Tapa- ja Tanssikoulutus", "2.3.2022\n")}
                        {VujuviikkoLinkki("https://www.inkubio.fi/ilmo/event/145", "Krokejatkot", "3.3.2022\n")}
                        {VujuviikkoLinkki("https://www.inkubio.fi/ilmo/event/146", "Virpin läpilaulanta", "4.3.2022\n")}
                        {VujuviikkoLinkki("https://www.inkubio.fi/etusivu/", "Apoptoosi XVIII", "5.3.2022\n")}
                        {VujuviikkoLinkki("https://www.inkubio.fi/ilmo/event/147", "Nekroosi", "5.3.2022\n")}
                    </div>
                </ContentBox>
            </>
    )
};

export default Vujuvuosi;