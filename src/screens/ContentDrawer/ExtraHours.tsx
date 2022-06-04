import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Box, HStack, VStack } from "native-base";

import { AppDispatch } from "~store/store";
import { allExtraHours } from "~store/extraHours/selectors";
import { 
    ExtraHourForm, 
    useCreateExtraHourTypeMutation, 
    useGetExtraHourTypesQuery 
} from "~store/api";

import LertText from '~components/atoms/LertText';
import LertInput from '~components/molecules/LertInput';
import Dropdown from "~components/molecules/Dropdown";
import Overlay from '~components/organisms/Overlay';
import Table from "~components/organisms/Table";
import LertScreen from "~components/organisms/LertScreen";

import Theme from '../../theme/theme';
import * as textTypes from '~styles/constants/textTypes';
import { dropdownCountries } from "~utils/constants";

const TABLE_HEADERS = ["Type", "Band", "Country", "Rate", "Date of Start", "Date of Finish"]



const ExtraHours = () => {

    const [type, setType] = useState("");
    const [band, setBand] = useState("");
    const [country, setCountry] = useState("");
    const [rate, setRate] = useState("");
    const [dateStart, setDateStart] = useState("");
    const [dateFinish, setDateFinish] = useState("");

    // Extra Hours - State
    const extraHours = useSelector(allExtraHours);

    // API Calls
    const [createExtraHourType, response] = useCreateExtraHourTypeMutation()

    // Auto-fetch data
    useGetExtraHourTypesQuery()
    const [error, setError] = useState(null)

    // Function for clearing out inputs and error state
    const resetForm = () => {
        setType("")
        setBand("")
        setCountry("")
        setRate("")
        setDateStart("")
        setDateFinish("")
        setError(null)
    }

    const handleSubmit = () => {

        const extraHourForm: ExtraHourForm = {
            type: type,
            band: band,
            country: country,
            rate: rate,
            dateToStart: dateStart,
            dateToFinish: dateFinish,
        }

        createExtraHourType(extraHourForm)
            .unwrap()
            .then(() => resetForm())
            .catch(error => setError(
                "Something went wrong, please try again"
            ))
    }

    return (
        <LertScreen>

            <LertText 
                text="Extra Hours" 
                type={textTypes.display04} 
                color={Theme.colors.text.primary} 
            />

            <Overlay 
                maxWidth={"60%"}
                maxHeight={"60%"} 
                error={error}
                setError={setError}
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