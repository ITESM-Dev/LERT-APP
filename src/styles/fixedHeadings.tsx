import { TextType } from "~components/atoms/LertText";

const FixedHeadingStyles: { [key: string]: TextType } = {
    heading: {
        fontWeight: "regular",
        fontStyle: "normal",
        fontFamily: "body",
        fontSize: 14,
        lineHeight: 18,
        letterSpacing: 0.16 
    },
    heading2: {
        fontWeight: "semi-bold",
        fontStyle: "normal",
        fontFamily: "body",
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.16
    },
    body02Layout: {
        fontWeight: "semibold",
        fontStyle: "normal",
        fontFamily: "body",
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0
    },
    longLayout: {
        fontWeight: "regular",
        fontStyle: "normal",
        fontFamily: "body",
        fontSize: 20,
        lineHeight: 28,
        letterSpacing: 0
    },
    longLayout2: {
        fontWeight: "regular",
        fontStyle: "normal",
        fontFamily: "body",
        fontSize: 32,
        lineHeight: 40,
        letterSpacing: 0
    },
    boldLongLayout2: {
        fontWeight: "bold",
        fontStyle: "normal",
        fontFamily: "body",
        fontSize: 32,
        lineHeight: 40,
        letterSpacing: 0
    }
}

export type FixedHadingTypes = keyof typeof FixedHeadingStyles;
export default FixedHeadingStyles;