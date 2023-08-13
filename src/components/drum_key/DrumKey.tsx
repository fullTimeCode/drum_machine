import './drum_key.scss'
import PropTypes from 'prop-types'
// you may need to install `yarn add prop-types`

type drumKeyProps = {
  styleNames: string
  drumKey: string
  source: string
  handleClick: CallableFunction
}

const DrumKey = ({ styleNames, drumKey, handleClick, source }: drumKeyProps) => {
  return (
    <button
      onClick={(e) => handleClick(e)}
      className={`drum-pad ${styleNames}`}
      id={drumKey}>
      <p> {drumKey} </p>
      <audio
        className='clip'
        id={drumKey}
        src={source}></audio>
    </button>
  )
}

DrumKey.propTypes = {
  styleNames: PropTypes.string.isRequired,
}

export default DrumKey
