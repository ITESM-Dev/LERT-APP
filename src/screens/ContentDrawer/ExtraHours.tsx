import { Text, View } from "react-native";

import Table from "~components/organisms/Table";
import LertText from '~components/atoms/LertText';
import Overlay from '~components/organisms/Overlay';
import LertInput from '~components/molecules/LertInput';
import * as textTypes from '~styles/constants/textTypes';

import Theme from '../../theme/theme';
import { useState } from "react";
import { HStack, VStack } from "native-base";
import Dropdown from "~components/molecules/Dropdown";

const dropdownCountries = [
    { label: 'México', value: 'mexico' },
    { label: 'India', value: 'india' },
]

const dropdownTypes = [
    { label: 'First', value: 'first' },
    { label: 'Secondary', value: 'secondary' },
]

const ExtraHours = () => {

    let example = [
        {Type: 1, Band: 2, Country: "México", Rate: 5, DateOfStart:"22/01/18", DateOfFinish:"22/01/18"},
        {Type: 2, Band: 2, Country: "Culiacan", Rate: 4, DateOfStart:"22/03/18", DateOfFinish:"22/04/22"},
    ]

    const [type, setType] = useState("");
    const [band, setBand] = useState("");
    const [country, setCountry] = useState("");
    const [rate, setRate] = useState("");
    const [dateStart, setDateStart] = useState("");
    const [dateFinish, setDateFinish] = useState("");

    return (
        <View>

            <LertText text="Extra Hours" type={textTypes.display04} color={Theme.colors.text.primary} style={{paddingLeft:"10%", paddingTop:"6%"}}/>

            <Overlay maxWidth={"50%"} maxHeight={"50%"} buttonTitle="Add Extra Hour"> 
                <>
                    <HStack space={2} justifyContent="space-evenly">
                        <VStack alignItems={"flex-start"}>
                            <LertText text="Country" type={textTypes.heading} color={Theme.colors.text.primary}/>
                            <Dropdown placeholder="Country" items={dropdownCountries}/>
                            <LertText text="Rate" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={rate} setText={setRate} placeholder={"Rate"}/>
                            <LertText text="Type" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <Dropdown placeholder="Type" items={dropdownTypes}/>
                        </VStack>
                        <VStack alignItems={"flex-start"}>
                            <LertText text="Band" type={textTypes.heading} color={Theme.colors.text.primary}/>
                            <LertInput text={band} setText={setBand} placeholder={"Band"}/>
                            <LertText text="Start Date" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={dateStart} setText={setDateStart} placeholder={"Date of Start"}/>
                            <LertText text="Finish Date" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={dateFinish} setText={setDateFinish} placeholder={"Date of Finish"}/>
                        </VStack>
                    </HStack>
                </>

            </Overlay>

            <LertText text="Extra Hours List" type={textTypes.display01} color={Theme.colors.text.primary} style={{paddingLeft:"10%", paddingTop:"4%"}}/>

            <Table headers={["Type", "Band", "Country", "Rate", "Date of Start", "Date of Finish"]} items={example} flexValues={[1, 1, 2, 1, 2, 2]}/>
        </View>
    )
};

export default ExtraHours;