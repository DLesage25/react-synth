// You can change almost anything in this file, it only affects what logger displays.
// No problem if you commit it.
import { createLogger } from 'redux-logger';
// import Types from 'Actions/types';

const actions: any[] = []; // hardcode any actions you like to always log here, eg ['ACTION1','ACTION2']
const showAll = true; // true to show all actions

const includeAlways = (actionType: any) =>
    actions.includes(actionType) || showAll;

export default createLogger({
    level: 'info',
    collapsed: true,
    predicate: (getState: any, action: any) => includeAlways(action.type),
});
