import { createStore } from 'redux'; //импортировали функцию createStore

function playlist(state = []){  //reducer
    return state;
}

const store = createStore(playlist);  //в store будут храниться все данные

console.log(store.getState());