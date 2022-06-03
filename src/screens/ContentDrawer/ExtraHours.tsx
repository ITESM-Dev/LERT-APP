import { Text, View } from "react-native";

import Table from "~components/organisms/Table";
import LertText from '~components/atoms/LertText';
import Overlay from '~components/organisms/Overlay';
import LertInput from '~components/molecules/LertInput';
import * as textTypes from '~styles/constants/textTypes';

import Theme from '../../theme/theme';
import { useState } from "react";
import { Box, HStack, VStack } from "native-base";
import Dropdown from "~components/molecules/Dropdown";
import { AppDispatch } from "~store/store";
import { useDispatch, useSelector } from "react-redux";

import { allExtraHours } from "~store/extraHours/selectors";
import LertScreen from "~components/organisms/LertScreen";
import { ExtraHourForm, useCreateExtraHourTypeMutation } from "~store/api";
import { useEffect } from "react";
import { ExtraHourType, setExtraHours } from "~store/extraHours";

const dropdownCountries = [
    { label: 'México', value: 'Mexico' },
]

const TABLE_HEADERS = ["Type", "Band", "Country", "Rate", "Date of Start", "Date of Finish"]

const ExtraHours = () => {

    let example: ExtraHourType[] = [
        {
            id: "1", 
            band: "2", 
            country: "México", 
            rate: 500, 
            startDate: "22-01-2018", 
            endDate: "22-01-2018"
        },
        {
            id: "2", 
            band: "3", 
            country: "México", 
            rate: 700, 
            startDate: "22-01-2018", 
            endDate: "22-01-2018"
        },
        {
            id: "3", 
            band: "2", 
            country: "México", 
            rate: 500, 
            startDate: "22-01-2018", 
            endDate: "22-01-2018"
        },
        {
            id: "4", 
            band: "3", 
            country: "México", 
            rate: 700, 
            startDate: "22-01-2018", 
            endDate: "22-01-2018"
        },
        {
            id: "5", 
            band: "2", 
            country: "México", 
            rate: 500, 
            startDate: "22-01-2018", 
            endDate: "22-01-2018"
        },
        {
            id: "6", 
            band: "3", 
            country: "México", 
            rate: 700, 
            startDate: "22-01-2018", 
            endDate: "22-01-2018"
        }
    ]

    const [type, setType] = useState("");
    const [band, setBand] = useState("");
    const [country, setCountry] = useState("");
    const [rate, setRate] = useState("");
    const [dateStart, setDateStart] = useState("");
    const [dateFinish, setDateFinish] = useState("");

    // Store Dispatcher
    const dispatch: AppDispatch = useDispatch();

    // Extra Hours - State
    const extraHours = useSelector(allExtraHours);

    // API Calls
    const [createExtraHourType, response] = useCreateExtraHourTypeMutation()

    const handleSubmit = () => {

        const extraHourForm: ExtraHourForm = {
            type: type,
            band: band,
            country: country,
            rate: rate,
            dateToStart: dateStart,
            dateToFinish: dateFinish,
        }

        createExtraHourType(extraHourForm).unwrap()
            .then(payload => alert("Nice"))
            .catch(error => alert("Error"))
    }

    useEffect(() => {
        dispatch(setExtraHours(example))
    }, [])

    return (
        <LertScreen>

            <LertText 
                text="Extra Hours" 
                type={textTypes.display04} 
                color={Theme.colors.text.primary} 
            />

            <Overlay 
                maxWidth={"50%"}
                maxHeight={"50%"} 
                buttonTitle="Add Extra Hour"
                handleSubmit={handleSubmit}
            > 
                <>
                    <HStack 
                        space={2} 
                        justifyContent="space-evenly"
                    >
                        <VStack alignItems={"flex-start"}>
                            <LertText 
                                text="Country" 
                                type={textTypes.heading} 
                                color={Theme.colors.text.primary}
                            />
                            <Dropdown 
                                placeholder="Country" 
                                items={dropdownCountries}
                                value={country}
                                setValue={setCountry}
                            />
                            <LertText 
                                text="Rate" 
                                type={textTypes.heading} 
                                color={Theme.colors.text.primary} 
                                style={{ paddingTop:"10%" }}
                            />
                            <LertInput 
                                text={rate} 
                                setText={setRate} 
                                placeholder={"Rate"}
                            />
                            <LertText 
                                text="Type" 
                                type={textTypes.heading} 
                                color={Theme.colors.text.primary} 
                                style={{ paddingTop:"10%" }}
                            />
                            <LertInput 
                                text={type} 
                                setText={setType} 
                                placeholder={"Type"}
                            />
                        </VStack>
                        <VStack alignItems={"flex-start"}>
                            <LertText 
                                text="Band" 
                                type={textTypes.heading} 
                                color={Theme.colors.text.primary}
                            />
                            <LertInput 
                                text={band} 
                                setText={setBand} 
                                placeholder={"Band"}
                            />
                            <LertText 
                                text="Start Date" 
                                type={textTypes.heading} 
                                color={Theme.colors.text.primary} 
                                style={{paddingTop:"10%"}}
                            />
                            <LertInput 
                                text={dateStart} 
                                setText={setDateStart} 
                                placeholder={"Date of Start"}
                            />
                            <LertText 
                                text="Finish Date" 
                                type={textTypes.heading} 
                                color={Theme.colors.text.primary} 
                                style={{paddingTop:"10%"}}
                            />
                            <LertInput 
                                text={dateFinish} 
                                setText={setDateFinish} 
                                placeholder={"Date of Finish"}
                            />
                        </VStack>
                    </HStack>
                </>

            </Overlay>

            <Box marginTop={"5%"} >
                <Table 
                    headers={TABLE_HEADERS} 
                    items={extraHours} 
                    flexValues={[1, 1, 2, 1, 2, 2]}
                />
            </Box>
        </LertScreen>
    )
};

export default ExtraHours;