import { take, all, takeEvery, takeLatest, call, put, delay, apply, select, cps, fork, cancel, cancelled, race } from 'redux-saga/effects';


import { actionType } from '../actions';
import { save } from '../actions';

function* defaultTask(payload) {
    yield put(save({ name: 'tong bu1' }));
}

function* task({ type, payload }) {
    yield put(save({ name: payload.name + 'finish' }));
}
export default function* () {
    yield takeLatest(actionType.a5, task);
    yield takeLatest(actionType.a2, defaultTask);
}

