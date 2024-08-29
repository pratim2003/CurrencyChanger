import React from 'react'

function Input(
    {
        lebel,
        amount,
        currencyoptions=[],
        currencyDisable=false,
        amountDisable=false,
        onAmountChange,
        onCurrencyChange,
        selectCurrency
    }
) 
{
  return (
    <>
    <div className='max-w-md mx-3 mt-3 p-2 px-3 bg-white rounded-md'>
       <div className='flex justify-between'>
           <div className=''>
             <label >
               {lebel}
             </label>
             <div>
             <input type="number"  className='my-2 rounded-md p-1 border-none' value={amount} disabled={amountDisable} onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}/>
             </div>
           </div>
           <div className='items-center text-center'>
             <p className=''>Currency Type</p>
             <select name="" id="" value={selectCurrency} className='my-2 rounded-sm' disabled={currencyDisable} onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}>
               {currencyoptions.map((currency)=>(
                <option key={currency} value={currency}>
                    {currency}
                </option>
               ))}
             </select>
           </div>
       </div>
    </div>
   </>
  )
}

export default Input
