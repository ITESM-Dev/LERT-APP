import { useState } from "react";
import { useSelector } from "react-redux";
import { Box, VStack, HStack } from "native-base" ;

import { allCurrentPeriods } from "~store/currentPeriod";

import LertText from "~components/atoms/LertText";
import Dropdown from "~components/molecules/Dropdown";
import LertInput from "~components/molecules/LertInput";
import Overlay from "~components/organisms/Overlay";
import Table from "~components/organisms/Table";
import LertScreen from "~components/organisms/LertScreen";

import Theme from '~theme/theme';
import * as textTypes from '~styles/constants/textTypes';
import { CurrentPeriodForm, useCreateCurrentPeriodMutation, useGetCurrentPeriodsQuery } from "~store/api";

const TABLE_HEADERS = ["Quarter", "Year", "Key", "Status"]
const dropdownTypes = [
    { label: 'Q1', value: '1' },
    { label: 'Q2', value: '2' },
    { label: 'Q3', value: '3' },
    { label: 'Q4', value: '4' },
]

const CurrentPeriod = () =>{

    const [year, setYear] = useState("");
    const [key, setKey] = useState("");
    const [quarter, setQuarter] = useState("");
    const [error, setError] = useState<string | null>(null)

    const resetForm = () => {
        setYear("")
        setKey("")
        setQuarter("")
        setError(null)
    }

    // Current Period - State
    const currentPeriods = useSelector(allCurrentPeriods);

    // API Calls
    const [createCurrentPeriod, response] = useCreateCurrentPeriodMutation();
    
    // Auto-refetch
    useGetCurrentPeriodsQuery();

    const handleSubmit = () => {
        const currentPeriodForm: CurrentPeriodForm = {
            quarter: quarter,
            key: key,
            year: year,
            status: "Inactive"
        }

        createCurrentPeriod(currentPeriodForm)
            .unwrap()
            .then(() => resetForm())
            .catch(error => setError(
                "Something went wrong, plese try again"
            ))
    }

    return (
        <LertScreen>
            
            <LertText
                text="Current Period"
                type={textTypes.display04} />

                <Overlay 
                    minWidth={"50%"} 
                    maxHeight={"60%"} 
                    buttonTitle="Add Period"
                    error={error}
                    setError={setError}
                    handleSubmit={handleSubmit}
                > 
                    <>
                        <HStack space={2} justifyContent="space-evenly">
                            <VStack alignItems={"flex-start"}>
                                <LertText 
                                    text="Quarter" 
                                    type={textTypes.heading} 
                                    color={Theme.colors.text.primary} 
                                    style={{paddingTop:"10%"}}
                                />
                                <Dropdown 
                                    placeholder="Quarter"
                                    items={dropdownTypes} 
                                    value={quarter} 
                                    setValue={setQuarter}
                                />
                                <LertText 
                                    text="Key" 
                                    type={textTypes.heading} 
                                    color={Theme.colors.text.primary} 
                                    style={{paddingTop:"10%"}}
                                />
                                <LertInput 
                                    text={key} 
                                    setText={setKey} 
                                    placeholder={"Key"}
                                />
                            </VStack>
                            <VStack alignItems={"flex-start"}>
                                <LertText 
                                    text="Year" 
                                    type={textTypes.heading} 
                                    color={Theme.colors.text.primary} 
                                    style={{paddingTop:"10%"}}
                                />
                                <LertInput 
                                    text={year} 
                                    setText={setYear} 
                                    placeholder={"Year"}
                                />
                            </VStack>
                        </HStack>
                    </>
                </Overlay>

            <Box style={{ marginTop: "3%" }}>
                <Table 
                    headers={TABLE_HEADERS} 
                    items={currentPeriods} 
                    flexValues={[1, 1, 1, 1]}
                />
            </Box>

        </LertScreen>
    );
}

export default CurrentPeriod;