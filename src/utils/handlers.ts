import { Linking } from "react-native"

export const handleOpenUrl = (url: string) => {    
    Linking.openURL(url)
}