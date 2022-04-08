import { TextType } from "~components/LertText";

const UtilityStyles: { [key: string]: TextType } = {
    label: {
        fontWeight: "regular",
        fontStyle: "normal",
        fontFamily: "body",
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 0.32 
    },
    helperText: {
        fontWeight: "regular",
        fontStyle: "normal",
        fontFamily: "body",
        fontSize: 14,
        lineHeight: 18,
        letterSpacing: 0.16 
    }
}

export type UtilityTypes = keyof typeof UtilityStyles;

export default UtilityStyles;