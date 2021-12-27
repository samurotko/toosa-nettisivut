import React from 'react';
import styled from 'styled-components';
import fimlab from './fimlablogo.png';
import ge from './geblue.png';
import merkkim from './merkkim.png';
import "../index.css";


 

// yhteinen kapeampi alue textille ja laatikolle
const ContentBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin:0;

`;

// texti sponssien viereen
const SponssiText = styled.div`
    font-size: 50px;
    font-family: 'East Sea Dokdo', cursive;
    text-shadow: 2px 2px 4px #564750;
    font-weight: 400;
    color: #1C3439;
    text-align: center;

`;


const Sponssi = () => {


    return (
            <> 

                    <SponssiText> 
                        Vuosijuhlaamme ovat olleet mukana mahdollistamassa Fimlab, GE Healthcare ja Merkkimafia.
                    </SponssiText>
                    <div id = "logoframe">
                        <img id = "logo"
                            src={fimlab}
                            alt="fimlab logo"
                            height = '150'
                            />
                        <img id = "logoiv"
                            src={ge}
                            alt="ge logo"
                            height = '150'
                            
                            />
                        <img id = "logoiv"
                            src={merkkim}
                            alt="merkkimafia logo"
                            height = '150'
                            
                            />
                    </div>

            </>
    )
};

export default Sponssi;