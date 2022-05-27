type rgbValue = {
	r: number,
	g: number,
	b: number,
}
const validColorHexRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
const validRgbRegex = /^rgb\((?:[0-9]{1, 3}), (?:[0-9]{1, 3}), (?:[0-9]{1, 3})\)$/
export function addAlphaChannelToHex(hexValue: string, alpha: number) {
	if(!validColorHexRegex.test(hexValue)) {
		throw new Error('Invalid hex value');
	}
	if (!isValidAlpha(alpha)) {
		throw new Error('Invalid alpha value');
	}

	const rgbValues = hexValue.length === 4 ? convertShorthand(hexValue) : convertLonghand(hexValue);

	return `rgba(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b}, ${alpha}`;
}

function convertShorthand(shorthandHexValue: string): rgbValue {
	const rHex = shorthandHexValue.substring(1, 2);
	const gHex = shorthandHexValue.substring(2, 3);
	const bHex = shorthandHexValue.substring(3);
	const r = parseInt(`${rHex}${rHex}`, 16);
	const g = parseInt(`${gHex}${gHex}`, 16);
	const b = parseInt(`${bHex}${bHex}`, 16);

	return {r, g, b};
}

function convertLonghand(longhandHexValue: string): rgbValue {
	const rHex = longhandHexValue.substring(1, 3);
	const gHex = longhandHexValue.substring(3, 5);
	const bHex = longhandHexValue.substring(5);

	const r = parseInt(rHex, 16);
	const g = parseInt(gHex, 16);
	const b = parseInt(bHex, 16);

	return { r, g, b };
}


function isValidAlpha(alphaValue: number) {
	return !(alphaValue > 1 || alphaValue < 0);
}

export const adjustAlpha = (color: string, alpha: number) => {
	const div = document.createElement('div');
	div.style.color = color;
	const rgb = div.style.color;
	const hasAlpha = rgb.charAt(3) === 'a';
	const colorPositions = {
		r:
	}
	if (rgb.charAt(3) === 'a') {

	}
}
