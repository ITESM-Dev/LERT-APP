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
import { AppDispatch } from "~store/store";
import { useDispatch, useSelector } from "react-redux";

import { allExtraHours } from "~store/extraHours/selectors";
import LertScreen from "~components/organisms/LertScreen";
import { ExtraHourForm, useCreateExtraHourTypeMutation } from "~store/api";

const dropdownCountries = [
    { label: 'México', value: 'Mexico' },
]

const TABLE_HEADERS = ["Type", "Band", "Country", "Rate", "Date of Start", "Date of Finish"]

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

    return (
        <LertScreen>

            <LertText text="Extra Hours" type={textTypes.display04} color={Theme.colors.text.primary} style={{paddingLeft:"10%", paddingTop:"6%"}}/>

            <Overlay 
                maxWidth={"50%"}
                maxHeight={"50%"} 
                buttonTitle="Add Extra Hour"
                handleSubmit={handleSubmit}
            > 
                <>
                    <HStack space={2} justifyContent="space-evenly">
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

            <LertText text="Extra Hours List" type={textTypes.display01} color={Theme.colors.text.primary} style={{paddingLeft:"10%", paddingTop:"4%"}}/>

            <Table 
                headers={TABLE_HEADERS} 
                items={example} 
                flexValues={[1, 1, 2, 1, 2, 2]}
            />
        </LertScreen>
    )
};

export default ExtraHours;