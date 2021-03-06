import { useState } from "react";
import { useSelector } from "react-redux";
import { Box, HStack, SectionList, VStack } from "native-base";

import { 
    ExpenseTypeForm,
    useCreateExpenseTypeMutation, 
    useDeleteExpenseTypeMutation, 
    useGetExpenseTypesQuery, 
    useUpdateExpenseTypeMutation
} from "~store/api";
import { allExpenseTypes, ExpenseTypesType } from "~store/expenseTypes";

import LertText from '~components/atoms/LertText';
import LertInput from '~components/molecules/LertInput';
import Table from "~components/organisms/Table";
import Overlay from '~components/organisms/Overlay';
import LertScreen from "~components/organisms/LertScreen";

import Theme from '~theme/theme';
import * as textTypes from '~styles/constants/textTypes';
import { ExpenseType } from "~store/expenses";

const TABLE_HEADERS = ["Name"]

const ExpensesTypes = () => {

    const [id, setId] = useState("")
    const [name, setName] = useState("")

    const [isUpdate, setIsUpdate] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    
    const [error, setError] = useState<string | null>(null)
    
    // Expenses - State
    const expenseTypes = useSelector(allExpenseTypes);

    // Auto refetch
    const { isLoading } = useGetExpenseTypesQuery()

    const [createExpenseType, response] = useCreateExpenseTypeMutation()
    const [updateExpenseType] = useUpdateExpenseTypeMutation()

    const resetForm = () => {
        setId("")
        setName("")
    }

    const handleSubmit = () => {
        const expenseTypeForm: ExpenseTypeForm = {
            id: id,
            type: name
        }

        if (isUpdate) {
            updateExpenseType(expenseTypeForm)
                .unwrap()
                .then(() => {
                    resetForm()
                    setIsUpdate(false)
                })
                .catch(error =>  {
                    resetForm()
                    setIsUpdate(false)
                    setError(
                        "Something went wrong, please try again"
                    )
                })  
            return
        }

        createExpenseType(expenseTypeForm)
            .unwrap()
            .then(() => resetForm())
            .catch(_ => setError(
                "Something went wrong, please try again"
            ))
    }

    const handleUpdate = (item: ExpenseTypesType) => {
        setId(item.id)
        setName(item.type)
        
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
                text="Expense Types" 
                type={textTypes.display04} 
                color={Theme.colors.text.primary} 
            />

            {/** CREATE & UPDATE */}
            <Overlay 
                minWidth={"30%"} 
                minHeight={"30%"} 
                buttonTitle={isUpdate ? "Update Expense Type" : "Add Expense Type"}
                handleSubmit={handleSubmit}
                error={error}
                setError={setError}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                handleOnClose={handleOnClose}
            > 
            <HStack flex={1} justifyContent={'center'}>
                <VStack alignItems={"flex-start"}>
                    <LertText text="Name" type={textTypes.heading} color={Theme.colors.text.primary}/>
                    <LertInput text={name} setText={setName} placeholder={"Name"}/>
                </VStack>
            </HStack>

            </Overlay>
    
            <Box
                marginTop={30}
            >
                <Table 
                    headers={TABLE_HEADERS} 
                    items={expenseTypes} 
                    flexValues={[1]} 
                    handleUpdate={handleUpdate}
                />
            </Box>

        </LertScreen>
    )
};

export default ExpensesTypes;