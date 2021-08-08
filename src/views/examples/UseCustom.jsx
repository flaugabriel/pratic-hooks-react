import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import { useCounter } from "../../hooks/useCouter";

const UseRef = (props) => {

	const [count, inc, dec] = useCounter()

  return (
    <div className="UseCustom">
      <PageTitle
        title="Seu Hook"
        subtitle="Vamos aprender como criar o nosso próprio Hook!"
      />

			<div className="center">
				<span className="text">
					{count}
				</span>
				<div>
					<button className="btn"
					onClick={()=> dec()}>
						Dec
					</button>
					<button className="btn"
					onClick={()=> inc()}>
						Inc
					</button>
				</div>
			</div>
    </div>
  );
};

export default UseRef;
