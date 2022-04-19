import { Text, Image, Center } from 'native-base';
import LertText from '~components/atoms/LertText';

type ProfielInfoPropTypes = {
    imagePath?: string;
    name: string;
    role: string;
}

const ProfileInfo = (props: ProfielInfoPropTypes) => {
    return (
        <Center>
            <Image 
                size={100}
                borderRadius={100}
                source={{uri: props.imagePath ? props.imagePath : "https://wallpaperaccess.com/full/317501.jpg"}}
                alt="testing"
            />
            <LertText text={props.name} type="heading"/>
            <LertText text={props.role} type="body02Layout"/>
        </Center>
    );
};

export default ProfileInfo;