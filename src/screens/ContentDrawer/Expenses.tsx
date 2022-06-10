import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, HStack, VStack } from "native-base";

// @ts-ignore
import { CSVDownload } from "react-csv";

import { 
    ExpenseForm, 
    ExpenseReportForm, 
    useCreateExpenseMutation,
    useDeleteExpenseMutation,
    useGetCurrentPeriodsQuery, 
    useGetExpenseReportMutation, 
    useGetExpensesQuery, 
    useGetExpenseTypesQuery,
    useGetManagerICAQuery,
    useGetResourcesQuery,
    useUpdateExpenseMutation,
} from "~store/api";
import { allExpenses, ExpenseType } from "~store/expenses";
import { allCurrentPeriods } from "~store/currentPeriod";

import LertText from '~components/atoms/LertText';
import SearchInput from "~components/molecules/SearchInput";
import LertInput from '~components/molecules/LertInput';
import Table from "~components/organisms/Table";
import Overlay from '~components/organisms/Overlay';
import LertScreen from "~components/organisms/LertScreen";

import Theme from '../../theme/theme';
import * as textTypes from '~styles/constants/textTypes';

const TABLE_HEADERS = ["Employee Mail", "Type", "Cost", "Date", "ICA", "ICA Manager", "Administrator", "Comment"]

const Expenses = () => {

    const [id, setId] = useState("")
    const [employeeMail, setEmployeeMail] = useState("");
    const [date, setDate] = useState("");
    const [cost, setCost] = useState(""); 
    const [comment, setComment] = useState("");
    const [ica, setIca] = useState("");
    const [type, setType] = useState("");
    const [key, setKey] = useState("")

    const [isUpdate, setIsUpdate] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenReport, setIsOpenReport] = useState(false)

    const [success, setSuccess] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)

    const [csv, setCsv] = useState([])
    const [isDownload, setDownload] = useState(false)

    // Expenses - State
    const expenses = useSelector(allExpenses)

    // Current Periods - State
    const currentPeriods = useSelector(allCurrentPeriods)

    // Auto-fetch
    const { isLoading } = useGetExpensesQuery()
    // Current Periods
    useGetCurrentPeriodsQuery()

    // Expense Types
    const expenseTypesAPI = useGetExpenseTypesQuery()
    // ICA Number
    const managerICA = useGetManagerICAQuery()
    // Employee Mails (Resources)
    const resources = useGetResourcesQuery()

    // API Calls
    const [createExpense] = useCreateExpenseMutation()
    const [updateExpense] = useUpdateExpenseMutation()
    const [deleteExpense] = useDeleteExpenseMutation()

    useEffect(() => {
        if (managerICA.data !== undefined) {
            setIca(managerICA.data!.icaCode)
        }
    }, [managerICA.data])

    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    const [getExpenseReport] = useGetExpenseReportMutation()

    const generateExpenseReport = () => {
        const expenseReportForm: ExpenseReportForm = {
            startDate: startDate,
            endDate: endDate,
        }
        getExpenseReport(expenseReportForm)
            .unwrap()
            .then((response) => {
                setCsv(response)
                setDownload(true)
            })
            .catch(error => setError(
                "Error generating reports"
            ))

    }

    const resetForm = () => {
        setId("")
        setEmployeeMail("")
        setDate("")
        setCost("")
        setComment("")
        setType("")
        setKey("")
        setError(null)
    }

    const handleSubmit = () => {
        const expenseForm: ExpenseForm = {
            id: id,
            icaCode: ica,
            mailResource    : employeeMail,
            cost: cost,
            date: date,
            comment: comment,
            nameExpense: type,
            keyCurrentPeriod: key
        }

        if (isUpdate) {
            updateExpense(expenseForm)
                .unwrap()
                .then(() => {
                    resetForm()
                    setIsUpdate(false)
                    setSuccess(
                        "Expense Updated!"
                    )
                })
                .catch(_ => {
                    resetForm()
                    setIsUpdate(false)
                    setError(
                        "Something went wrong, please try again"
                    )
                })
            return
        }
        createExpense(expenseForm)
            .unwrap()
            .then(() => {
                resetForm()
                setSuccess(
                    "Expense created!"
                )
            })
            .catch(_ => setError(
                "Something went wrong, please try again"
            ))
    }

    const handleUpdate = (item: ExpenseType) => {
        setId(item.id)
        setEmployeeMail(item.employeeMail)
        setDate(item.date)
        setCost(item.cost.toString())
        setComment(item.comment)
        setType(item.type)
        
        setIsUpdate(true)
        setIsOpen(true)
    }

    const handleDelete = (item: ExpenseType) => {
        deleteExpense(item.id)
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

    useEffect(() => {
        if (isDownload) setDownload(false)
    }, [isDownload])

    return (
        <LertScreen isLoading={isLoading}>
            
            <LertText text="Expenses" type={textTypes.display04} color={Theme.colors.text.primary}/>

            <HStack
                flex={1}
                justifyContent={'flex-end'}
            >
                
                <Overlay
                    minWidth={"40%"}
                    minHeight={"30%"}
                    buttonTitle="Generate Report" 
                    handleSubmit={generateExpenseReport}
                    buttonType={"secondary"}    
                    error={error}
                    setError={setError} 
                    isOpen={isOpenReport}
                    setIsOpen={setIsOpenReport}
                    style={{ marginRight: 5 }} 
                >
                    <HStack 
                        space={2} 
                        justifyContent="space-evenly"
                    >
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
                        </VStack>
                        <VStack alignItems={"flex-start"}>
                            <LertText 
                                text="End Date" 
                                type={textTypes.heading} 
                                color={Theme.colors.text.primary} 
                                style={{paddingTop:"10%"}}
                            />
                            <LertInput 
                                text={endDate} 
                                setText={setEndDate} 
                                placeholder={"YYYY-MM-DD"}
                            />
                        </VStack>
                    </HStack>
                </Overlay>
                
                {isDownload && 
                    <CSVDownload
                        filename={`expenses_${startDate}_${endDate}`} 
                        data={csv}
                    />
                }


                <Overlay 
                    minWidth={"60%"}
                    minHeight={"60%"}
                    buttonTitle={isUpdate ? "Update Expense" : "Add Expense"}
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
            </HStack>

            <Box
                marginTop={30}
            >
                <Table 
                    headers={TABLE_HEADERS} 
                    items={expenses} 
                    flexValues={[3, 1, 1, 1, 1, 2, 2, 2]}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                />
            </Box>

        </LertScreen>
    )
};

export default Expenses;