import './brand.scss'
import PropTypes from 'prop-types'
// you may need to install `yarn add prop-types`

type brandProps = {
	styleNames: string,
}

const Brand = ( { styleNames } : brandProps ) => {
	return (
		<div className={`brand ${styleNames}`}>
			<h2>Brand</h2>
			{/* add your code here  */}

		</div>
	)
}

Brand.propTypes = {
	styleNames: PropTypes.string.isRequired
}

export default Brand
