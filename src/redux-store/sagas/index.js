import { watcherGetSaga,watcherAddSaga,watcherUpdateSaga,watcherDeleteSaga } from "./todoSaga";
import {all} from 'redux-saga/effects'

export default function* rootSaga(){
    yield all([
        watcherGetSaga(),
        watcherAddSaga(),
        watcherUpdateSaga(),
        watcherDeleteSaga()
    ])
    console.log('root saga')
}