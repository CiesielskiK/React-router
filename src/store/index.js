import { createStore } from 'redux';
import reducers from '../reducers/index.js';
import DevTools from '../DevTools';


const store = createStore(
  reducers,
  DevTools.instrument()
);

export default store;
