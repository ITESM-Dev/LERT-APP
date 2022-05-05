import { View } from "react-native";

import LertText from '~components/atoms/LertText';
import LertInput from '~components/molecules/LertInput';
import * as textTypes from '~styles/constants/textTypes';

import Theme from '../../theme/theme';
import { useState } from "react";
import { HStack, VStack } from "native-base";
import LertButton from "~components/atoms/LertButton";

const EditManagerInformation = () => {

    const [email, setEmail] = useState("");

    return (
        <View>
            <VStack paddingLeft={"12%"} paddingRight={"12%"}>
            <LertText text="Edit Manager Information" type={textTypes.display04} color={Theme.colors.text.primary} style={{paddingTop:"6%"}}/>
                <HStack paddingTop={"5%"} justifyContent={"space-evenly"}>
                    <LertInput text={email} setText={setEmail} placeholder={"IBM email"} style={{width:"30%"}}/>
                    <LertButton title="Log as Manager" type="terciary" onPress={() => {}}/>
                </HStack>
                <HStack paddingTop={"8%"} justifyContent={"space-around"}>
                    <LertButton title="Return to your Session" type="terciary" onPress={() => {}}/>
                    <LertButton title="Go to the Employees Section of this Manager" type="terciary" onPress={() => {}}/>
                </HStack>
                <HStack paddingTop={"5%"} justifyContent={"space-around"}>
                    <LertButton title="Go to the Expenses Section of this Manager" type="terciary" onPress={() => {}}/>
                </HStack>
            </VStack>
        </View>
    )
};

export default EditManagerInformation;