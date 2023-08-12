import './toggle_switch.scss'
import PropTypes from 'prop-types'
// you may need to install `yarn add prop-types`

type toggleSwitchProps = {
  styleNames: string
  switchStatus: boolean
  handleToggle: React.ChangeEventHandler<HTMLInputElement> | undefined
}

const ToggleSwitch = ({ styleNames, switchStatus, handleToggle }: toggleSwitchProps) => {
  return (
    <article className={`toggle-switch ${styleNames}`}>
      <p>toggle switch: {switchStatus} </p>
      <label className='switch'>
        <input
          type='checkbox'
          onChange={handleToggle}
        />
        <span className='slider'></span>
      </label>
    </article>
  )
}

ToggleSwitch.propTypes = {
  styleNames: PropTypes.string.isRequired,
  switchStatus: PropTypes.bool,
}

export default ToggleSwitch
