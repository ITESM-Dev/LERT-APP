import { Item } from "@react-stately/collections";
import { Box, Card, StatusBar } from "native-base";
import sizes from "native-base/lib/typescript/theme/base/sizes";
import React from "react";
import { FlatList, StyleSheet,  View, Platform } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import LertText from "~components/atoms/LertText";
import Table from "~components/organisms/Table"
import TableItem from "./TableItem";
import * as textTypes from '~styles/constants/textTypes';
import Theme from '~theme/theme';
import theme from "~theme/theme";
import LertButton from "~components/atoms/LertButton";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Overlay } from "native-base/lib/typescript/components/primitives";
import { render } from "@testing-library/react-native";
import { color } from "react-native-reanimated";



type ICARowPropTypes = {
    items: any;
    icaInfo: Array<any>;
    flexValues: Array<number>;
    amount: number;
    overlay: Array<any>;
   
}

const extractValues = (myData: any) => {
    let values: any = [];
    const objectArray = Object.entries(myData);
    objectArray.forEach(([key, value]) => {
        values.push(value);
    })
    console.log(values);
    return values;
}

const ICARow = (props: ICARowPropTypes) => {
    const [open, setOpen] = React.useState(false)
    return(
        <View style={styles.container}>
            <TouchableOpacity

                onPress={() =>{
                    setOpen(!open);
                    console.log(extractValues(props.items))
                }}
            >
                <TableItem 
                    styles={{ 
                        borderBottomColor:theme.colors.icons.primary, 
                        borderRightColor: theme.colors.icons.primary,
                        borderRightWidth: 0.1, 
                        backgroundColor: theme.colors.components.offWhite
                        }}
                    items={extractValues(props.items)}
                    flexValues={props.flexValues}
                    amount={props.amount}
                />
                
            </TouchableOpacity>
            {open && 
                <>          
                    <View style={{flexDirection:'column', alignContent:'stretch',  borderWidth: 0.1, borderColor: theme.colors.icons.primary}}>
                        <Box style={{flexDirection:'row'}}>
                            <FlatList 
                                style={{height:'fit-content', backgroundColor: theme.colors.components.offWhite, flex:1, marginTop:'0%'}}
                                data= { props.icaInfo }
                                //extraData= {props.icaHeaders}
                                renderItem={ ({item}) => 
                                    <View style={styles.GridViewContainer}>
                                        <LertText 
                                            style={{ marginLeft:'12%'}}
                                            text={item.header} type={textTypes.label}
                                            color= {theme.colors.components.placeholderActive}
                                        />
                                        <LertText 
                                            style={{ marginLeft:'15%'}}
                                            text={item.data} 
                                            type={textTypes.paragraphComponents}/>
                                    </View> }
                                numColumns={5}
                            />

                        <Box style={{flexDirection:'column', alignContent: 'space-between', backgroundColor: theme.colors.components.offWhite}}>
                            {props.overlay.map(rowOverlay =>{
                                return(
                                    <View style={{marginHorizontal: '10%', marginRight: '5%'}}>
                                        {rowOverlay}
                                    </View>
                                )
                            })}                  
                            
                                                
                                </Box>    

                        </Box>   

                    </View>
                </>
            }
        </View>
    )
};
export default ICARow;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        //justifySelf: '',.
       // flexWrap:'wrap',
       // minHeight:'fit-content',
        borderLeftColor: theme.colors.icons.primary, 
        borderBottomColor: theme.colors.icons.primary,
        borderTop: theme.colors.icons.primary,
        borderLeftWidth: 0.5,
        borderButtonWidth:0.5,

        
    },


    cardContainer:{
        flex:1,
        backgroundColor: " theme.colors.components.offWhite", 
        //paddingLeft:'2%',
        paddingBottom:'1%',
        alignContent: 'flex-start',
        alignItems: 'stretch',
        flexWrap:'wrap',
        borderBottomColor: theme.colors.icons.primary,
        borderRightColor: theme.colors.icons.primary,
        //borderBottomtWidth: 0.5,
        

    },
    GridViewContainer: {
        flex:1,
        paddingTop:'1%',
        backgroundColor: " theme.colors.components.offWhite", 
        //paddingLeft:'2%',
        paddingBottom:'1%',
        marginBottom: '0%',
        alignContent: 'stretch',
        alignItems: 'stretch',
        flexWrap:'wrap',
        height:'fit-content',
        flexDirection:'column',
     },

     
 
})