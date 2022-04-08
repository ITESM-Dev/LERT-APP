import { TextType } from "~components/LertText";

const DisplayStyles: { [key: string]: TextType } = {
    display01: {
        fontWeight: "light",
        fontStyle: "normal",
        fontFamily: "body",
        fontSize: 54,
        lineHeight: 64,
        letterSpacing: 0 
    },
    display02: {
        fontWeight: "semibold",
        fontStyle: "normal",
        fontFamily: "body",
        fontSize: 54,
        lineHeight: 64,
        letterSpacing: 0 
      },
      display03: {
        fontWeight: "light",
        fontStyle: "normal",
        fontFamily: "body",
        fontSize: 92,
        lineHeight: 102,
        letterSpacing: -0.64 //check this one out 
      },
      display04: {
        fontWeight: "light",
        fontStyle: "normal",
        fontFamily: "body",
        fontSize: 54,
        lineHeight: 64,
        letterSpacing: 0 
    }
}

export type DisplayTypes = keyof typeof DisplayStyles;
export default DisplayStyles;