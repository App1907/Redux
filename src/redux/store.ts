import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import cartReducer from './reducers/cartReducer';
import cartSaga from './saga/cartSaga';
import { all } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  cart: cartReducer
});

function* rootSaga() {
  yield all([cartSaga()]);
}

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
