import React from 'react'

const Form = () => {
  return (
    <>
      <div className="flex flex-col gap-4 bg-gradient-to-r from-amber-600 to-amber-900 p-10 rounded-xl shadow-md shadow-zinc-400 my-3">
        <p>Want to get notified when I add new Tailwind designs?</p>

        <form className="flex justify-center">
          <input
            className="py-1 px-3 rounded-l-xl h-12"
            type="text"
            placeholder="input your text"
          />
          <button className="bg-orange-500 p-3 rounded-r-xl font-bold hover:bg-orange-300 transition-all">
            SUBMIT
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-4 bg-gradient-to-r from-amber-600 to-amber-900 p-10 rounded-xl shadow-md shadow-zinc-400 my-3">
        <p>Want to get notified when I add new Tailwind designs?</p>
      </div>
    </>
  )
}

export default Form
