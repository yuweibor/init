import { act1 } from './action1';
import { act2 } from './action2';
import { act3 } from './action3';
import { act4 } from './action4';
import { act5 } from './action5';

export const actionType = {
    'a1': Symbol('a1'),
    'a2': Symbol('a2'),
    'a3': Symbol('a3'),
    'a4': Symbol('a4'),
    'a5': Symbol('a5'),
}

export default { act1, act2, act3, act4, act5 }