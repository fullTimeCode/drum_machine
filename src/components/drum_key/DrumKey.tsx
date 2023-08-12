import './drum_key.scss'
import PropTypes from 'prop-types'
// you may need to install `yarn add prop-types`

type drumKeyProps = {
  styleNames: string
  drumKey: string
}

const DrumKey = ({ styleNames, drumKey }: drumKeyProps) => {
  return (
    <div
      className={`drum-pad ${styleNames}`}
      id={drumKey}>
      {drumKey}
    </div>
  )
}

DrumKey.propTypes = {
  styleNames: PropTypes.string.isRequired,
}

export default DrumKey
