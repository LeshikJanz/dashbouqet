const initialState = [
  'My home playlist',
  'My work playlist'
];


export default function playlist(state = initialState, action = "") {  //reducer
  if (action.type === 'ADD_PLAYLIST') {
    return [
      ...state,
      action.payload
    ]
    //return [  //возвращаем новый массив
    //    ...state,  //оператор spread, т.е. данные из св-ва state берутся старые
    //    action.payload //Т.е. добавляем знач в массив и возвращаем массив(уже с новыми и старыми данными)
    //]
  }else if(action.type === 'DELETE_PLAYLIST'){
    return state;
  }
  return state;
}