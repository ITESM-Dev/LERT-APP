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

const ICAS = () => {
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

            <Table headers={["ICA Performing", "ICA Requesting", "Year", "ID Planning", "ICA Owner", "Budget", "Country", "Dept", "Frequency Bill", "CC", "City Name Perf", 
            "City Name Req", "R City Perf", "R City Req", "Division", "Major" ]} items={example} flexValues={[1, 1, 2, 1, 2, 2]}/>
        </View>
    )
};

export default ICAS;