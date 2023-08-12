import { useState } from 'react'

function App() {
  const [display, setDisplay] = useState('')
  const [currentSound, setCurrentSound] = useState('')

  const baseSRC = `https://s3.amazonaws.com/freecodecamp/drums/`
  const getSound = (sound: string): string => baseSRC + sound

  const drumKeys = [
    { drumKey: 'Q', sound: 'Heater-1.mp3' },
    { drumKey: 'W', sound: 'Heater-2.mp3' },
    { drumKey: 'E', sound: 'Heater-3.mp3' },
    { drumKey: 'A', sound: 'Heater-4_1.mp3' },
    { drumKey: 'S', sound: 'Heater-6.mp3' },
    { drumKey: 'D', sound: 'Dsc_Oh.mp3' },
    { drumKey: 'Z', sound: 'Kick_n_Hat.mp3' },
    { drumKey: 'X', sound: 'RP4_KICK_1.mp3' },
    { drumKey: 'C', sound: 'Cev_H2.mp3' },
  ]

  const handleClick = (id: string) => {
    const { sound } = drumKeys.filter(({ drumKey }) => drumKey === id)[0]
    setCurrentSound(sound)

    const audio = new Audio(getSound(currentSound))
    setDisplay(currentSound.split('.')[0])
    audio.play()
  }

  return (
    <main id='drum-machine'>
      <section className='display-container'>
        <div
          className=''
          id=''>
          brand name
        </div>
        <div
          className=''
          id='power'>
          <button
            id='power-btn'
            type='button'>
            Power Toggle
          </button>
        </div>
        <div
          className=''
          id='display'>
          {display}
        </div>
        <div
          className=''
          id=''>
          Control Slider
        </div>
        <div
          className=''
          id=''>
          bank
        </div>
      </section>
      <section className='pad-container'>
        {drumKeys.map(({ drumKey, sound }) => (
          <button
            onClick={(e) => handleClick(e.currentTarget.id)}
            className='drum-pad'
            key={drumKey}
            id={drumKey}>
            <p> {drumKey} </p>
            <audio src={getSound(sound)}></audio>
          </button>
        ))}
      </section>
    </main>
  )
}

export default App
