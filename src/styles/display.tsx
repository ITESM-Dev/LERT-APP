import { TextType } from "~components/atoms/LertText";

const DisplayStyles: { [key: string]: TextType } = {
    display01: {
        fontWeight: "light",
        fontStyle: "normal",
        fontFamily: "body",
        fontSize: 24,
        lineHeight: 34,
        letterSpacing: 0 
    },
    display02: {
      fontWeight: "semibold",
      fontStyle: "normal",
      fontFamily: "body",
      fontSize: 24,
      lineHeight: 34,
      letterSpacing: 0 
    },
    display03: {
        fontWeight: "light",
        fontStyle: "normal",
        fontFamily: "body",
        fontSize: 54,
        lineHeight: 64,
        letterSpacing: 0 
    },
    display04: {
        fontWeight: "semibold",
        fontStyle: "normal",
        fontFamily: "body",
        fontSize: 54,
        lineHeight: 64,
        letterSpacing: 0 
    },
    display05: {
        fontWeight: "light",
        fontStyle: "normal",
        fontFamily: "body",
        fontSize: 92,
        lineHeight: 102,
        letterSpacing: -0.64
    },
    display06: {
        fontWeight: "semibold",
        fontStyle: "normal",
        fontFamily: "body",
        fontSize: 92,
        lineHeight: 102,
        letterSpacing: -0.64 
    },
    displayParagraph: {
        fontWeight: "light",
        fontStyle: "normal",
        fontFamily: "body",
        fontSize: 28,
        lineHeight: 36,
        letterSpacing: 0 
    }
}

export type DisplayTypes = keyof typeof DisplayStyles;
export default DisplayStyles;