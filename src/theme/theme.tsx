import { extendTheme } from 'native-base';

export default extendTheme({
    colors: {
		// Add new color
		light: {
			backdrop1: '#F4F4F4',
			backdrop2: '#FFF',
		},
		dark: {
			backdrop1: "#000",
			backdrop2: "#262626"
		},
		icons: {
			primary: "#161616",
			secondary: "#525252",
			primaryLDark: "#F4F4F4",
			secondayDark: "#C6C6C6"
		},
		text: {
			primary: '#161616',
			inputLabels: '#525252',
			placeholder: '#A8A8A8',
			onColor: '#FFFFFF ',
			bg: "rgba(22, 22, 22, 0.8)"
		},
		components: {
			activeState: "#C6C6C6",
			systemGray: "#D3D3D6",
			selectedState: "#E0E0E0",
			placeholderActive: "#4D4D4D",
			background: "#F7F7FC",
			offWhite: "#FCFCFC"
		},
		actions: {
			actionPrimary: "#0F62FE",
			actionShade0: "#D0E2FF",
			actionShade1: "#4589FF",
			actionShade2: "#0043CE",
			visitedLinks: "#8A3FFC",
			highContrast: "#262626"
		},
		alerts: {
			errorPrimary: "#FA4D56",
			errorSecondary: "#DA1E28",
			warningPrimary: "#F1C21B",
			warningSecondary: "#D6AC19",
			successPrimary: "#42BE65",
			successSecondary: "#198038"

		}
    },
    fontConfig: {
		IBMPlexSans: {
			light: {
				normal: "IBMPlexSans-Light"
			},
			semibold: {
				normal: "IBMPlexSans-SemiBold"
			},
			bold: {
				normal: "IBMPlexSans-Bold"
			},
			regular: {
				normal: "IBMPlexSans-Regular"
			}
		},
		fonts: {
			heading: "IBMPlexSans", 
			body: "IBMPlexSans", //Check this one and mono since maybe they won't be used
			mono: "IBMPlexSans"
		}
    },
    config: {
		initialColorMode: 'light',
    },
});