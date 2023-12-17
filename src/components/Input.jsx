import React , {useId} from 'react';

/**
 * useId => labal is going to rerender 
 * 
 */


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    
    
    className = "",
}) {
   
    const amountInputId = useId()

    return (
        <div className={`bg-indigo-950  p-3 rounded-lg text-sm flex  `}>
            <div className="w-1/2">
                <label  className="text-white mb-2 inline-block" htmlFor={amountInputId}>
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none text-white w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}}  // this check weather amount is exist or not
                    //e.target.value => gives string not number 
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-white mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {/* LOOPING IN OPTION FIELD TO GET VALUES */}
                        {/* <option value="usd">
                            usd
                        </option> */}
                        {currencyOptions.map((currency)=>(
                            
                                // remember keys in loops in react 
                                <option key={currency}  value={currency}>{currency}</option>
                        )
                        )}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
