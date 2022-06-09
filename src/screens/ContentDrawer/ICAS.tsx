import { useState } from "react";
import { useSelector } from "react-redux";
import { Box, HStack, VStack } from "native-base";

import { ICAForm, useCreateICAMutation, useGetICAsQuery, useGetManagerFunctionsQuery, useUpdateICAMutation } from "~store/api";
import { allManagers } from "~store/managers";
import { allICAs, ICAType } from "~store/ICAs";

import LertText from '~components/atoms/LertText';
import LertInput from '~components/molecules/LertInput';
import ExpandableTable from "~components/molecules/ExpandableTable";
import Dropdown from "~components/molecules/Dropdown";
import SearchInput from "~components/molecules/SearchInput";
import Overlay from '~components/organisms/Overlay';
import LertScreen from "~components/organisms/LertScreen";

import theme from "~theme/theme";
import * as textTypes from '~styles/constants/textTypes';

import { dropdownCountries } from "~utils/constants";


let headers=["Status", "Code", "Type", "Owner", "Start Date", "End Date", "Budget", "Total Billing"]

const ICAS = () => {

    const [id, setId] = useState("")
    const [totalBilling, setTotalBilling] = useState("")
    const [status, setStatus] = useState("")
    const [ICACode, setICACode] = useState("");
    const [ICACore, setICACore] = useState("");
    const [year, setYear] = useState("");
    const [IDPlanning, setIDPlanning] = useState("");
    const [ICAOwner, setICAOwner] = useState("");
    const [budget, setBudget] = useState("");
    const [country, setCountry] = useState("");
    const [dept, setDept] = useState("");
    const [freqBill, setFreqBill] = useState("");
    const [CC, setCC] = useState("");
    const [CityNamePerf, setCityNamePerf] = useState("");
    const [CityNameReq, setCityNameReq] = useState("");
    const [RCityPerf, setRCityPerf] = useState("");
    const [RCityReq, setRCityReq] = useState("");
    const [division, setDivision] = useState("");
    const [major, setMajor] = useState("");
    const [minor, setMinor] = useState("");
    const [leru, setLeru] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [nec, setNec] = useState("");
    const [totalPlusTaxes, setTotalPlusTaxes] = useState("");
    const [startDate, setStartDate] = useState("");
    const [finishDate, setFinishDate] = useState("");

    const [isUpdate, setIsUpdate] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const [error, setError] = useState<string | null>(null)

    // ICAs - State
    const ICAs = useSelector(allICAs);
    
    // Managers - State
    const managers = useSelector(allManagers);

    // Auto fetching for ICAS
    useGetICAsQuery()

    useGetManagerFunctionsQuery()

    const [createICA] = useCreateICAMutation();
    const [updateICA] = useUpdateICAMutation();

    const resetForm = () => {
        setId("")
        setTotalBilling("")
        setStatus("")
        setICACode("")
        setICACore("")
        setYear("")
        setIDPlanning("")
        setICAOwner("")
        setBudget("")
        setCountry("")
        setDept("")
        setFreqBill("")
        setCC("")
        setCityNamePerf("")
        setCityNameReq("")
        setRCityPerf("")
        setRCityReq("")
        setDivision("")
        setMajor("")
        setMinor("")
        setLeru("")
        setDescription("")
        setType("")
        setNec("")
        setTotalPlusTaxes("")
        setStartDate("")
        setFinishDate("")
        setError(null)
    }

    const handleSubmit = () => {
        const icaForm: ICAForm = {
            id: id,
            icaCode: ICACode,
            icaCore: ICACore,
            year: year,
            idPlanning: IDPlanning,
            icaOwner: ICAOwner,
            budget: budget,
            country: country,
            depto: dept,
            frequencyBill: freqBill,
            cc: CC,
            ctyNamePerf: CityNamePerf,
            ctyNameReq: CityNameReq,
            rCtyPerf: RCityPerf,
            rCtyReq: RCityReq,
            division: division,
            major: major,
            minor: minor,
            leru: leru,
            description: description,
            type: type,
            nec: nec,
            totalPlusTaxes: totalPlusTaxes,
            startDate: startDate,
            endDate: finishDate,
            totalBilling: totalBilling,
            status: status
        }

        if (isUpdate) {
            updateICA(icaForm)
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
        createICA(icaForm)
            .unwrap()
            .then(() => resetForm())
            .catch(_ => setError(
                "Something went wrong, please try again"
            ))
    }

    const handleUpdate = (item: ICAType) => {
        setId(item.id)
        setTotalBilling(item.totalBilling)
        setStatus(item.status)
        setICACode(item.icaCode)
        setICACore(item.icaCore)
        setYear(item.year)
        setIDPlanning(item.idPlanning)
        setICAOwner(item.icaOwner)
        setBudget(item.budget)
        setCountry(item.country)
        setDept(item.depto)
        setFreqBill(item.frequencyBill)
        setCC(item.cc)
        setCityNamePerf(item.ctyNamePerf)
        setCityNameReq(item.ctyNameReq)
        setRCityPerf(item.rCtyPerf)
        setRCityReq(item.rCtyReq)
        setDivision(item.division)
        setMajor(item.major)
        setMinor(item.minor)
        setLeru(item.leru)
        setDescription(item.description)
        setType(item.type)
        setNec(item.nec)
        setTotalPlusTaxes(item.totalPlusTaxes)
        setStartDate(item.startDate)
        setFinishDate(item.endDate)
        
        setIsUpdate(true)
        setIsOpen(true)
    }

    const handleOnClose = () => {
        setIsUpdate(false)
        resetForm()
    }

    return (
        <LertScreen>
            <LertText 
                text="ICA" 
                type={textTypes.display04} 
                color={theme.colors.text.primary}
            />

            <Overlay 
                minWidth={"65%"}
                minHeight={"80%"}
                buttonType={"primary"}
                buttonTitle={isUpdate ? "Update ICA" : "Add ICA"}
                handleSubmit={handleSubmit} 
                handleOnClose={handleOnClose}
                error={error} 
                setError={setError}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            > 
                <>
                    <HStack space={2} justifyContent="space-evenly">
                        <VStack alignItems={"flex-start"}>
                            <LertText text="ICA Code" type={textTypes.heading} color={theme.colors.text.primary}/>
                            <LertInput text={ICACode} setText={setICACode} placeholder={"ICA Code"}/>
                            <LertText text="ICA Requesting" type={textTypes.heading} color={theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={ICACore} setText={setICACore} placeholder={"ICA Requesting"}/>
                            <LertText text="Year" type={textTypes.heading} color={theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={year} setText={setYear} placeholder={"YYYY"}/>
                            <LertText text="ID Planning" type={textTypes.heading} color={theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={IDPlanning} setText={setIDPlanning} placeholder={"ID Planning"}/>
                            <LertText 
                                text="ICA Owner" 
                                type={textTypes.heading} 
                                color={theme.colors.text.primary} 
                                style={{paddingTop:"10%"}}
                            />
                            <SearchInput 
                                placeholder={"ICA Owner"}
                                value={ICAOwner} 
                                setValue={setICAOwner} 
                                items={ managers.map(item => item.mail) }
                            />
                            <LertText text="Budget" type={textTypes.heading} color={theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={budget} setText={setBudget} placeholder={"Budget"}/>
                        </VStack>
                        <VStack alignItems={"flex-start"}>
                            <LertText 
                                text="Country" 
                                type={textTypes.heading} 
                                color={theme.colors.text.primary}
                            />
                            <Dropdown 
                                value={country}
                                setValue={setCountry}
                                placeholder={"Country"} 
                                items={dropdownCountries}                            
                            />
                            <LertText text="Dept" type={textTypes.heading} color={theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={dept} setText={setDept} placeholder={"Dept"}/>
                            <LertText text="Frequency Bill" type={textTypes.heading} color={theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={freqBill} setText={setFreqBill} placeholder={"Frequency Bill"}/>
                            <LertText text="CC" type={textTypes.heading} color={theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={CC} setText={setCC} placeholder={"CC"}/>
                            <LertText text="City Name Perf" type={textTypes.heading} color={theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={CityNamePerf} setText={setCityNamePerf} placeholder={"City Name Perf"}/>
                            <LertText text="City Name Req" type={textTypes.heading} color={theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={CityNameReq} setText={setCityNameReq} placeholder={"City Name Req"}/>
                        </VStack>
                        <VStack alignItems={"flex-start"}>
                            <LertText text="R City Perf" type={textTypes.heading} color={theme.colors.text.primary}/>
                            <LertInput text={RCityPerf} setText={setRCityPerf} placeholder={"R City Perf"}/>
                            <LertText text="R City Req" type={textTypes.heading} color={theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={RCityReq} setText={setRCityReq} placeholder={"R City Req"}/>
                            <LertText text="Division" type={textTypes.heading} color={theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={division} setText={setDivision} placeholder={"Division"}/>
                            <LertText text="Major" type={textTypes.heading} color={theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={major} setText={setMajor} placeholder={"Major"}/>
                            <LertText text="Minor" type={textTypes.heading} color={theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={minor} setText={setMinor} placeholder={"Minor"}/>
                            <LertText text="Leru" type={textTypes.heading} color={theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={leru} setText={setLeru} placeholder={"Leru"}/>
                        </VStack>
                        <VStack alignItems={"flex-start"}>
                            <LertText text="Description" type={textTypes.heading} color={theme.colors.text.primary}/>
                            <LertInput text={description} setText={setDescription} placeholder={"Description"}/>
                            <LertText text="Type" type={textTypes.heading} color={theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={type} setText={setType} placeholder={"Type"}/>
                            <LertText text="Nec" type={textTypes.heading} color={theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={nec} setText={setNec} placeholder={"Nec Number"}/>
                            <LertText text="Total Plus Taxes" type={textTypes.heading} color={theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={totalPlusTaxes} setText={setTotalPlusTaxes} placeholder={"Total Plus Taxes"}/>
                            <LertText text="Start Date" type={textTypes.heading} color={theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={startDate} setText={setStartDate} placeholder={"YYYY-MM-DD"}/>
                            <LertText text="Finish Date" type={textTypes.heading} color={theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={finishDate} setText={setFinishDate} placeholder={"YYYY-MM-DD"}/>
                        </VStack>
                    </HStack>
                </>

            </Overlay>

            <Box
                marginTop={30}
            >
                <ExpandableTable 
                    headers={headers} 
                    items={ICAs} 
                    flexValues={[1, 1, 1, 1, 1, 1, 1, 1]}
                    handleUpdate={handleUpdate}
                />
            </Box>

        </LertScreen>
    )
};

export default ICAS;