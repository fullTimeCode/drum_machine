import { useState } from 'react'
import { ToggleSwitch } from './components'
import { FaCircleDot } from 'react-icons/fa6'

function App() {
  const [display, setDisplay] = useState('')
  const [currentSound, setCurrentSound] = useState('')
  const [powerStatus, setPowerStatus] = useState(false)

  const baseSRC = `https://s3.amazonaws.com/freecodecamp/drums/`
  const getSound = (sound: string): string => baseSRC + sound + '.mp3'

  const drumKeys = [
    { drumKey: 'Q', sound: 'Heater-1' },
    { drumKey: 'W', sound: 'Heater-2' },
    { drumKey: 'E', sound: 'Heater-3' },
    { drumKey: 'A', sound: 'Heater-4_1' },
    { drumKey: 'S', sound: 'Heater-6' },
    { drumKey: 'D', sound: 'Dsc_Oh' },
    { drumKey: 'Z', sound: 'Kick_n_Hat' },
    { drumKey: 'X', sound: 'RP4_KICK_1' },
    { drumKey: 'C', sound: 'Cev_H2' },
  ]

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const id = e.currentTarget.id
    const audioElem = e.currentTarget.children[1] as HTMLAudioElement
    console.log(audioElem)
    audioElem.play()

    const { sound } = drumKeys.filter(({ drumKey }) => drumKey === id)[0]
    setCurrentSound(sound)

    setDisplay(currentSound)
  }
  const handleSwitchToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('target: ', e.target)
    console.log('current target: ', e.currentTarget)
    setPowerStatus((prevStatus) => !prevStatus)
  }

  return (
    <main id='drum-machine'>
      <section className='display-container'>
        <div
          className=''
          id=''>
          brand name:
          {powerStatus ? <FaCircleDot fill={'orangered'} /> : <FaCircleDot fill={'black'} />}
        </div>
        <div
          className=''
          id='power'>
          <ToggleSwitch
            styleNames=''
            switchStatus={powerStatus}
            handleToggle={handleSwitchToggle}
          />
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
        {drumKeys.map(({ drumKey, sound }, idx) => (
          <button
            onClick={(e) => handleClick(e)}
            className='drum-pad'
            key={idx}
            id={drumKey}>
            <p> {drumKey} </p>
            <audio
              className='clip'
              id={drumKey}
              src={getSound(sound)}></audio>
          </button>
        ))}
      </section>
    </main>
  )
}

export default App
