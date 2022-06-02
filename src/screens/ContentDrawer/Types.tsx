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
import { AppDispatch } from "~store/store";
import { useDispatch, useSelector } from "react-redux";
import { allBandTypes } from "~store/bandTypes/selectors";
import LertScreen from "~components/organisms/LertScreen";
import { BandTypeForm, useCreateBandTypeMutation } from "~store/api";

const dropdownCountries = [
    { label: 'México', value: 'mexico' },
]


const TABLE_HEADERS = ["Type", "Country", "Band", "Rate", "Date of Start", "Date of Finish"]

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

    // Store Dispatcher
    const dispatch: AppDispatch = useDispatch();

    // Band Types - State
    const bandTypes = useSelector(allBandTypes);

    // API Calls
    const [createBandType, response] = useCreateBandTypeMutation()

    const handleSubmit = () => {

        const bandTypeForm: BandTypeForm = {
            type: type,
            band: band,
            country: country,
            dateToStart: startDate,
            dateToFinish: finishDate,
            yearlyRate: rate
        }

        createBandType(bandTypeForm).unwrap()
            .then(payload => alert("Nice"))
            .catch(error => alert(response))
    }

    return (
        <LertScreen>
            
            <LertText text="Types" type={textTypes.display04} color={Theme.colors.text.primary}/>

            <Overlay    
                maxWidth={"50%"} 
                maxHeight={"50%"} 
                buttonTitle="Create Band Type"
                handleSubmit={handleSubmit}
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

            <LertText text="Types List" type={textTypes.display01} color={Theme.colors.text.primary}/>

            <Table 
                headers={TABLE_HEADERS} 
                items={example} 
                flexValues={[1, 1, 1, 1, 2, 2]}
            />

        </LertScreen>
    )
};

export default Types;