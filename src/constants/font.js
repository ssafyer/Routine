import PropTypes from 'prop-types';

export const fonts = {
	BOLD24_FONT: {
		fontFamily: 'BoldFont',
		fontSize: '24px',
		lineHeight: '33px',
	},
	BOLD22_FONT: {
		fontFamily: 'BoldFont',
		fontSize: '22px',
		lineHeight: '26px',
	},
	BOLD21_FONT: {
		fontFamily: 'BoldFont',
		fontSize: '21px',
		lineHeight: '30px',
	},
	BOLD18_FONT: {
		fontFamily: 'BoldFont',
		fontSize: '18px',
		lineHeight: '26px',
	},
	BOLD16_FONT: {
		fontFamily: 'BoldFont',
		fontSize: '16px',
		lineHeight: '24px',
	},
	BOLD14_FONT: {
		fontFamily: 'BoldFont',
		fontSize: '14px',
		lineHeight: '20px',
	},
	BOLD11_FONT: {
		fontFamily: 'BoldFont',
		fontSize: '11px',
		lineHeight: '16px',
	},

	MEDIUM20_FONT: {
		fontFamily: 'MediumFont',
		fontSize: '20px',
		lineHeight: '24px',
	},
	MEDIUM18_FONT: {
		fontFamily: 'MediumFont',
		fontSize: '18px',
		lineHeight: '26px',
	},
	MEDIUM16_FONT: {
		fontFamily: 'MediumFont',
		fontSize: '16px',
		lineHeight: '24px',
	},
	MEDIUM14_FONT: {
		fontFamily: 'MediumFont',
		fontSize: '14px',
		lineHeight: '16px',
	},
	MEDIUM12_FONT: {
		fontFamily: 'MediumFont',
		fontSize: '12px',
		lineHeight: '16px',
	},

	REGULAR18_FONT: {
		fontFamily: 'RegularFont',
		fontSize: '18px',
		lineHeight: '26px',
	},
	REGULAR16_FONT: {
		fontFamily: 'RegularFont',
		fontSize: '16px',
		lineHeight: '24px',
	},
	REGULAR14_FONT: {
		fontFamily: 'RegularFont',
		fontSize: '14px',
		lineHeight: '18px',
	},
	REGULAR12_FONT: {
		fontFamily: 'RegularFont',
		fontSize: '12px',
		lineHeight: '17px',
	},
	REGULAR11_FONT: {
		fontFamily: 'RegularFont',
		fontSize: '11px',
	},
	REGULAR10_FONT: {
		fontFamily: 'RegularFont',
		fontSize: '10px',
		lineHeight: '14px',
	},
};

export const FONT_PROPTYPES = PropTypes.shape({
	font: PropTypes.string.isRequired,
	size: PropTypes.number.isRequired,
});
