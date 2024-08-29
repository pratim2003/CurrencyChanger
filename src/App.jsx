import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount,setAmount]=useState(0);
  const [from,setFrom]=useState("usd");
  const [to,setTo]=useState("inr")
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const [converetedAmount,setConvertedAmount] = useState(0)
  function convert(){
    setConvertedAmount(amount * currencyInfo[to])
  }
  function swap(){
    setFrom(to)
    setTo(from)
  }
  return (
    <>
      <div className="h-screen place-content-center w-screen bg-no-repeat bg-cover bg-[url('girla-mountain_928367-17.avif')]">
        <div className='max-w-md m-auto backdrop-blur-sm bg-white/40 p-3'>
          <Input 
            lebel="from"
            amount = {amount}
            currencyoptions={options}
            onAmountChange={(curr)=>setAmount(curr)}
            onCurrencyChange={(curr)=>setFrom(curr)}
            selectCurrency={from}
          />
          <div className='text-center flex justify-center p-2'><button className='' onClick={swap}>swap</button></div>
          <Input 
            lebel="to"
            currencyoptions={options}
            onCurrencyChange={(curr)=>setTo(curr)}
            selectCurrency={to}
            amountDisable
            amount={converetedAmount}
          />
          <div className='flex justify-center'>
            <button className='p-3 bg-amber-500 mt-3 rounded-md' onClick={convert}>click here to convert</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
