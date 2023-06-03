import { common, act2, act5 } from './action1';
import { act3 } from './action3';
import { act4 } from './action4';
import combineActions from 'redux-action';

export const actionType = {
    'a1': Symbol('a1'),
    'a2': Symbol('a2'),
    'a3': Symbol('a3'),
    'a4': Symbol('a4'),
    'a5': Symbol('a5'),
}

export { common, act2, act5 } from './action1';
export { act3 } from './action3';
export { act4 } from './action4';

export default { common, act2, act3, act4, act5 }