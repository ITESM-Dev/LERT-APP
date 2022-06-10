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
import { BandTypeForm, useCreateBandTypeMutation, useDeleteBandTypeMutation, useGetBandTypesQuery, useUpdateBandTypeMutation } from "~store/api";
import { useEffect } from "react";
import { dropdownCountries } from "~utils/constants";
import { BandTypesType } from "~store/bandTypes";

const TABLE_HEADERS = ["Type", "Country", "Band", "Rate", "Date of Start", "Date of Finish"]

const Types = () => {

    const [id, setId] = useState("")
    const [type, setType] = useState("");
    const [country, setCountry] = useState("");
    const [band, setBand] = useState("");
    const [rate, setRate] = useState("");
    const [startDate, setStartDate] = useState("");
    const [finishDate, setFinishDate] = useState("");

    const [isUpdate, setIsUpdate] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const [error, setError] = useState<string | null>(null)

    // Subscribe to Get BandTypes API Call
    const { isLoading } = useGetBandTypesQuery()

    // Band Types - State
    const bandTypes = useSelector(allBandTypes);

    // API Calls
    const [createBandType] = useCreateBandTypeMutation()
    const [updateBandType] = useUpdateBandTypeMutation()
    const [deleteBandType] = useDeleteBandTypeMutation()


    // Function for clearing out inputs and error state
    const resetForm = () => {
        setId("")
        setType("")
        setBand("")
        setCountry("")
        setRate("")
        setStartDate("")
        setFinishDate("")
        setError(null)
    }

    const handleSubmit = () => {

        const bandTypeForm: BandTypeForm = {
            id: id,
            type: type,
            band: band,
            country: country,
            dateToStart: startDate,
            dateToFinish: finishDate,
            yearlyRate: rate
        }

        if (isUpdate) {
            updateBandType(bandTypeForm)
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
        createBandType(bandTypeForm)
            .unwrap()
            .catch(error => setError(
                "Something went wrong, please try again"
            ))
    }

    const handleUpdate = (item: BandTypesType) => {
        setId(item.id)
        setType(item.type)
        setBand(item.band)
        setCountry(item.country)
        setRate(item.yearlyRate.toString())
        setStartDate(item.dateToStart)
        setFinishDate(item.dateToFinish)
        
        setIsUpdate(true)
        setIsOpen(true)
    }

    const handleDelete = (item: BandTypesType) => {
        deleteBandType(item.id)
            .unwrap()
            .then(() => alert("Deleted"))
            .catch(_ => setError(
                "Something went wrong, please try again"
            ))
    }

    const handleOnClose = () => {
        setIsUpdate(false)
        resetForm()
    }

    return (
        <LertScreen isLoading={isLoading}>
            
            <LertText text="Types" type={textTypes.display04} color={Theme.colors.text.primary}/>

            <Overlay    
                minWidth={"50%"} 
                minHeight={"50%"} 
                buttonTitle={isUpdate ? "Update Band Type" : "Add Band Type"}
                handleSubmit={handleSubmit}
                buttonType={"primary"}
                error={error}
                setError={setError}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                handleOnClose={handleOnClose}
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
                                placeholder={"YYYY-MM-DD"}
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
                                placeholder={"YYYY-MM-DD"}
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
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                />
            </Box>

        </LertScreen>
    )
};

export default Types;