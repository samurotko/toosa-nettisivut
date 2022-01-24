import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormGroup,
  FormControl,
  RadioGroup,
  Radio,
  FormLabel,
  FormControlLabel
} from '@material-ui/core'



import { notification } from './notificationReducer'
import { createNew, initializeilmos } from './ilmoReducer'
import getAll from './ilmoService'
import styled from 'styled-components';
import inkubio from './inkubio.png';
import ProgressBar from './progressBar'

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const IlmoHead = styled.div`
    padding-bottom: 25px;
    text-shadow: 4px 4px 8px #3E737D;
`;


const Ilmoittautuminen = () => {

    const [newEtunimi, setNewEtunimi] = useState('') 
    const [newSukunimi, setNewSukunimi] = useState('') 
    const [newSähköposti, setNewSähköposti] = useState('') 
    const [newKilta, setNewKilta] = useState('') 
    const [newAllergia, setNewAllergia] = useState('') 
    const [newPöytäseurue, setNewPöytäseurue] = useState('') 
    const [newAvec, setNewAvec] = useState('') 
    const [newLahja, setNewLahja] = useState('false') 
    const [newSillis, setNewSillis] = useState('false') 
    const [newKiintiö, setNewKiintiö] = useState('') 
    const [newHoli, setNewHoli] = useState('') 
    const [newSukat, setNewSukat] = useState('false') 
    const [newKoko, setNewKoko] = useState('') 
    const [kokoVisible, setKokoVisible] = useState(false)

    //const hideWhenVisible = { display: kokoVisible ? 'none' : '' }
    const showWhenVisible = { display: kokoVisible ? '' : 'none' }

    const dispatch = useDispatch()

    useEffect(() => {
        console.log('initializing')
        dispatch(initializeilmos())
      }, [dispatch])

    const ilmos = useSelector(state => state.ilmo)
    console.log("ilmos",ilmos)

    const addIlmo = (event) => {
        event.preventDefault()
        
        const ilmo = {
            Etunimi: newEtunimi,
            Sukunimi: newSukunimi,
            Sähköposti: newSähköposti,
            Kilta: newKilta,
            Lahja: newLahja === 'true' ? true : false,
            Allergiat: newAllergia,
            Pöytäseurue: newPöytäseurue,
            Sillis: newSillis === 'true' ? true : false,
            Kiintiö: newKiintiö,
            Holi: newHoli,
            Avec: newAvec,
            Sukat: {OttaakoSukat: newSukat=== 'true' ? true : false, Koko: newKoko}
        }
        //console.log("sending ilmo",ilmo)
        
        dispatch(createNew(ilmo))
        
        setNewSukunimi('')
        setNewEtunimi('')
        setNewSähköposti('')
        setNewKilta('')
        setNewAllergia('')
        setNewPöytäseurue('')
        setNewAvec('')
        setNewLahja('false')
        setNewSillis('false')
        setNewKiintiö('')
        setNewHoli('')
        setNewSukat('false')
        setNewKoko('')

        //console.log("forms emptied")
        //alert(`Ilmoittautuminen onnistui!`)
        //dispatch(notification('green', `Ilmoittautuminen onnistui!` ,5))
           // setTimeout(() => {
            // props.setNotification(null)
           // }, 5000)
           
           
    }

    


    const handleEtunimi = (event) => {
        //console.log('handleEtunimi',event.target.value)
        setNewEtunimi(event.target.value)
    }

    const handleSukunimi = (event) => {
        //console.log('handleSukunimi',event.target.value)
        setNewSukunimi(event.target.value)
    }

    const handleSähköposti = (event) => {
        //console.log('handleSähköposti',event.target.value)
        setNewSähköposti(event.target.value)
    }

    const handleKilta = (event) => {
        //console.log('handleKilta',event.target.value)
        setNewKilta(event.target.value)
    }

    const handleAllergia = (event) => {
        //console.log('handleAllergiat',event.target.value)
        setNewAllergia(event.target.value)
    }

    const handlePöytäseurue = (event) => {
        //console.log('handlePöytäseurue',event.target.value)
        setNewPöytäseurue(event.target.value)
    }

    const handleAvec = (event) => {
        //console.log('handleAvec',event.target.value)
        setNewAvec(event.target.value)
    }

    const handleLahja = (event) => {
        //console.log('handleLahja',event.target.value)
        setNewLahja(event.target.value)
    }

    const handleSillis = (event) => {
        //console.log('handleSillis',event.target.value)
        setNewSillis(event.target.value)
    }

    const handleKiintiö = (event) => {
        //console.log('handleKiintiö',event.target.value)
        setNewKiintiö(event.target.value)
    }

    const handleHoli = (event) => {
        //console.log('handleHoli',event.target.value)
        setNewHoli(event.target.value)
    }

    const handleSukat = (event) => {
        //console.log('handleSukat',event.target.value)
        setNewSukat(event.target.value)
        if(event.target.value === 'true'){
            setKokoVisible(true)
        }else{
            setKokoVisible(false)
        }
    }

    const handleKoko = (event) => {
        //console.log('handleKoko',event.target.value)
        setNewKoko(event.target.value)
        
    }



    if(ilmos >=150){
        return ( <> 
            <ContentBox>
                <IlmoHead>
                <h2>Ilmoittautuminen</h2>
                </IlmoHead>
                
                <p class = "vvt">
                    Nykyisen pandemiatilanteen vuoksi saatamme joutua siirtämään vuosijuhlia. Mahdollisesta siirrosta tiedotetaan sähköpostitse. Annamme osallistujille mahdollisuuden peruuttaa osallistumisensa, mikäli vuosijuhlia siirretään.
                </p>
                <p class = "vvt">
                    Ilmoittautumisesta ei tule erillistä vahvistusta sähköpostiin. Jos haluatte peruuttaa ilmoittautumisenne ottakaa yhteyttä vuosijuhlatoimikuntaan.
                </p>
            
     
          
          <p class = "vvt">Ilmoittautuminen on täynnä, voit vielä ilmoittautua varasijoille</p>
    
          <ProgressBar  bgcolor={"#4a7077"} completed={ilmos} />
            
          <p class = "vvt">Ilmoittaudu:</p>
            
            <form onSubmit={addIlmo}>
            <div>
            <FormGroup>
            <TextField label="Etunimi" value={newEtunimi} 
                onChange={handleEtunimi}
                required/>
            </FormGroup>
            </div>
            <div>
            <FormGroup>
            <TextField label="Sukunimi" value={newSukunimi}
                onChange={handleSukunimi}
                required/>
            </FormGroup>
            </div>
            <div >
            <FormGroup>
            <TextField label="Sähköposti" value={newSähköposti}
                onChange={handleSähköposti}
                required/>
            </FormGroup>
            </div>
            <div>
            <FormGroup>
            <TextField label="Kilta/Edustamasi taho" value={newKilta}
                onChange={handleKilta}/>
            </FormGroup>
            </div>
            <div>
            <FormLabel component="legend">Jätänkö lahjan</FormLabel>
            <RadioGroup
                row
                aria-label="lahja"
                name="lahja"
                value={newLahja}
                onChange={handleLahja}
            >
                <FormControlLabel value='true' control={<Radio color="default" size="small"/>} label="Kyllä" />
                <FormControlLabel value='false' control={<Radio color="default" size="small"/>} label="Ei" />
            </RadioGroup>
            </div>
            <div>
            <FormGroup>
            <TextField label="Erityisruokavaliot" value={newAllergia}
                onChange={handleAllergia}/>
            </FormGroup>
            </div>
            <div>
            <FormGroup>
            <TextField label="Pöytäseuruetoive" value={newPöytäseurue}
                onChange={handlePöytäseurue}/>
            </FormGroup>
            </div>
            <div>
            <FormLabel component="legend">Sillis?</FormLabel>
            <RadioGroup
                row
                aria-label="sillis"
                name="sillis"
                value={newSillis}
                onChange={handleSillis}
            >
                <FormControlLabel value='true' control={<Radio color="default" size="small"/>} label="Kyllä" />
                <FormControlLabel value='false' control={<Radio color="default" size="small"/>} label="Ei" />
            </RadioGroup>
            </div>
            <div>
            
            <FormLabel>Kiintiö</FormLabel>
            <FormGroup>
            <Select
                value={newKiintiö}
                label="Kiintiö"
                onChange={handleKiintiö}
                required
            >
                <MenuItem value={"opiskelija"}>Opiskelija</MenuItem>
                <MenuItem value={"alumni"}>Alumni</MenuItem>
                <MenuItem value={"tukija"}>Tukija</MenuItem>
            </Select>
            </FormGroup>
            </div>
            <div>
            
            <FormLabel>Alkoholia?</FormLabel>
            <FormGroup>
            <Select
                value={newHoli}
                label="Holi"
                onChange={handleHoli}
                required
            >
                <MenuItem value={"holi"}>Holillinen</MenuItem>
                <MenuItem value={"väh. holi"}>Ilman väkeviä</MenuItem>
                <MenuItem value={"holiton"}>Alkoholiton</MenuItem>
            </Select>
            </FormGroup>
            </div>
            <div>
            
            <FormLabel>Avec</FormLabel>
            <FormGroup>
            <Select
                value={newAvec}
                label="Avec"
                onChange={handleAvec}
                required
            >
                <MenuItem value={"jallu"}>Jallu</MenuItem>
                <MenuItem value={"punssi"}>Punssi</MenuItem>
                <MenuItem value={"holiton"}>Alkoholiton</MenuItem>
            </Select>
            </FormGroup>
            </div>
            
            <div>
            
            <FormLabel component="legend">Sukat?</FormLabel>
            <i>Sukkia riittää 75:lle ensimmäiselle, hinta 7 euroa.</i>
            <RadioGroup
                row
                aria-label="sukat"
                name="sukat"
                value={newSukat}
                onChange={handleSukat}
            >
                <FormControlLabel value='true' control={<Radio color="default" size="small"/>} label="Kyllä" />
                <FormControlLabel value='false' control={<Radio color="default" size="small"/>} label="Ei" />
            </RadioGroup>
            </div>
            <div style={showWhenVisible}>
            <FormLabel component="legend">Koko</FormLabel>
            <RadioGroup
                row
                aria-label="koko"
                name="koko"
                value={newKoko}
                onChange={handleKoko}
            >
                <FormControlLabel value='36-39' control={<Radio color="default" size="small"/>} label="36-39" />
                <FormControlLabel value='40-43' control={<Radio color="default" size="small"/>} label="40-43" />
            </RadioGroup>
            </div>
            <div>
              <Button variant="contained" color="primary" type="submit">
              ilmoittaudu
              </Button>
            </div>
            </form>
            </ContentBox>
            <img id = "logoink"
                src={inkubio}
                alt="inkubio logo"
                height = '100'  
                />
        </>)
    }else{
    return ( <> 
        <ContentBox>
            <IlmoHead>
            <h2>Ilmoittautuminen</h2>
            </IlmoHead>
            
            <p class = "vvt">
                Nykyisen pandemiatilanteen vuoksi saatamme joutua siirtämään vuosijuhlia. Mahdollisesta siirrosta tiedotetaan sähköpostitse. *Annamme osallistujille mahdollisuuden peruuttaa osallistumisensa, mikäli vuosijuhlia siirretään.
            </p>
            <p class = "vvt">
                Ilmoittautumisesta ei tule erillistä vahvistusta sähköpostiin. Jos haluatte peruuttaa ilmoittautumisenne ottakaa yhteyttä vuosijuhlatoimikuntaan.
            </p>

            <p class = "vvt">Ilmoittautuneita:</p>
    
            <ProgressBar  bgcolor={"#4a7077"} completed={ilmos} />

            <p class = "vvt">Ilmoittaudu:</p>
        
        <form onSubmit={addIlmo}>
        <div>
        <FormGroup>
        <TextField label="Etunimi" value={newEtunimi} 
            onChange={handleEtunimi}
            required/>
        </FormGroup>
        </div>
        <div>
        <FormGroup>
        <TextField label="Sukunimi" value={newSukunimi}
            onChange={handleSukunimi}
            required/>
        </FormGroup>
        </div>
        <div >
        <FormGroup>
        <TextField label="Sähköposti" value={newSähköposti}
            onChange={handleSähköposti}
            required/>
        </FormGroup>
        </div>
        <div>
        <FormGroup>
        <TextField label="Kilta/Edustamasi taho" value={newKilta}
            onChange={handleKilta}/>
        </FormGroup>
        </div>
        <div>
        <FormLabel component="legend">Jätänkö lahjan</FormLabel>
        <RadioGroup
            row
            aria-label="lahja"
            name="lahja"
            value={newLahja}
            onChange={handleLahja}
        >
            <FormControlLabel value='true' control={<Radio color="default" size="small"/>} label="Kyllä" />
            <FormControlLabel value='false' control={<Radio color="default" size="small"/>} label="Ei" />
        </RadioGroup>
        </div>
        <div>
        <FormGroup>
        <TextField label="Erityisruokavaliot" value={newAllergia}
            onChange={handleAllergia}/>
        </FormGroup>
        </div>
        <div>
        <FormGroup>
        <TextField label="Pöytäseuruetoive" value={newPöytäseurue}
            onChange={handlePöytäseurue}/>
        </FormGroup>
        </div>
        <div>
        <FormLabel component="legend">Sillis?</FormLabel>
        <RadioGroup
            row
            aria-label="sillis"
            name="sillis"
            value={newSillis}
            onChange={handleSillis}
        >
            <FormControlLabel value='true' control={<Radio color="default" size="small"/>} label="Kyllä" />
            <FormControlLabel value='false' control={<Radio color="default" size="small"/>} label="Ei" />
        </RadioGroup>
        </div>
        <div>
        
        <FormLabel>Kiintiö</FormLabel>
        <FormGroup>
        <Select
            value={newKiintiö}
            label="Kiintiö"
            onChange={handleKiintiö}
            required
        >
            <MenuItem value={"opiskelija"}>Opiskelija</MenuItem>
            <MenuItem value={"alumni"}>Alumni</MenuItem>
            <MenuItem value={"tukija"}>Tukija</MenuItem>
        </Select>
        </FormGroup>
        </div>
        <div>
        
        <FormLabel>Alkoholia?</FormLabel>
        <FormGroup>
        <Select
            value={newHoli}
            label="Holi"
            onChange={handleHoli}
            required
        >
            <MenuItem value={"holi"}>Holillinen</MenuItem>
            <MenuItem value={"väh. holi"}>Ilman väkeviä</MenuItem>
            <MenuItem value={"holiton"}>Alkoholiton</MenuItem>
        </Select>
        </FormGroup>
        </div>
        <div>
        
        <FormLabel>Avec</FormLabel>
        <FormGroup>
        <Select
            value={newAvec}
            label="Avec"
            onChange={handleAvec}
            required
        >
            <MenuItem value={"jallu"}>Jallu</MenuItem>
            <MenuItem value={"punssi"}>Punssi</MenuItem>
            <MenuItem value={"holiton"}>Alkoholiton</MenuItem>
        </Select>
        </FormGroup>
        </div>
        
        <div>
        
        <FormLabel component="legend">Sukat?</FormLabel>
        <i>Sukkia riittää 75:lle ensimmäiselle, hinta 7 euroa.</i>
        <RadioGroup
            row
            aria-label="sukat"
            name="sukat"
            value={newSukat}
            onChange={handleSukat}
        >
            <FormControlLabel value='true' control={<Radio color="default" size="small"/>} label="Kyllä" />
            <FormControlLabel value='false' control={<Radio color="default" size="small"/>} label="Ei" />
        </RadioGroup>
        </div>
        <div style={showWhenVisible}>
        <FormLabel component="legend">Koko</FormLabel>
        <RadioGroup
            row
            aria-label="koko"
            name="koko"
            value={newKoko}
            onChange={handleKoko}
        >
            <FormControlLabel value='36-39' control={<Radio color="default" size="small"/>} label="36-39" />
            <FormControlLabel value='40-43' control={<Radio color="default" size="small"/>} label="40-43" />
        </RadioGroup>
        </div>
        <div>
          <Button variant="contained" color="primary" type="submit">
          ilmoittaudu
          </Button>
        </div>
        </form>
        </ContentBox>
        <img id = "logoink"
            src={inkubio}
            alt="inkubio logo"
            height = '100'  
            />
    </>
    )
    }
};

export default Ilmoittautuminen;






