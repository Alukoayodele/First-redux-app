
// const DEFAULT_STATE = {
//   face:"<&_&>"
// };
// Happy : "¯\_(ツ)_/¯"
// Sad : "《〠_〠》"
// Angry : "(◡‿◡✿)"
// Confused : "(｡:hearts:‿:hearts:｡)"
// const store = Redux.createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// const face = document.getElementById('face');
// function render() {
//   face.innerText = store.getState().face.toString();
// }
// render();
// store.subscribe(render);


const facePrint = document.getElementById('face');

function face (state = "<&_&>", action) {
  switch (action.type) {
    case 'Happy':
      return "¯\_(ツ)_/¯"
      case 'Sad':
        return "《〠_〠》"
        case 'Angry':
        return "(◡‿◡✿)"
        case 'Confused':
          return  "(｡:hearts:‿:hearts:｡)"
          default:
            return state
  }
}

const store = Redux.createStore(face);

function render() {
  facePrint.innerHTML = store.getState().toString()
}

render();
store.subscribe(render);


document.getElementById('happy').addEventListener('click', function(){
  store.dispatch({type: 'Happy'})
})
document.getElementById('sad').addEventListener('click', function(){
  store.dispatch({type: 'Sad'})
})
document.getElementById('angry').addEventListener('click', function(){
  store.dispatch({type: 'Angry'})
})
document.getElementById('confused').addEventListener('click', function(){
  store.dispatch({type: 'Confused'})
})
