import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; //импортировали функцию createStore

import App from './src/components/App';


const initialState = [
    'Smells like spirit',
    'Enter Sandman'
]

function playlist(state = initialState, action = "") {  //reducer
    if (action.type === 'ADD_TRACK') {
        return [  //возвращаем новый массив
            ...state,  //оператор spread, т.е. данные из св-ва state берутся старые
            action.payload //Т.е. добавляем знач в массив и возвращаем массив(уже с новыми и старыми данными)
        ]
    }
    return state;
}

const store = createStore(playlist);  //в store будут храниться все данные

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
document.getElementById('root')
);

const addTrackBtn = document.querySelector('.addClass');  //находим класс addTrack
addTrackBtn.addEventListener('click', () => {
    let trackName = document.querySelectorAll('.trackInput')[0].value;
    store.dispatch({ type: 'ADD_TRACK', payload: trackName });
    document.querySelector('.trackInput').value = "";
})

////console.log(store.getState());  //выведет текущее состояние
//
//store.subscribe(() => {  //подписываемся на изменения в store.
//    console.log('subscribe', store.getState()); //когда store изменится - получим сообщение
//
//    const list = document.querySelector('.list');
//    list.innerHTML = '';
//    store.getState().forEach(track => {
//        const li = document.createElement('li');
//        li.textContent = track;
//        list.append(li);
//    });
//
//    document.querySelector('.trackInput').value = "";
//})
//
///*dispatch - функция store для изменения его состояния
//* type - имя обработчика (имя action)
//* payload - данные, кот. передаются с action
//* */
////store.dispatch({ type: 'ADD_TRACK', payload: 'Smells like spirit' });
////store.dispatch({ type: 'ADD_TRACK', payload: 'Enter smth' });
//
