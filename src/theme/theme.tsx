import { extendTheme } from 'native-base';

export default extendTheme({
    colors: {
		light: {
			background: '#F4F4F4',
		},
		icons: {
			primary: "#C6C6C6",
			secondary: "#525252"
		},
		text: {
			primary: '#000',
			placeholder: '#A8A8A8',
			white: "#FFFFFF",
			bg: "rgba(0, 0, 0, 0.7)"
		},
		components: {
			selectedState: "#E0E0E0",
			placeholderActive: "#4D4D4D",
			background: "#F7F7FC",
			offWhite: "#FCFCFC",
			highContrast: "#262626"
		},
		actions: {
			actionPrimary: "#0F62FE",
			actionShade0: "#D0E2FF",
			actionShade1: "#4589FF",
			actionShade2: "#0043CE",
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