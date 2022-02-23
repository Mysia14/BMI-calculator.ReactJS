import {useState} from "react"
import "./app.css";
export default function App () {
  const [weight, setWeight] = useState ("");
  const [height, setHeight] = useState ("");
  const [message, setMessage] = useState ("");
  
  function calculateBMI() {
    const altura = height / 100;
    const bmi = weight / (altura * altura);

    if(bmi < 18.6){
      setMessage ("Underweight Range! Your BMI is " + bmi.toFixed(2))
    }
    else if ( bmi >= 18.6 && bmi <24.9){
      setMessage ("Healthy Weight Range! Your BMI is " + bmi.toFixed(2))
    }
    else if (bmi > 24.9 && bmi < 34.9){
      setMessage ("Overweight Range! Your BMI is " + bmi.toFixed(2))
    }
    else if (bmi > 34.9){
      setMessage ("Obese Range! Your BMI is " + bmi.toFixed(2))
    }

  }
// alert()+bmi.toFixed(2))
// use.State -- add data
//
 

  return(
    <div className="app">
      <h1>BMI Calculator</h1>
      <span>Let's Calculate your BMI</span>

      <div className="area-input">
        <input type="text" placeholder="Your weight (Kg)" 
         value = {weight} onChange = { (e) => setWeight (e.target.value)}/>
        <input type="text" placeholder="Your height (cm)"
         value = {height} onChange = { (e) => setHeight (e.target.value)} />

        <button onClick = {calculateBMI}>
          Calculate
        </button>
      </div>
      <h2> {message}</h2>
    </div>
  )
}
