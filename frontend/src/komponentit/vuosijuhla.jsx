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
                            Vuosijuhla
                        </h2>
                    </VujuviikkoHead>
                    <p class = "vjt"> 
                        Vuosijuhla on killan tapahtumista hienoin ja juhlallisin. Inkubion 18. vuosijuhlia vietetään lauantaina 5.3.2022 ja juhlintaa jatketaan silliaamiaisella sunnuntaina 6.3.2022.
                    </p>
                    <p class = "vjt">
                        Juhlat alkavat cocktailtilaisuudella Aalto-yliopiston kandidaattikeskuksen yläaulassa (Otakaari 1, Espoo), jonka jälkeen siirrytään cocktailtilaisuudesta kuljetuksella pääjuhlapaikalle Tommi’s Kitchen & Cateringiin (Upseerinkatu 1-3, Espoo). Pääjuhlan jälkeen ilta jatkuu kuljetuksen kyydittämänä jatkopaikassa X.  
                    </p>
                    <p class = "vjt">
                        Seuraavana päivänä henkistä ja fyysistä hyvinvointia on mahdollista hellittää silliksellä paikassa Y.
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