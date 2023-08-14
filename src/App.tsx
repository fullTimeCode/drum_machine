import { useState, useEffect, useCallback, useMemo } from 'react'
import { ToggleSwitch, KeyPad } from './components'
import { FaCircleDot } from 'react-icons/fa6'

function App() {
  const [display, setDisplay] = useState('')
  const [powerStatus, setPowerStatus] = useState(false)

  const baseSRC = `https://s3.amazonaws.com/freecodecamp/drums/`
  const getSound = useCallback((sound: string): string => baseSRC + sound + '.mp3', [baseSRC])

  const drumKeys = useMemo(
    () => [
      { drumKey: 'Q', sound: 'Heater-1', triggerKey: 'Heater 1', keyCode: 81 }, // Q
      { drumKey: 'W', sound: 'Heater-2', triggerKey: 'Heater 2', keyCode: 87 }, // W
      { drumKey: 'E', sound: 'Heater-3', triggerKey: 'Heater 3', keyCode: 69 }, // E
      { drumKey: 'A', sound: 'Heater-4_1', triggerKey: 'Heater 4', keyCode: 65 }, // A
      { drumKey: 'S', sound: 'Heater-6', triggerKey: 'Clap', keyCode: 83 }, // S
      { drumKey: 'D', sound: 'Dsc_Oh', triggerKey: 'Open-HH', keyCode: 68 }, // D
      { drumKey: 'Z', sound: 'Kick_n_Hat', triggerKey: "Kick-n'-Hat", keyCode: 90 }, // Z
      { drumKey: 'X', sound: 'RP4_KICK_1', triggerKey: 'Kick', keyCode: 88 }, // X
      { drumKey: 'C', sound: 'Cev_H2', triggerKey: 'Closed-HH', keyCode: 67 }, // C
    ],
    []
  )

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const id = e.currentTarget.id
    const audioElem = e.currentTarget.children[1] as HTMLAudioElement
    // console.log(audioElem)
    audioElem.play()

    const { sound } = drumKeys.filter(({ drumKey }) => drumKey === id)[0]
    setDisplay(sound)
  }
  const handleSwitchToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log('target: ', e.target)
    // console.log('current target: ', e.currentTarget)
    setPowerStatus((prevStatus) => !prevStatus)
    e
  }

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const keyPressed = event.keyCode

      // Find the corresponding drum key object for the pressed key
      const matchingDrumKey = drumKeys.find((drumKey) => drumKey.keyCode === keyPressed)

      console.log(matchingDrumKey)

      if (matchingDrumKey) {
        const audio = new Audio(getSound(matchingDrumKey.sound))
        audio.play()
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [drumKeys, getSound])

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
      <KeyPad
        handleClick={handleClick}
        drumKeys={drumKeys}
        getSound={getSound}
        styleNames={''}
      />
    </main>
  )
}

export default App
