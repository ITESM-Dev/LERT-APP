import { TextType } from "~components/atoms/LertText";

const BodyStyles: { [key: string]: TextType } = {
    paragraphComponents: {
        fontWeight: "regular",
        fontStyle: "normal",
        fontFamily: "body",
        fontSize: 12,
        lineHeight: 18,
        letterSpacing: 0.16 
    },
    shortParagraph: {
        fontWeight: "regular",
        fontStyle: "normal",
        fontFamily: "body",
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: 0 
    },
    body01: {
        fontWeight: "regular",
        fontStyle: "normal",
        fontFamily: "body",
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.16 
    },
    body02: {
        fontWeight: "regular",
        fontStyle: "normal",
        fontFamily: "body",
        fontSize: 14,
        lineHeight: 18,
        letterSpacing: 0.16 
    },
}

export type BodyTypes = keyof typeof BodyStyles;
export default BodyStyles;