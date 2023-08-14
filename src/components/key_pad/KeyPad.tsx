import React from 'react'
import PropTypes from 'prop-types'
import { DrumKey } from '..'
import './key_pad.scss'

type DrumKeyType = {
  drumKey: string
  sound: string
  idx?: number
}

type KeyPadProps = {
  styleNames: string
  drumKeys: DrumKeyType[]
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  getSound: (sound: string) => string
}

const KeyPad: React.FC<KeyPadProps> = ({ styleNames, drumKeys, getSound, handleClick }) => {
  return (
    <div>
      <section className={`pad-container key_pad ${styleNames}`}>
        {drumKeys.map(({ drumKey, sound, idx }) => (
          <DrumKey
            key={idx}
            drumKey={drumKey}
            handleClick={handleClick}
            source={getSound(sound)}
            styleNames={''} // You can set appropriate styles here
          />
        ))}
      </section>
    </div>
  )
}

KeyPad.propTypes = {
  styleNames: PropTypes.string.isRequired,
}

export default KeyPad
