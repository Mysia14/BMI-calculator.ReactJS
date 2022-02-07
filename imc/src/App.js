import "./app.css";
export default function App () {
  return(
    <div className="app">
      <h1>BMI Calculator</h1>
      <span>Let's Calculate your BMI</span>

      <div className="area-input">
        <input type="text" placeholder="Your wheight (Kg)" />
        <input type="text" placeholder="Your height (cm)" />

        <button>
          Calculate
        </button>
      </div>
      <h2> This is your BMI result.</h2>
    </div>
  )
}
