import './key_pad.scss'
import PropTypes from 'prop-types'
// you may need to install `yarn add prop-types`

type keyPadProps = {
	styleNames: string,
}

const KeyPad = ( { styleNames } : keyPadProps ) => {
	return (
		<div className={`key_pad ${styleNames}`}>
			<h2>KeyPad</h2>
			{/* add your code here  */}

		</div>
	)
}

KeyPad.propTypes = {
	styleNames: PropTypes.string.isRequired
}

export default KeyPad
