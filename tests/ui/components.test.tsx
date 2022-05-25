import { render, fireEvent } from '@testing-library/react-native'
import { NativeBaseProvider} from 'native-base';
import { Button, View } from 'react-native';
import LertButton from '~components/atoms/LertButton'
import theme from '~theme/theme';

// Native Base configuration
const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

// Nativa Base wrapper for using Theme inside components
const wrapperComponent = ({ children }: { children: React.ReactNode }) => 
    <NativeBaseProvider theme={theme} initialWindowMetrics={inset} >
        {children}
    </NativeBaseProvider>

// Overload console.log function
console.log = jest.fn()


/** <== TESTS MUST GO UNDER THIS SECTION ==> */
test("Lert Button", () => {

    const { getByTestId } = render(
        <LertButton 
            testID={'button'}
            type="primary" 
            title={'Test'} 
            onPress={()=>{ console.log("I'm a Button") }} 
        />, 
        { 
            wrapper: wrapperComponent,
        }
    ); 

    fireEvent.press(getByTestId("button"))

    expect(console.log).toHaveBeenCalledWith("I'm a Button")
})