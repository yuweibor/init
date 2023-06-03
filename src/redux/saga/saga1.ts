import { take, all, takeEvery, takeLatest, call, put, delay, apply, select, cps, fork, cancel, cancelled, race } from 'redux-saga/effects';


import { actionType } from '../actions';
import { common } from '../actions';
function* task({ type, payload }) {
    yield delay(2000);
    yield put(common({ name: payload.name + 'finish' }));
}
export default function* () {
    yield takeLatest(actionType.a5, task);
}

