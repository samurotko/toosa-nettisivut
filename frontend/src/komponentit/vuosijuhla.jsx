import React from 'react'
import styled from 'styled-components';
import maikki from './maikki.png';


const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
`;

const VujuviikkoHead = styled.div`
    padding-bottom: 25px;
    text-shadow: 4px 4px 8px #564750;
`;

const Vuosijuhla = () => {

    return ( <> 
                <ContentBox>
                <VujuviikkoHead>
                        <h2>
                            Vuosijuhlaviikko
                        </h2>
                        </VujuviikkoHead>
                    <p class = "vjt"> 
                        Vuosijuhla on killan tapahtumista hienoin ja juhlallisin. Inkubion 18. vuosijuhlia vietetään lauantaina 5.3.2022 ja juhlintaa jatketaan silliaamiaisella sunnuntaina 6.3.2022. Juhlat alkavat cocktailtilaisuudella *paikassa* osoitteessa *osoite*. Tarjoilujen ja lahjanannon jälkeen siirrytään cocktailtilaisuudesta kuljetuksella pääjuhlapaikalle.
                    </p>
                    <p class = "vjt">
                        Pääjuhlaa vietetään *missä* osoitteessa *osoite*. Pääjuhlan jälkeen ilta jatkuu kuljetuksen vieden juhlavieraat jatkopaikkaan X. Seuraavana päivänä henkistä ja fyysistä hyvinvointia hellitään silliksellä paikassa Y.
                    </p>
                    <p class = "vjt">
                        Vuosijuhla on iltapukujuhla, jossa asuna on frakki tai tumma puku tai pitkä iltapuku. Lisäksi juhlapukuja koristavat akateemiset kunniamerkit.
                    </p>
                    <p class = "vjt">
                        Illalliskortti maksaa opiskelijalle 80 euroa ja valmistuneelle 100 euroa. Tarjoamme tilaisuuden myös tukea vuosijuhlia hintaan 120e. Silliaamiainen kustantaa 15 euroa.
                    </p>
                </ContentBox>
                <ContentBox>
                    <img id = "logo"
                        src={maikki}
                        alt="maikki"
                        height = '180'  
                        />
                </ContentBox>
            </>
    )
};

export default Vuosijuhla;