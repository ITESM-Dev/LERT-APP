import { useState } from "react";

import { useSelector } from "react-redux";
import { Box, HStack, VStack } from "native-base";

import { allExtraHours } from "~store/extraHours/selectors";
import { 
    ExtraHourForm, 
    useCreateExtraHourTypeMutation, 
    useGetExtraHourTypesQuery, 
    useUpdateExtraHourTypeMutation,
    useDeleteExtraHourTypeMutation
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
import { ExtraHourType } from "~store/extraHours";

const TABLE_HEADERS = ["Type", "Band", "Country", "Rate", "Date of Start", "Date of Finish"]



const ExtraHours = () => {

    const [id, setId] = useState("")
    const [type, setType] = useState("");
    const [band, setBand] = useState("");
    const [country, setCountry] = useState("");
    const [rate, setRate] = useState("");
    const [dateStart, setDateStart] = useState("");
    const [dateFinish, setDateFinish] = useState("");

    const [isUpdate, setIsUpdate] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    // Extra Hours - State
    const extraHours = useSelector(allExtraHours);

    // Auto-fetch data
    useGetExtraHourTypesQuery()
    
    // API Calls
    const [createExtraHourType] = useCreateExtraHourTypeMutation()
    const [updateExtraHourType] = useUpdateExtraHourTypeMutation()
    const [deleteExtraHourType] = useDeleteExtraHourTypeMutation()

    const [error, setError] = useState<string | null>(null)

    // Function for clearing out inputs and error state
    const resetForm = () => {
        setId("")
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
            id: id,
            type: type,
            band: band,
            country: country,
            rate: rate,
            dateToStart: dateStart,
            dateToFinish: dateFinish,
        }

        if (isUpdate) {
            updateExtraHourType(extraHourForm)
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
        createExtraHourType(extraHourForm)
            .unwrap()
            .then(() => resetForm())
            .catch(_ => setError(
                "Something went wrong, please try again"
            ))
    }

    const handleUpdate = (item: ExtraHourType) => {
        setId(item.id)
        setType(item.type)
        setBand(item.band)
        setCountry(item.country)
        setRate(item.rate.toString())
        setDateStart(item.dateToStart)
        setDateFinish(item.dateToFinish)
        
        setIsUpdate(true)
        setIsOpen(true)
    }

    const handleDelete = (item: ExtraHourType) => {
        deleteExtraHourType(item.id)
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
        <LertScreen>

            <LertText 
                text="Extra Hours" 
                type={textTypes.display04} 
                color={Theme.colors.text.primary} 
            />

            <Overlay 
                buttonTitle={isUpdate ? "Update Hour Type" : "Add Hour Type"}
                buttonType={"primary"}
                minWidth={"60%"}
                minHeight={"60%"} 
                error={error}
                setError={setError}
                handleSubmit={handleSubmit}
                handleOnClose={handleOnClose}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
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
                                placeholder={"YYYY-MM-DD"}
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
                                placeholder={"YYYY-MM-DD"}
                            />
                        </VStack>
                    </HStack>
                </>

            </Overlay>

            <Box marginTop={30} >
                <Table 
                    headers={TABLE_HEADERS} 
                    items={extraHours} 
                    flexValues={[1, 1, 2, 1, 2, 2]}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                />
            </Box>
        </LertScreen>
    )
};

export default ExtraHours;