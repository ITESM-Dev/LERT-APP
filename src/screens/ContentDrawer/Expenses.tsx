import { Text, View } from "react-native";

import Table from "~components/organisms/Table";
import LertText from '~components/atoms/LertText';
import Overlay from '~components/organisms/Overlay';
import LertInput from '~components/molecules/LertInput';
import * as textTypes from '~styles/constants/textTypes';
import Dropdown from "~components/molecules/Dropdown";

import Theme from '../../theme/theme';
import { useState } from "react";
import { HStack, VStack } from "native-base";

const dropdownTypes = [
    { label: 'First', value: 'first' },
    { label: 'Secondary', value: 'secondary' },
]

const Expenses = () => {

    let example = [
        {employeeMail: "user@ibm.com", Type: "Course", Cost:"1000", Date: "2022-02-10", ICA: "13D2L2", ICAManager: "manager@ibm.com", Administrator: "admin@ibm.com", Comment: "lent123"},
        {employeeMail: "user2@ibm.com", Type: "Course", Cost:"1500", Date: "2022-02-10", ICA: "96D5L3", ICAManager: "manager2@ibm.com", Administrator: "admin2@ibm.com", Comment: "lent321"},
    ]

    const [employeeMail, setEmployeeMail] = useState("");
    const [date, setDate] = useState("");
    const [cost, setCost] = useState(""); //Deben ser numeros pero lert input solo toma string
    const [comment, setComment] = useState("");
    const [ica, setIca] = useState("");
    const [type, setType] = useState("");

    return (
        <View>
            
            <LertText text="Expenses" type={textTypes.display04} color={Theme.colors.text.primary} style={{paddingLeft:"10%", paddingTop:"6%"}}/>

            <Overlay maxWidth={"50%"} maxHeight={"50%"} buttonTitle="Create Expense"> 
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

            <LertText text="All Expenses" type={textTypes.display01} color={Theme.colors.text.primary} style={{paddingLeft:"10%", paddingTop:"4%"}}/>

            <Table headers={["Employee Mail", "Type", "Cost", "Date", "ICA", "ICA Manager", "Administrator", "Comment"]} items={example} flexValues={[3, 1, 1, 1, 1, 2, 2, 2]}/>

        </View>
    )
};

export default Expenses;