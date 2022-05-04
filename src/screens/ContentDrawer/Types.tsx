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

const Types = () => {

    let example = [
        {Type: 1, Country: "México", Band: 2,  Rate: 5, DateOfStart:"22/01/18", DateOfFinish:"22/01/18"},
        {Type: 1, Country: "India", Band: 7,  Rate: 8, DateOfStart:"22/02/18", DateOfFinish:"22/04/03"},
    ]

    const [type, setType] = useState("");
    const [country, setCountry] = useState("");
    const [band, setBand] = useState("");
    const [rate, setRate] = useState("");
    const [startDate, setStartDate] = useState("");
    const [finishDate, setFinishDate] = useState("");

    return (
        <View>
            
            <LertText text="Types" type={textTypes.display04} color={Theme.colors.text.primary} style={{paddingLeft:"10%", paddingTop:"6%"}}/>

            <Overlay maxWidth={"50%"} maxHeight={"50%"} buttonTitle="Create Expense"> 
                <>
                    <HStack space={2} justifyContent="space-evenly">
                        <VStack alignItems={"flex-start"}>
                            <LertText text="Type" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={type} setText={setType} placeholder={"Country"}/>
                            <LertText text="Band" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={band} setText={setBand} placeholder={"Band Number"}/>
                            <LertText text="Rate" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={rate} setText={setRate} placeholder={"Rate"}/>
                        </VStack>
                        <VStack alignItems={"flex-start"}>
                            <LertText text="Start Date" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={startDate} setText={setStartDate} placeholder={"Date of Start"}/>
                            <LertText text="Finish Date" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={finishDate} setText={setFinishDate} placeholder={"Date of Finish"}/>
                        </VStack>
                    </HStack>
                </>

            </Overlay>

            <LertText text="Types List" type={textTypes.display01} color={Theme.colors.text.primary} style={{paddingLeft:"10%", paddingTop:"4%"}}/>

            <Table headers={["Type", "Country", "Band", "Rate", "Date of Start", "Date of Finish"]} items={example} flexValues={[1, 1, 1, 1, 2, 2]}/>

        </View>
    )
};

export default Types;