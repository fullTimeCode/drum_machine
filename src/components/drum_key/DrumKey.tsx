import './drum_key.scss'
import PropTypes from 'prop-types'

type DrumKeyProps = {
  styleNames?: string
  drumKey: string
  source: string
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const DrumKey = ({ styleNames, drumKey, handleClick, source }: DrumKeyProps) => {
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
