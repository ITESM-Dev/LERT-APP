import { View } from "react-native";

import Table from "~components/organisms/Table";
import LertText from '~components/atoms/LertText';
import Overlay from '~components/organisms/Overlay';
import LertInput from '~components/molecules/LertInput';
import * as textTypes from '~styles/constants/textTypes';

import Theme from '../../theme/theme';
import { useState } from "react";
import { HStack, VStack } from "native-base";
import { AppDispatch } from "~store/store";
import { useDispatch, useSelector } from "react-redux";
import { allExpenseTypes } from "~store/expenseTypes/selectors";
import LertScreen from "~components/organisms/LertScreen";
import { useCreateExpenseTypeMutation, useGetExpenseTypesQuery } from "~store/api";
import { ExpenseTypeForm } from "~store/api/types";

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
                maxHeight={"30%"} 
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

            <Table 
                headers={TABLE_HEADERS} 
                items={expenseTypes} 
                flexValues={[1]} 
            />

        </LertScreen>
    )
};

export default ExpensesTypes;