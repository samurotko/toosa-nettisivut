import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import App from './App'
import "./index.css";

import ilmoReducer from "./komponentit/ilmoReducer"
import notificationReducer from "./komponentit/notificationReducer"

const reducer = combineReducers({
  ilmo: ilmoReducer,
  notifications: notificationReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
  )

  console.log("state is now: ",store.getState())

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
  ,document.getElementById('root')
)