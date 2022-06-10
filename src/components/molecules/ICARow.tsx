import React from "react";
import { FlatList, StyleSheet, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import { Box } from "native-base";

import LertText from "~components/atoms/LertText";
import TableItem from "~components/molecules/TableItem";

import theme from "~theme/theme";
import * as textTypes from '~styles/constants/textTypes';
import LertTag from "./LertTag";

type ICARowPropTypes = {
    items: any;
    icaInfo: Array<any>;
    flexValues: Array<number>;
    amount: number;
    originalObj: any;
    handleUpdate: (item: any) => void;
}

const headers = [
    "Year",
    "IDPlanning",
    "Country",
    "Dept",
    "FreqBill",
    "CC",
    "CityNamePerf",
    "CityNameReq",
    "RCityPerf",
    "RCityReq",
    "Division",
    "Major",
    "Minor",
    "Leru",
    "Description",
    "Nec",
    "TotalPlusTaxes",
    "ICA Core"
]

const ICARow = (props: ICARowPropTypes) => {

    const [open, setOpen] = React.useState(false)

    const firstRow = (items: string[]) => {
        const status = items[0] === "Active" 
            ? <LertTag title={"Active"} backgroundColor={theme.colors.alerts.successPrimary}/>
            : <LertTag title={"Inactive"} backgroundColor={theme.colors.alerts.errorPrimary}/>

        return [status, ...items.slice(1)]
    }
    

    return(
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() =>{
                    setOpen(!open);
                }}
            >
                <TableItem 
                    styles={{
                        backgroundColor: theme.colors.components.offWhite
                    }}
                    items={firstRow(props.items)}
                    flexValues={props.flexValues}
                    amount={props.amount}
                    originalObj={props.originalObj}
                    handleUpdate={props.handleUpdate}
                />
                
            </TouchableOpacity>
            {open && 
                <>          
                    <View style={{
                            flex: 1,
                            flexDirection: 'row', 
                            alignContent: 'stretch',  
                            justifyContent: 'space-around',
                            borderWidth: 0.1, 
                            borderColor: theme.colors.icons.primary,
                        }}
                    >
                        <FlatList 
                            style={{
                                flex:1, 
                                height:'fit-content', 
                                backgroundColor: theme.colors.components.offWhite, 
                                marginTop:'0%'
                            }}
                            data= { props.icaInfo }
                            renderItem={ ({ item, index }) => 
                                <View style={styles.GridViewContainer}>
                                    <LertText 
                                        style={{ flex: 1 }}
                                        text={headers[index]} 
                                        type={textTypes.label}
                                        color= {theme.colors.components.placeholderActive}
                                    />
                                    <LertText 
                                        style={{ flex: 1 }}
                                        text={item} 
                                        type={textTypes.body01}
                                    />
                                </View> 
                            }
                            numColumns={6}
                        />   

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
        borderLeftColor: theme.colors.icons.primary, 
        borderBottomColor: theme.colors.icons.primary,
        borderTop: theme.colors.icons.primary,
        borderLeftWidth: 0.5,
        borderButtonWidth:0.5,
    },
    GridViewContainer: {
        flex:1,
        paddingHorizontal:'2%',
        paddingVertical: '1%',
        backgroundColor: theme.colors.components.offWhite,
        justifyContent: 'space-around',
        flexWrap:'wrap',
        height:'fit-content',
        flexDirection:'column',
     },
})