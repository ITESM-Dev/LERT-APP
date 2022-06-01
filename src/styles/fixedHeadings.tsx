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
        fontWeight: "semibold",
        fontStyle: "normal",
        fontFamily: "body",
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0
    },
    heading3: {
        fontWeight: "regular",
        fontStyle: "normal",
        fontFamily: "body",
        fontSize: 20,
        lineHeight: 28,
        letterSpacing: 0
    },
    heading4: {
        fontWeight: "regular",
        fontStyle: "normal",
        fontFamily: "body",
        fontSize: 28,
        lineHeight: 36,
        letterSpacing: 0
    },
    heading5: {
        fontWeight: "regular",
        fontStyle: "normal",
        fontFamily: "body",
        fontSize: 32,
        lineHeight: 40,
        letterSpacing: 0
    }
}

export type FixedHadingTypes = keyof typeof FixedHeadingStyles;
export default FixedHeadingStyles;