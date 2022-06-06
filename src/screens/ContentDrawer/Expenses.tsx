import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, HStack, VStack } from "native-base";

import { 
    ExpenseForm, 
    useCreateExpenseMutation, 
    useGetExpensesQuery, 
    useGetExpenseTypesQuery,
    useGetManagerICAQuery,
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

const dropdownTypes = [
    { label: 'First', value: 'first' },
    { label: 'Secondary', value: 'secondary' },
]

const TABLE_HEADERS = ["Employee Mail", "Type", "Cost", "Date", "ICA", "ICA Manager", "Administrator", "Comment"]

const Expenses = () => {

    const [name, setName] = useState("")
    const [employeeMail, setEmployeeMail] = useState("");
    const [date, setDate] = useState("");
    const [cost, setCost] = useState(""); 
    const [comment, setComment] = useState("");
    const [ica, setIca] = useState("");
    const [type, setType] = useState("");

    const [error, setError] = useState<string | null>(null)

    const resetForm = () => {
        setName("")
        setEmployeeMail("")
        setDate("")
        setCost("")
        setComment("")
        setType("")
        setError(null)
    }

    // Expenses - State
    const expenses = useSelector(allExpenses)

    // Auto-fetch
    useGetExpensesQuery()

    // Expense Types
    const expenseTypesAPI = useGetExpenseTypesQuery()
    // ICA Number
    const managerICA = useGetManagerICAQuery()

    // API Calls
    const [createExpense, response] = useCreateExpenseMutation()

    const handleSubmit = () => {
        const expenseForm: ExpenseForm = {
            icaCode: ica,
            mail: employeeMail,
            cost: cost,
            date: date,
            comment: comment,
            nameExpense: name,
            keyCurrentPeriod: "" // Figure out how to get this
        }

        createExpense(expenseForm)
            .unwrap()
            .then(() => resetForm())
            .catch(error => setError(
                "Something went wrong, please try again"
            ))
    }

    useEffect(() => {
        setIca(managerICA.data?.idCode ? managerICA.data?.idCode : "")
    }, [managerICA.data])

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
                                placeholder="Type"
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
                            <LertInput 
                                text={employeeMail} 
                                setText={setEmployeeMail} 
                                placeholder={"Employee Mail"}
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