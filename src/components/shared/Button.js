import PropTypes from 'prop-types'

function Button({ children, version, type, isDisabled }) {
	return (
		<Button type={type} disabled={isDisabled} className={`btn bts-${version}`}>
			{children}
		</Button>
	)
}

Button.defaultProps = {
	version: 'primary',
	isDisabled: false,
	type: 'button',
}

Button.propTypes = {
	version: PropTypes.string,
	isDisabled: PropTypes.bool,
	type: PropTypes.string,
	children: PropTypes.node.isRequired,
}

export default Button
