import "./App.css";
import { connect, useSelector, useDispatch } from "react-redux";
import { changeText, CHANGE_TEXT } from "./redux/actions";

function App() {
  const text = useSelector((state) => state.exampleReducer.text);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h2>Redux - Example</h2>
        <h3>Text = {text}</h3>
        <input
          onChange={(e) =>
            dispatch({ type: CHANGE_TEXT, payload: e.target.value })
          }
        />
      </div>
    </>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     text: state.exampleReducer.text,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeText: (val) => dispatch({ type: CHANGE_TEXT, payload: val }),
//   };
// };

export default App;
