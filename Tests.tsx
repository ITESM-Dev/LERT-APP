import { StyleSheet, View, Image } from 'react-native';
import { Text, Box } from 'native-base';

import LertButton from '~components/atoms/LertButton';

const Tests = () => {
    return (
        <View style={styles.container}>
            <View style={{
                flex: 2, 
                flexDirection: "row", 
                justifyContent: "center", 
                alignItems: "center"
            }}>
            <Image 
                style={styles.logo}
                source={require('./assets/ItesmDev_Transparente.png')}
            />
            <Image 
                style={{width: 320, height: 128, padding: 10}}
                source={require('./assets/IBM_logo.png')}
            />
            </View>
            {/* LertButton */}
            <View style={{height: 50, width: '100%', flexDirection: 'row'}}>
                <LertButton
                    title='Hola'
                    type={'primary'}
                    onPress={() => {}}
                    style={{
                        width: '20%'
                    }}	
                />
                <LertButton
                    title='Hola'
                    type={'secondary'}
                    onPress={() => {}}
                    style={{
                        width: '20%'
                    }}	
                />
                <LertButton
                    title='Hola'	
                    type={'terciary'}
                    onPress={() => {}}
                    style={{
                        width: '20%'
                    }}	
                />
                <LertButton
                    title='Hola'	
                    type={'danger'}	
                    onPress={() => {}}
                    style={{
                        width: '20%'
                    }}
                />
                <LertButton
                    title='Hola'	
                    type={'ghost'}
                    onPress={() => {}}	
                    style={{
                        width: '20%'
                    }}
                />
            </View>
            <Box {...box}>
                <Text style={styles.title}>Welcome to ItesmDev's LERT Prototype</Text>
            </Box>
        </View>
    )
}

const box = {
  flex: 1,
  bg: "#fff",
  alignItems: "center",
  justifyContent: "start",
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 320,
        height: 160,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#00367d"
    },
});

export default Tests;