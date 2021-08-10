import { watcherGetSaga,watcherAddSaga,watcherUpdateSaga } from "./todoSaga";
import {all} from 'redux-saga/effects'

export default function* rootSaga(){
    yield all([
        watcherGetSaga(),
        watcherAddSaga(),
        watcherUpdateSaga()
    ])
    console.log('root saga')
}