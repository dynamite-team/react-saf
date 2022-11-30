//crear la store de nuestro proyec 
import { createStore, applyMiddleware } from 'redux' 

import { composeWithDevTools } from 'redux-devtools-extension'

//middelewares 
import thunk from 'redux-thunk'


import reducers from './../reducers'

//estado inicial
const initialState = { }

const middleWare = [thunk]

//el primer parametro son los reducers 
const store = createStore(
    reducers, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store;
