import { useState } from "react";
import { useSelector } from "react-redux";
import { Box, VStack, HStack } from "native-base" ;

import { allCurrentPeriods, CurrentPeriodType } from "~store/currentPeriod";

import LertText from "~components/atoms/LertText";
import Dropdown from "~components/molecules/Dropdown";
import LertInput from "~components/molecules/LertInput";
import Overlay from "~components/organisms/Overlay";
import Table from "~components/organisms/Table";
import LertScreen from "~components/organisms/LertScreen";

import Theme from '~theme/theme';
import * as textTypes from '~styles/constants/textTypes';
import { CurrentPeriodForm, useCreateCurrentPeriodMutation, useGetCurrentPeriodsQuery, useUpdateCurrentPeriodMutation } from "~store/api";

const TABLE_HEADERS = ["Quarter", "Year", "Key", "Status"]
const dropdownTypes = [
    { label: 'Q1', value: '1' },
    { label: 'Q2', value: '2' },
    { label: 'Q3', value: '3' },
    { label: 'Q4', value: '4' },
]

const CurrentPeriod = () =>{

    const [id, setId] = useState("")
    const [year, setYear] = useState("");
    const [key, setKey] = useState("");
    const [quarter, setQuarter] = useState("");

    const [isUpdate, setIsUpdate] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const [error, setError] = useState<string | null>(null)

    // Current Period - State
    const currentPeriods = useSelector(allCurrentPeriods);
    
    // Auto-refetch
    const { isLoading } = useGetCurrentPeriodsQuery();

    // API Calls
    const [createCurrentPeriod] = useCreateCurrentPeriodMutation();
    const [updateCurrentPeriod] = useUpdateCurrentPeriodMutation();

    const resetForm = () => {
        setId("")
        setYear("")
        setKey("")
        setQuarter("")
        setError(null)
    }

    const handleSubmit = () => {
        const currentPeriodForm: CurrentPeriodForm = {
            id: id,
            quarter: quarter,
            key: key,
            year: year,
            status: "Inactive"
        }

        if (isUpdate) {
            updateCurrentPeriod(currentPeriodForm)
                .unwrap()
                .then(() => {
                    resetForm()
                    setIsUpdate(false)
                })
                .catch(_ =>  {
                    resetForm()
                    setIsUpdate(false)
                    setError(
                        "Something went wrong, please try again"
                    )
                })  
            return
        }
        createCurrentPeriod(currentPeriodForm)
            .unwrap()
            .then(() => resetForm())
            .catch(_ => setError(
                "Something went wrong, plese try again"
            ))
    }

    const handleUpdate = (item: CurrentPeriodType) => {
        setId(item.id)
        setYear(item.id)
        setKey(item.key)
        setQuarter(item.quarter)
        
        setIsUpdate(true)
        setIsOpen(true)
    }

    const handleOnClose = () => {
        setIsUpdate(false)
        resetForm()
    }

    return (
        <LertScreen isLoading={isLoading}>
            
            <LertText
                text="Current Period"
                type={textTypes.display04} />

                <Overlay 
                    buttonTitle={isUpdate ? "Update Period" : "Add Period"}
                    minWidth={"50%"}
                    maxHeight={"60%"}
                    error={error}
                    setError={setError}
                    handleSubmit={handleSubmit} 
                    buttonType={"primary"}     
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    handleOnClose={handleOnClose}           
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
                                    placeholder={"YYYY"}
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
                    handleUpdate={handleUpdate}
                />
            </Box>

        </LertScreen>
    );
}

export default CurrentPeriod;