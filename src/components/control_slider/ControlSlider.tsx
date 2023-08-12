import './control_slider.scss'
import PropTypes from 'prop-types'
// you may need to install `yarn add prop-types`

type controlSliderProps = {
	styleNames: string,
}

const ControlSlider = ( { styleNames } : controlSliderProps ) => {
	return (
		<div className={`control_slider ${styleNames}`}>
			<h2>ControlSlider</h2>
			{/* add your code here  */}

		</div>
	)
}

ControlSlider.propTypes = {
	styleNames: PropTypes.string.isRequired
}

export default ControlSlider
