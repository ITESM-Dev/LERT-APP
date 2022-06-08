import { useState } from "react";
import { useSelector } from "react-redux";
import { Box, HStack, VStack } from "native-base";

import { 
    ExpenseTypeForm,
    useCreateExpenseTypeMutation, 
    useGetExpenseTypesQuery 
} from "~store/api";
import { allExpenseTypes } from "~store/expenseTypes";

import LertText from '~components/atoms/LertText';
import LertInput from '~components/molecules/LertInput';
import Table from "~components/organisms/Table";
import Overlay from '~components/organisms/Overlay';
import LertScreen from "~components/organisms/LertScreen";

import Theme from '~theme/theme';
import * as textTypes from '~styles/constants/textTypes';

const TABLE_HEADERS = ["Name"]

const ExpensesTypes = () => {

    const [name, setName] = useState("");

    // Expenses - State
    const expenseTypes = useSelector(allExpenseTypes);

    // Auto refetch
    useGetExpenseTypesQuery()

    const [createExpenseType, response] = useCreateExpenseTypeMutation()

    const [error, setError] = useState<string | null>(null)

    const resetForm = () => {
        setName("")
    }

    const handleSubmit = () => {
        const expenseTypeForm: ExpenseTypeForm = {
            type: name
        }
        createExpenseType(expenseTypeForm)
            .unwrap()
            .then(() => resetForm())
            .catch(error => setError(
                "Something went wrong, please try again"
            ))
    }

    return (
        <LertScreen>
            
            <LertText 
                text="Expense Types" 
                type={textTypes.display04} 
                color={Theme.colors.text.primary} 
            />

            <Overlay 
                minWidth={"30%"} 
                minHeight={"30%"} 
                buttonTitle="Create expense"
                handleSubmit={handleSubmit}
                error={error}
                setError={setError}
            > 
                <>
                    <HStack space={2} justifyContent="space-evenly">
                        <VStack alignItems={"flex-start"}>
                            <LertText text="Name" type={textTypes.heading} color={Theme.colors.text.primary}/>
                            <LertInput text={name} setText={setName} placeholder={"Name"}/>
                        </VStack>
                    </HStack>
                </>

            </Overlay>

            <Box
                marginTop={30}
            >
                <Table 
                    headers={TABLE_HEADERS} 
                    items={expenseTypes} 
                    flexValues={[1]} 
                />
            </Box>

        </LertScreen>
    )
};

export default ExpensesTypes;