import { createStore, applyMiddleware} from 'redux'
import createSagaMiddleWare from 'redux-saga'
import logger from 'redux-logger'
import todoReducer from './action'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleWare()
const middleWare = [logger,sagaMiddleware]
export const store = createStore(todoReducer,applyMiddleware(...middleWare))

sagaMiddleware.run(rootSaga)
