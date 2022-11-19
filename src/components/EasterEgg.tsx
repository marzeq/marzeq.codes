import { useState } from "react"

const EasterEgg = () => {
  const [easterEgg, setEasterEgg] = useState(false)

  return <div className="fixed bottom-0 right-0 m-4">
    <img src="/rotation.gif" alt="cat spinning" className={`${easterEgg ? "w-48 h-48" : "w-16 h-16 opacity-[0.02]"} cursor-pointer`} onClick={() => setEasterEgg(!easterEgg)} />
    {easterEgg && <audio id="shpin" src="/shpin.mp3" autoPlay loop onPlay={() => {
      const audio = document.getElementById("shpin") as HTMLAudioElement
      audio.volume = 0.3
    }} />}
  </div>
}

export default EasterEgg