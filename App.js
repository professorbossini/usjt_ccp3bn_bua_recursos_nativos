import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import LugaresNavigator from './navegacao/LugaresNavigator';
import lugaresReducer from './store/lugares-reducer';
import { init } from './helpers/db';


init()
  .then((resultado) => {
    console.log("Deu certo a criação da base: " + JSON.stringify(resultado));
  })
  .catch((err) => {
    console.log("Falhou a criação da base: " + JSON.stringify(err));
  });

const rootReducer = combineReducers({
  lugares: lugaresReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default function App() {

  return (
    <Provider store={store}>
      <LugaresNavigator />
    </Provider>

  );
}


