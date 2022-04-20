import { Text, Image, Center } from 'native-base';
import LertText from '~components/atoms/LertText';

type ProfielInfoPropTypes = {
    imagePath?: string;
    name: string;
    role: string;
}

/**
 * @param imagePath (optional) Path or link to the image, it has a default path
 * @param name Input for the name of the person to be shown as text
 * @param role Input for the role to be shown as text
 */
const ProfileInfo = (props: ProfielInfoPropTypes) => {
    return (
        <Center>
            <Image 
                size={100}
                borderRadius={100}
                source={{uri: props.imagePath ? props.imagePath : "https://wallpaperaccess.com/full/317501.jpg" }}
                alt="testing"
            />
            <LertText text={props.name} type="body02Layout"/>
            <LertText text={props.role} type="shortParagraph"/>
        </Center>
    );
};

export default ProfileInfo;