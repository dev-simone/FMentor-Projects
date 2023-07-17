import { ACTIONS } from "../App";

const ButtonDigit = ({ digit, dispatch }) => {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
};
export default ButtonDigit;
