import { useState, useCallback, useEffect } from "react";
import "./App.css";

import curImg from "./assets/change.png";

import useCurrencyInfo from "./hooks/useCurrencyInfo";

import { InputBox } from "./Components"; // imdex.js is default entrypoint for components.

function App() {
  // amount,
  // onAmountChange,
  // currencyOptions,
  // amountDisable = false,
  // selectCurrency,
  // onCurrencyChange,
  // currencyDisable = false,

  const [amount, setAmount] = useState(0);
  const [fromCur, setFromCur] = useState("usd");
  const [toCur, setToCur] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCur);

  const curOptions = Object.keys(currencyInfo);

  // const convert = () =>{
  //   setConvertedAmount(amount*currencyInfo[toCur]);
  // }

  const swapCur = () => {
    setFromCur(toCur);
    setToCur(fromCur);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = useCallback(() => {

    if(currencyInfo != null && toCur != null){
      
      setConvertedAmount(amount * currencyInfo[toCur]);
    }
    
    }, [amount, fromCur, toCur, currencyInfo]);

  useEffect(() => {
    convert();
  }, [amount, fromCur, toCur, currencyInfo]);

  return (
    <>
      <div
        className="w-full h-screen flex justify-center items-center flex-col"
        id="outer_div"
      >
        <div className="flex justify-center items-center text-xl text-center font-bold text-black bg-white rounded-xl p-4 rounded-b-none">
          <img src={curImg} alt="" className="w-7 mr-3" />
          <h1 className="">Currency Converter</h1>
        </div>

        <div className="bg-white h-auto w-6/12 min-w-64 rounded-xl bg-opacity-80 p-5 flex flex-wrap justify-center items-center">
          <div className="w-3/4 text-end mb-2">
            <button
              className="bg-violet-500 border-white border-2 rounded-lg px-2 py-1 text-lg active:bg-violet-700 active:scale-90"
              onClick={swapCur}
            >
              Swap
            </button>
          </div>

          <InputBox
            label="From"
            amount={amount}
            onAmountChange={(amount) => setAmount(amount)}
            currencyOptions={curOptions}
            amountDisable={false}
            selectCurrency={fromCur}
            onCurrencyChange={(currency) => setFromCur(currency)}
            currencyDisable={false}
          />

          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={curOptions}
            amountDisable={true}
            selectCurrency={toCur}
            onCurrencyChange={(currency) => setToCur(currency)}
            currencyDisable={false}
          />

          {/* <div className="w-3/4 text-center">
            <button
              className="bg-blue-600 border-white border-2 rounded-lg px-2 py-1 text-lg active:bg-blue-800 active:scale-90"
              onClick={convert}
            >
              Convert {fromCur.toUpperCase()} to {toCur.toUpperCase()}
            </button>
          </div> */}

        </div>
      </div>
    </>
  );
}

export default App;
