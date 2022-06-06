import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, HStack, VStack } from "native-base";

import { 
    ExpenseForm, 
    useCreateExpenseMutation, 
    useGetAvailableResourcesQuery, 
    useGetCurrentPeriodsQuery, 
    useGetExpensesQuery, 
    useGetExpenseTypesQuery,
    useGetManagerICAQuery,
    useGetResourcesQuery,
} from "~store/api";
import { allExpenses } from "~store/expenses";

import LertText from '~components/atoms/LertText';
import SearchInput from "~components/molecules/SearchInput";
import LertInput from '~components/molecules/LertInput';
import Table from "~components/organisms/Table";
import Overlay from '~components/organisms/Overlay';
import LertScreen from "~components/organisms/LertScreen";

import Theme from '../../theme/theme';
import * as textTypes from '~styles/constants/textTypes';
import { allCurrentPeriods } from "~store/currentPeriod";

const dropdownTypes = [
    { label: 'First', value: 'first' },
    { label: 'Secondary', value: 'secondary' },
]

const TABLE_HEADERS = ["Employee Mail", "Type", "Cost", "Date", "ICA", "ICA Manager", "Administrator", "Comment"]

const Expenses = () => {

    const [employeeMail, setEmployeeMail] = useState("");
    const [date, setDate] = useState("");
    const [cost, setCost] = useState(""); 
    const [comment, setComment] = useState("");
    const [ica, setIca] = useState("");
    const [type, setType] = useState("");
    const [key, setKey] = useState("")

    const [error, setError] = useState<string | null>(null)

    const resetForm = () => {
        setEmployeeMail("")
        setDate("")
        setCost("")
        setComment("")
        setType("")
        setKey("")
        setError(null)
    }

    // Expenses - State
    const expenses = useSelector(allExpenses)

    // Current Periods - State
    const currentPeriods = useSelector(allCurrentPeriods)

    // Auto-fetch
    useGetExpensesQuery()
    // Current Periods
    useGetCurrentPeriodsQuery()

    // Expense Types
    const expenseTypesAPI = useGetExpenseTypesQuery()
    // ICA Number
    const managerICA = useGetManagerICAQuery()
    // Employee Mails (Resources)
    const resources = useGetResourcesQuery()

    // API Calls
    const [createExpense, response] = useCreateExpenseMutation()

    useEffect(() => {
        if (managerICA.data !== undefined) {
            setIca(managerICA.data!.icaCode)
        }
    }, [managerICA.data])

    const handleSubmit = () => {
        const expenseForm: ExpenseForm = {
            icaCode: ica,
            mail: employeeMail,
            cost: cost,
            date: date,
            comment: comment,
            nameExpense: type,
            keyCurrentPeriod: key
        }

        createExpense(expenseForm)
            .unwrap()
            .then(() => resetForm())
            .catch(error => setError(
                "Something went wrong, please try again"
            ))
    }

    return (
        <LertScreen>
            
            <LertText text="Expenses" type={textTypes.display04} color={Theme.colors.text.primary}/>

            <Overlay 
                minWidth={"60%"}
                minHeight={"60%"}
                buttonTitle="Create Expense" 
                handleSubmit={handleSubmit}
                buttonType={"primary"}    
                error={error}
                setError={setError}        
            > 
                <>
                    <HStack space={2} justifyContent="space-evenly">
                        <VStack alignItems={"flex-start"}>
                            <LertText 
                                text="Type" 
                                type={textTypes.heading} 
                                color={Theme.colors.text.primary} 
                                style={{paddingTop:"10%"}}
                            />
                            <SearchInput
                                placeholder="Search Type"
                                value={type}
                                setValue={setType}
                                items={
                                    expenseTypesAPI.data 
                                    ? expenseTypesAPI.data!.map(item => item.type)
                                    : []
                                }
                            />
                            <LertText 
                                text="Employee Mail" 
                                type={textTypes.heading} 
                                color={Theme.colors.text.primary} 
                                style={{paddingTop:"10%"}}
                            />
                            <SearchInput  
                                placeholder={"Search Employee"}
                                value={employeeMail}
                                setValue={setEmployeeMail}
                                items={
                                    resources.data 
                                    ? resources.data?.map(item => item.mail)
                                    : []
                                }
                            />
                            <LertText 
                                text="Cost" 
                                type={textTypes.heading} 
                                color={Theme.colors.text.primary} 
                                style={{paddingTop:"10%"}}
                            />
                            <LertInput 
                                text={cost} 
                                setText={setCost} 
                                placeholder={"USD Cost"}
                            />
                            <LertText 
                                text="Comment" 
                                type={textTypes.heading} 
                                color={Theme.colors.text.primary} 
                                style={{paddingTop:"10%"}}
                            />
                            <LertInput 
                                text={comment} 
                                setText={setComment} 
                                placeholder={"Comment"}
                            />
                        </VStack>
                        <VStack alignItems={"flex-start"}>
                            <LertText 
                                text="Date" 
                                type={textTypes.heading} 
                                color={Theme.colors.text.primary} 
                                style={{paddingTop:"10%"}}
                            />
                            <LertInput 
                                text={date} 
                                setText={setDate} 
                                placeholder={"Date"}
                            />
                            <LertText 
                                text="Current Period" 
                                type={textTypes.heading} 
                                color={Theme.colors.text.primary} 
                                style={{paddingTop:"10%"}}
                            />
                            <SearchInput  
                                placeholder={"Search Key"}
                                value={key}
                                setValue={setKey}
                                items={currentPeriods.map(item => item.key.toString())}
                            />
                            <LertText 
                                text="ICA" 
                                type={textTypes.heading} 
                                color={Theme.colors.text.primary} 
                                style={{paddingTop:"10%"}}
                            />
                            <LertInput 
                                text={ica} 
                                isDisabled={true}
                                setText={setIca} 
                                placeholder={"ICA"}
                            />
                            
                        </VStack>
                    </HStack>
                </>

            </Overlay>

            <Box
                marginTop={30}
            >
                <Table 
                    headers={TABLE_HEADERS} 
                    items={expenses} 
                    flexValues={[3, 1, 1, 1, 1, 2, 2, 2]}
                />
            </Box>

        </LertScreen>
    )
};

export default Expenses;