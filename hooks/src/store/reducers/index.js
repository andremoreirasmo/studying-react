export function reducer(state, action) {
 switch (action.type) {
   case "number_add2":
     return { ...state, number: state.number + 2 };
   case "login":
     return { ...state, user: { name: action.payload } };
   case "number_multiplyBy7":
     return { ...state, number: state.number * 7 };
   case "number_divideBy25":
     return { ...state, number: state.number / 25 };
   case "number_parseInt":
     return { ...state, number: parseInt(state.number) };
   case "number_add":
     return { ...state, number: state.number + action.payload };
   default:
     return state;
 }
}
