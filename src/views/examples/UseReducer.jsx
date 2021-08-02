import React, { useState } from "react";
import { useReducer } from "react/cjs/react.development";
import PageTitle from "../../components/layout/PageTitle";

// *7    / 25   parse para inteiro  / add numero qualquer

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "multipleTo7":
      return { ...state, number: state.number * 7 };
    case "sendValue":
      return { ...state, number: state.number + parseInt(action.payload) || 0 };
    case "fixeInterNumber":
      return { ...state, number: parseInt(state.number) };
    case "divideBy25":
      return { ...state, number: state.number / 25 };
    case "numberAdd2":
      return { ...state, number: state.number + 2 };
    case "login":
      return { ...state, user: { name: action.payload } };
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem usuário</span>
        )}

        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: "login", payload: "Maria" })}
          >
            Login
          </button>

          <button
            className="btn"
            onClick={() => dispatch({ type: "fixeInterNumber" })}
          >
            Correção de inteiros
          </button>

          <button
            className="btn"
            onClick={() => dispatch({ type: "numberAdd2" })}
          >
            +2
          </button>

          <button
            className="btn"
            onClick={() => dispatch({ type: "divideBy25" })}
          >
            /25
          </button>

          <button
            className="btn"
            onClick={() => dispatch({ type: "multipleTo7" })}
          >
            x7
          </button>
          <input
            type="number"
            className="input"
            onChange={(e) => {
              dispatch({ type: "sendValue", payload: e.target.value });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
