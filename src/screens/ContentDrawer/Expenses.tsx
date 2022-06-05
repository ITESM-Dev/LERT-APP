import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { HStack, VStack } from "native-base";

import { AppDispatch, store } from "~store/store";
import { setAllExpenses } from "~store/expenses";
import { allExpenses } from "~store/expenses/selectors";

import Table from "~components/organisms/Table";
import LertText from '~components/atoms/LertText';
import Overlay from '~components/organisms/Overlay';
import LertInput from '~components/molecules/LertInput';
import * as textTypes from '~styles/constants/textTypes';
import Dropdown from "~components/molecules/Dropdown";

import Theme from '../../theme/theme';
import LertScreen from "~components/organisms/LertScreen";

const dropdownTypes = [
    { label: 'First', value: 'first' },
    { label: 'Secondary', value: 'secondary' },
]

const TABLE_HEADERS = ["Employee Mail", "Type", "Cost", "Date", "ICA", "ICA Manager", "Administrator", "Comment"]

const Expenses = () => {
    let example = [
        { 
            employeeMail: "user@ibm.com", 
            type: "Course", 
            cost:"1000", 
            date: "2022-02-10", 
            ICA: "13D2L2", 
            ICAManager: "manager@ibm.com", 
            administrator: "admin@ibm.com", 
            comment: "lent123",
            id: '1',
        },
        {
            employeeMail: "user2@ibm.com", 
            type: "Course", 
            cost:"1500", 
            date: "2022-02-10", 
            ICA: "96D5L3", 
            ICAManager: "manager2@ibm.com", 
            administrator: "admin2@ibm.com", 
            comment: "lent321",
            id: 2,
        },
    ]

    const [employeeMail, setEmployeeMail] = useState("");
    const [date, setDate] = useState("");
    const [cost, setCost] = useState(""); //Deben ser numeros pero lert input solo toma string
    const [comment, setComment] = useState("");
    const [ica, setIca] = useState("");
    const [type, setType] = useState("");

    // Store Dispatcher
    const dispatch: AppDispatch = useDispatch()
    // Expenses - State
    const expenses = useSelector(allExpenses)

    useEffect(() => {
        if (expenses.length === 0) {
            dispatch(setAllExpenses(example))
        }   
    }, [expenses])

    return (
        <LertScreen>
            
            <LertText text="Expenses" type={textTypes.display04} color={Theme.colors.text.primary}/>

            <Overlay 
                minWidth={"50%"}
                minHeight={"50%"}
                buttonTitle="Create Expense" 
                handleSubmit={() => {}}
                buttonType={"primary"}            
            > 
                <>
                    <HStack space={2} justifyContent="space-evenly">
                        <VStack alignItems={"flex-start"}>
                            <LertText text="Employee Mail" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={employeeMail} setText={setEmployeeMail} placeholder={"Employee Mail"}/>
                            <LertText text="Date" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={date} setText={setDate} placeholder={"Date"}/>
                            <LertText text="Cost" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={cost} setText={setCost} placeholder={"USD Cost"}/>
                        </VStack>
                        <VStack alignItems={"flex-start"}>
                            <LertText text="Comment" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={comment} setText={setComment} placeholder={"Comment"}/>
                            <LertText text="ICA" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={ica} setText={setIca} placeholder={"ICA"}/>
                            <LertText text="Type" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <Dropdown placeholder="Type" items={dropdownTypes}/>
                        </VStack>
                    </HStack>
                </>

            </Overlay>

            <Table 
                headers={TABLE_HEADERS} 
                items={expenses} 
                flexValues={[3, 1, 1, 1, 1, 2, 2, 2]}
            />

        </LertScreen>
    )
};

export default Expenses;