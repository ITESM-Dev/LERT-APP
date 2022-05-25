import { render } from '@testing-library/react-native'
import LertButton from '~components/atoms/LertButton'

test("Try test 2 + 2", () => {
    render(<LertButton title='test' type='primary' onPress={() => console.log("Test")}/>); 
    expect(2 + 2).toBe(4)
})