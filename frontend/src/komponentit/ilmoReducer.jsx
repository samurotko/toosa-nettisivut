import ilmoService from './ilmoService'


export const createNew = (ilmo) => {
  return async dispatch => {
      console.log("creating new ilmo")
    const newIlmo = await ilmoService.create(ilmo)
    dispatch({
      type: 'NEW_ILMO',
      data: newIlmo,
    })
  }
  
}




export const initializeilmos = () => {
  
  return async dispatch => {
      console.log('initalizeilmos')
    const allIlmos = await ilmoService.getAll()
    dispatch({
      type: 'INIT_ILMOS',
      data: allIlmos,
    })
  }
}



//const initialState = anecdotesAtStart.map(asObject)

const ilmoReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type){

    case 'NEW_ILMO':
      console.log('case new, state is',state)
      console.log('action.data is',action.data)
      return [...state, action.data]


    case 'INIT_ILMOS': {
      console.log('initing',action.data)
      return action.data
    }
    

    default: 
      return state
  }
  
}

export default ilmoReducer