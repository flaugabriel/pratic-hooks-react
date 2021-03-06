import React, {useState} from 'react'
import { useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num){
    const n = parseInt( num === '' ? 0 : num)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {

    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [boolNumber, setStatus] = useState(false)

    useEffect(function () {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function( ) {
        if (fatorial > 1000000) {
            document.title = "eita!!"
        }
        if (number % 2 === 0) {
            setStatus(true)
        }
    }, [fatorial])

    useEffect(function( ) {
        if (number % 2 === 0) {
            setStatus(true)
        }else {
            setStatus(false)
        }
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

        <SectionTitle title="Exercício #01"/>
        <div className="center">
            <div>
                <span className="text">Fatorial: </span>
                <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>
            </div>
            <input type="number" className="input"
							value={number} onChange={e => setNumber(e.target.value)}/>
        </div>

        <SectionTitle title="Exercício #02"/>
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{boolNumber ? 'Par' : "Impa"}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
