import {combineReducers} from 'redux';
import auth from './auth.reducer';
import tables from './tables.reducer';
import boards from './boards.reducer'; 

const app = combineReducers({
  auth,
  tables,
  boards,
})


export default app