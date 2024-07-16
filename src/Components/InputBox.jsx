import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  currencyOptions,
  amountDisable = false,
  selectCurrency,
  onCurrencyChange,
  currencyDisable = false,
}) {
  const amountInputId = useId(); // to generate unique ids.
  // Note - Don't use useId hook for generating keys of a list. Not recommended

  return (
    <div className="bg-white w-3/4 rounded-2xl p-2 flex flex-row justify-evenly items-center text-black flex-wrap text-center mb-2">
      <div className="flex flex-col justify-center items-center">
        <label htmlFor={amountInputId} className="text-gray-500">{label}</label>

        <input
          type="number"
          id={amountInputId}
          placeholder="Amount"
          className="m-1 bg-gray-100 px-2 py-1 rounded-lg text-center w-full"
          disabled={amountDisable}
          value={amount}
          // onChange={(e) => console.log(e.target.value + 5)} // if onAmountChange available because it is function and we can't give it default value.
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          } // if onAmountChange available because it is function and we can't give it default value. Also convert it into Number because e.target.value returns a string
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <label htmlFor={amountInputId} className="text-gray-500">Currency Type</label>

        <select
          name=""
          id={amountInputId}
          className="m-1 bg-gray-100 px-2 py-1 rounded-lg"
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {/* <option value="usd">usd</option> */}

          {currencyOptions.map((currency) => (
            
            <option key={currency} value={currency}>
              {currency}
            </option>
            
          ))}
          
        </select>
      </div>
    </div>
  );
}

export default InputBox;
