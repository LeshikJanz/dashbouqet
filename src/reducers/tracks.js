const initialState = [
    'Smells like spirit',
    'Enter Sandman'
  ]


export default function playlist(state = initialState, action = "") {  //reducer
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ]
    //return [  //возвращаем новый массив
    //    ...state,  //оператор spread, т.е. данные из св-ва state берутся старые
    //    action.payload //Т.е. добавляем знач в массив и возвращаем массив(уже с новыми и старыми данными)
    //]
  }else if(action.type === 'DELETE_TRACK'){
    return state;
  }
  return state;
}