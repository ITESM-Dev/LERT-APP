import { Text, View } from "react-native";

import Table from "~components/organisms/Table";
import LertText from '~components/atoms/LertText';
import Overlay from '~components/organisms/Overlay';
import LertInput from '~components/molecules/LertInput';
import * as textTypes from '~styles/constants/textTypes';
import Dropdown from "~components/molecules/Dropdown";

import Theme from '../../theme/theme';
import { useState } from "react";
import { Box, HStack, VStack } from "native-base";
import { AppDispatch } from "~store/store";
import { useDispatch, useSelector } from "react-redux";
import { allBandTypes } from "~store/bandTypes/selectors";
import LertScreen from "~components/organisms/LertScreen";
import { BandTypeForm, useCreateBandTypeMutation, useGetBandTypesQuery } from "~store/api";
import { useEffect } from "react";
import { dropdownCountries } from "~utils/constants";

const TABLE_HEADERS = ["Type", "Country", "Band", "Rate", "Date of Start", "Date of Finish"]

const Types = () => {

    const [type, setType] = useState("");
    const [country, setCountry] = useState("");
    const [band, setBand] = useState("");
    const [rate, setRate] = useState("");
    const [startDate, setStartDate] = useState("");
    const [finishDate, setFinishDate] = useState("");

    // Band Types - State
    const bandTypes = useSelector(allBandTypes);

    // API Calls
    const [createBandType, response] = useCreateBandTypeMutation()

    // Subscribe to Get BandTypes API Call
    useGetBandTypesQuery()

    const handleSubmit = () => {

        const bandTypeForm: BandTypeForm = {
            type: type,
            band: band,
            country: country,
            dateToStart: startDate,
            dateToFinish: finishDate,
            yearlyRate: rate
        }

        createBandType(bandTypeForm)
            .unwrap()
            .catch(error => alert(error))
    }

    return (
        <LertScreen>
            
            <LertText text="Types" type={textTypes.display04} color={Theme.colors.text.primary}/>

            <Overlay    
                minWidth={"50%"} 
                minHeight={"50%"} 
                buttonTitle="Create Band Type"
                handleSubmit={handleSubmit}
                buttonType={"primary"}
            > 
                <>
                    <HStack space={2} justifyContent="space-evenly">
                        <VStack alignItems={"flex-start"}>
                            <LertText 
                            text="Type" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput 
                                text={type} 
                                setText={setType} 
                                placeholder={"Type"}
                            />
                            <LertText 
                                text="Band" 
                                type={textTypes.heading} 
                                color={Theme.colors.text.primary} 
                                style={{paddingTop:"10%"}}
                            />
                            <LertInput 
                                text={band} 
                                setText={setBand} 
                                placeholder={"Band Number"}
                            />
                            <LertText 
                                text="Rate" 
                                type={textTypes.heading} 
                                color={Theme.colors.text.primary} 
                                style={{paddingTop:"10%"}}
                            />
                            <LertInput 
                                text={rate} 
                                setText={setRate} 
                                placeholder={"Rate"}
                            />
                        </VStack>
                        <VStack alignItems={"flex-start"}>
                            <LertText 
                                text="Start Date" 
                                type={textTypes.heading} 
                                color={Theme.colors.text.primary} 
                                style={{paddingTop:"10%"}}
                            />
                            <LertInput 
                                text={startDate} 
                                setText={setStartDate} 
                                placeholder={"Date of Start"}
                            />
                            <LertText 
                                text="Finish Date" 
                                type={textTypes.heading} 
                                color={Theme.colors.text.primary} 
                                style={{paddingTop:"10%"}}
                            />
                            <LertInput 
                                text={finishDate} 
                                setText={setFinishDate} 
                                placeholder={"Date of Finish"}
                            />
                            <LertText 
                                text="Country" 
                                type={textTypes.heading} 
                                color={Theme.colors.text.primary} 
                                style={{paddingTop:"10%"}}
                            />
                            <Dropdown
                                value={country}
                                setValue={setCountry}
                                placeholder={"Country"} 
                                items={dropdownCountries}                            
                            />
                        </VStack>
                    </HStack>
                </>

            </Overlay>

            <Box marginTop={30} >
                <Table 
                    headers={TABLE_HEADERS} 
                    items={bandTypes} 
                    flexValues={[1, 1, 1, 1, 2, 2]}
                />
            </Box>

        </LertScreen>
    )
};

export default Types;