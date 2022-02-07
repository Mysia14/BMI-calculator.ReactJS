import {useState} from "react"
import "./app.css";
export default function App () {
  const [weight, setWeight] = useState ("");
  const [height, setHeight] = useState ("");
  
  function calculateBMI() {
    const altura = height / 100;
    const bmi = weight / (altura * altura);

    if(bmi < 18.6){
      alert ("Underweight Range! Your BMI is " + bmi.toFixed(2))
    }
    else if ( bmi >= 18.6 && bmi <24.9){
      alert ("Healthy Weight Range! Your BMI is " + bmi.toFixed(2))
    }
    else if (bmi > 24.9 && bmi < 34.9){
      alert ("Overweight Range! Your BMI is " + bmi.toFixed(2))
    }
    else if (bmi > 34.9){
      alert ("Obese Range! Your BMI is " + bmi.toFixed(2))
    }

  }

 

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
      <h2> This is your BMI result.</h2>
    </div>
  )
}
