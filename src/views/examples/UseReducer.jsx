import React, { useState } from "react";
import { useReducer } from "react/cjs/react.development";
import PageTitle from "../../components/layout/PageTitle";
import {initialState, reducer } from '../../store'
import {numberAdd2, login} from '../../store/actions'

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
            onClick={() => login("joão")}
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
            onClick={() => numberAdd2("numberAdd2")}
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
