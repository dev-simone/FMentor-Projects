import { useReducer } from "react";
import ButtonDigit from "./components/ButtonDigit";
import ButtonOperation from "./components/ButtonOperation";
import Navbar from "./components/Navbar";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  RESET: "reset",
  DEL_DIGIT: "del-digit",
  EVALUATE: "EVALUATE",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite)
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      if (payload.digit === "0" && state.currentOperand === "0") return state;
      if (payload.digit === "." && state.currentOperand == null) return state;
      if (payload.digit === "." && state.currentOperand.includes("."))
        return state;
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null)
        return state;
      if (state.currentOperand == null)
        return {
          ...state,
          operation: payload.operation,
        };
      if (state.previousOperand == null)
        return {
          ...state,
          previousOperand: state.currentOperand,
          operation: payload.operation,
          currentOperand: null,
        };
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };

    case ACTIONS.EVALUATE:
      if (state.currentOperand == null || state.previousOperand == null)
        return state;
      return {
        ...state,
        currentOperand: evaluate(state),
        previousOperand: null,
        operation: null,
        overwrite: true,
      };

    case ACTIONS.DEL_DIGIT:
      if (state.overwrite)
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        };
      if (state.currentOperand == null) return state;
      if (state.currentOperand.length === 1)
        return { ...state, currentOperand: null };
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };

    case ACTIONS.RESET:
      return {};
  }
};

const evaluate = ({ previousOperand, currentOperand, operation }) => {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(current)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "/":
      computation = prev / current;
      break;
    case "x":
      computation = prev * current;
      break;
  }

  return computation.toString();
};

const handleThemeChange = (theme) => {
  document.documentElement.setAttribute("color-scheme", theme);
};

const App = () => {
  const [{ previousOperand, currentOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );
  return (
    <>
      <Navbar handleThemeChange={handleThemeChange} />
      <div className="calculator-container">
        <div className="calculator__output-container">
          <div className="calculator__output__previous-operand">
            {previousOperand} {operation}
          </div>
          <div className="calculator__output__current-operand">
            {currentOperand}
          </div>
        </div>

        <div className="calculator__grid">
          <ButtonDigit digit={"7"} dispatch={dispatch} />
          <ButtonDigit digit={"8"} dispatch={dispatch} />
          <ButtonDigit digit={"9"} dispatch={dispatch} />

          <button
            className="btn-del"
            onClick={() => dispatch({ type: ACTIONS.DEL_DIGIT })}
          >
            DEL
          </button>

          <ButtonDigit digit={"4"} dispatch={dispatch} />
          <ButtonDigit digit={"5"} dispatch={dispatch} />
          <ButtonDigit digit={"6"} dispatch={dispatch} />

          <ButtonOperation operation={"+"} dispatch={dispatch} />

          <ButtonDigit digit={"1"} dispatch={dispatch} />
          <ButtonDigit digit={"2"} dispatch={dispatch} />
          <ButtonDigit digit={"3"} dispatch={dispatch} />

          <ButtonOperation operation={"-"} dispatch={dispatch} />

          <ButtonDigit digit={"."} dispatch={dispatch} />
          <ButtonDigit digit={"0"} dispatch={dispatch} />

          <ButtonOperation operation={"/"} dispatch={dispatch} />
          <ButtonOperation operation={"x"} dispatch={dispatch} />

          <button
            className="span-two btn-del"
            onClick={() => dispatch({ type: ACTIONS.RESET })}
          >
            RESET
          </button>
          <button
            className="span-two btn-equal"
            onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
};
export default App;
