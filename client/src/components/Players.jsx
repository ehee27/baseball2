import { useState, useEffect } from 'react'

const Players = () => {
  const [playerData, setPlayerData] = useState(null)
  useEffect(() => {
    fetch('http://localhost:3500/players')
      .then(res => res.json())
      .then(res => setPlayerData(res.data))
  })
  //
  return (
    <div className="rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {playerData?.map((player, i) => (
          <div
            key={i}
            className="border-4 rounded-xl p-5 bg-gradient-to-r from-zinc-500 via-stone-600 to-zinc-900 text-black m-2"
          >
            <p>{player.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Players
