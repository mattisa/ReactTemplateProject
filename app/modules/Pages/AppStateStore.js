import { default as request } from 'superagent';
import {
    default as mobx,
    observable,
    observe,
    action,
    autorun,
    transaction
} from 'mobx';

class AppStateStore {}

const store = new AppStateStore();
export default store;
