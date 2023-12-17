import { useState } from 'react'

import BackgroundImg from './assets/Money.jpg'
import InputBox from './components/Input'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0);
  const [ from , setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  //forconversion result
  const [convertedAmount , setConvertedAmount] = useState(0)

  //how to custom hook 

  const currencyInfo = useCurrencyInfo(from)
  	//now we need only keys from our data
	//   Object.keys()
  const options = Object.keys(currencyInfo)

  //how to swap between `from` to `to` and vice versa
  const swap =()=>{
	setFrom(to)
	setTo(from)
	setConvertedAmount(amount)
	setAmount(convertedAmount)
  }

  	// calculate result
  const convert=()=>{
	setConvertedAmount(amount*currencyInfo[to])
  }


return (
	<div className="">

		{/* ================================================================== */}
		
		<div className={`flex flex-col justify-center  items-center h-screen   relative  `} 
			style={{backgroundImage:`url(${BackgroundImg})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
			<h1 className=" absolute   top-0  text-center w-full z-20 text-4xl text-indigo-950 p-4  font-extrabold rounded-lg  shadow-2xl backdrop-blur-md bg-white/10">
				Currency Convetor
			</h1>

			{/* ---------------------------------------------------------------------- */}


			<div className="w-full">
			
			<div className="w-full max-w-md mx-auto border border-orange-400 rounded-lg p-5 backdrop-blur-md  bg-white/10">
				<form
					onSubmit={(e) => {
						e.preventDefault();
					    convert()
					}}
				>
					<div className="w-full mb-1">
						<InputBox
							label="From"
							amount={amount}
							currencyOptions={options}
							onCurrencyChange={(currency)=>setAmount(amount)}
							onAmountChange={(amount)=>setAmount(amount)}
							selectCurrency={from}
						/>
					</div>
					<div className="relative w-full h-0.5">
						<button
							type="button"
							className="absolute left-1/2 -translate-x-1/2   -translate-y-1/2 border-2 border-white rounded-md bg-orange-600 text-white px-2 py-0.5"
							onClick={swap}
						>
							swap
						</button>
					</div>
					<div className="w-full mt-1 mb-4">
						<InputBox
							label="To"
							// component reusability 
							amount={convertedAmount}
							currencyOptions={options}
							onCurrencyChange={(currency)=>setTo(currency)}
							
							selectCurrency={to}
							amountDisable
							
						/>
					</div>
					<button type="submit" className="w-full bg-orange-500 text-white text-xl px-4 py-3 rounded-lg">
						Convert {from.toUpperCase()}  to {to.toUpperCase()}
					</button>
				</form>
			</div>
		</div>
			{/* ---------------------------------------------------------------------- */}
		</div>

		{/* ================================================================== */}

	</div>
);
}

export default App
