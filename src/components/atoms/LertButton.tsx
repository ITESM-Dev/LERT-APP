import { Button } from 'native-base'

type LertButtonPropTypes = {
    title: string;
}

const LertButton = (props: LertButtonPropTypes) => {

    const { title } = props

    return (
        <Button>
            {title}
        </Button>
    );
};

export default LertButton;