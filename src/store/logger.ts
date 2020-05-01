// You can change almost anything in this file, it only affects what logger displays.
// No problem if you commit it.
import { createLogger } from 'redux-logger';
// import Types from 'Actions/types';

const actions = []; // hardcode any actions you like to always log here, eg ['ACTION1','ACTION2']
const showAll = true; // true to show all actions

const includeAlways = (actionType) => actions.includes(actionType) || showAll;
const includeTemporarily = (actionType) =>
    window &&
    window.MY_GLOBAL &&
    window.MY_GLOBAL.log &&
    window.MY_GLOBAL.log.enabled === true &&
    window.MY_GLOBAL.log.actions &&
    window.MY_GLOBAL.log.actions.includes(actionType);

export default createLogger({
    level: 'info',
    collapsed: true,
    predicate: (getState, action) =>
        includeAlways(action.type) || includeTemporarily(action.type),
});
