import './power_switch.scss'
import PropTypes from 'prop-types'
// you may need to install `yarn add prop-types`

type powerSwitchProps = {
  styleNames: string
}

const PowerSwitch = ({ styleNames }: powerSwitchProps) => {
  return (
    <article className={`power_switch ${styleNames}`}>
      <button
        id='power-btn'
        type='button'>
        Power Toggle
      </button>
    </article>
  )
}

PowerSwitch.propTypes = {
  styleNames: PropTypes.string.isRequired,
}

export default PowerSwitch
