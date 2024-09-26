import { useRef, useState } from "react";
import './Bmi.css'
export default function Bmi() {
    const BmiText = ({ bmi }) => {
        if (bmi < 18.5)
            return (<h1>UnderWeight</h1>)
        if (bmi > 30)
            return (<h1>OverWeight</h1>)
        return (<h1>Normal</h1>)
    }
    const W_input = useRef(null);
    const H_input = useRef(null);
    const [Bmi, setBmi] = useState(0);
    const calBmi = () => {
        let w = W_input.current.value
        let h = H_input.current.value / 100
        setBmi(w / Math.pow(h, 2));
    }

    return (<>
        <h1>BMI Calculator</h1>
        Weight
        <input type="text"
            ref={W_input} />
       Height
        <input type="text" ref={H_input} />
        <button onClick={() => calBmi()}>Calculate</button>
        Bmi value: {Bmi.toFixed(2)}
        <BmiText bmi={Bmi} />
    </>);
}