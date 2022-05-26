import { Text, View } from "react-native";

import Table from "~components/organisms/Table";
import LertText from '~components/atoms/LertText';
import Overlay from '~components/organisms/Overlay';
import LertInput from '~components/molecules/LertInput';
import * as textTypes from '~styles/constants/textTypes';

import Theme from '../../theme/theme';
import { useEffect, useState } from "react";
import { HStack, VStack } from "native-base";
import Dropdown from "~components/molecules/Dropdown";
import { AppDispatch } from "~store/store";
import { useDispatch, useSelector } from "react-redux";
import { allExpenseTypes } from "~store/expenseTypes/selectors";



const ExpensesTypes = () => {

    let example = [
        {Name: "Main"},
        {Name: "Secondary"}
    ]

    const [name, setName] = useState("");

    // Store Dispatcher
    const dispatch: AppDispatch = useDispatch();
    // Expenses - State
    const expenseTypes = useSelector(allExpenseTypes);


    return (
        <View>
            
            <LertText text="New Type of Expense" type={textTypes.display04} color={Theme.colors.text.primary} style={{paddingLeft:"10%", paddingTop:"6%"}}/>

            <Overlay maxWidth={"50%"} maxHeight={"50%"} buttonTitle="Create expense"> 
                <>
                    <HStack space={2} justifyContent="space-evenly">
                        <VStack alignItems={"flex-start"}>
                            <LertText text="Name" type={textTypes.heading} color={Theme.colors.text.primary}/>
                            <LertInput text={name} setText={setName} placeholder={"Name"}/>
                        </VStack>
                    </HStack>
                </>

            </Overlay>

            <LertText text="All Expenses Types" type={textTypes.display01} color={Theme.colors.text.primary} style={{paddingLeft:"10%", paddingTop:"4%"}}/>

            <Table headers={["Name"]} items={example} flexValues={[1]} amount={1}/>

        </View>
    )
};

export default ExpensesTypes;