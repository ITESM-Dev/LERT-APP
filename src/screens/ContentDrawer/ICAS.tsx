import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, HStack, VStack } from "native-base";

import { ICAForm, useCreateICAMutation, useGetICAsQuery } from "~store/api";
import { allICAs, setICAs } from "~store/ICAs";

import LertText from '~components/atoms/LertText';
import LertInput from '~components/molecules/LertInput';
import ExpandableTable from "~components/molecules/ExpandableTable";
import Overlay from '~components/organisms/Overlay';
import LertScreen from "~components/organisms/LertScreen";

import theme from "~theme/theme";
import * as textTypes from '~styles/constants/textTypes';
import { useEffect } from "react";

let data = [
    {
        status: "Active",
        code: "A0jp65dd",
        type: "type example", 
        owner: "persona1@ibm.com",
        startDate: "2019-04-06",
        endDate: "2022-09-11",
        budget: "$42,003",
        totalBilling: "832022",
        
        year: "2022",
        idPlanning: "523",
        country: "Mexico",
        depto: "CIO",
        frequencyBill: "QUARTERLY",
        cc: "M552",
        ctyNamePerf: "781JLS",
        ctyNameReq: "Ireland",
        rCtyPerf: "781",
        rCtyReq: "7831",
        division: "1B",
        major: "638",
        minor: "234",
        leru: "1d32",
        description: "Brand new",
        nec: "12345",
        totalPlusTaxes: "231264",
        icaCore: "omgomg",
        id: "1",
    },
    {
        status: "Active",
        code: "A0jp65dd",
        type: "type example", 
        owner: "persona1@ibm.com",
        startDate: "2019-04-06",
        endDate: "2022-09-11",
        budget: "$42,003",
        totalBilling: "832022",
        
        year: "2022",
        idPlanning: "523",
        country: "Mexico",
        depto: "CIO",
        frequencyBill: "QUARTERLY",
        cc: "M552",
        ctyNamePerf: "781JLS",
        ctyNameReq: "Ireland",
        rCtyPerf: "781",
        rCtyReq: "7831",
        division: "1B",
        major: "638",
        minor: "234",
        leru: "1d32",
        description: "Brand new",
        nec: "12345",
        totalPlusTaxes: "231264",
        icaCore: "omgomg",
        id: "2",
    },
    {
        status: "Active",
        code: "A0jp65dd",
        type: "type example", 
        owner: "persona1@ibm.com",
        startDate: "2019-04-06",
        endDate: "2022-09-11",
        budget: "$42,003",
        totalBilling: "832022",

        year: "2022",
        idPlanning: "523",
        country: "Mexico",
        depto: "CIO",
        frequencyBill: "QUARTERLY",
        cc: "M552",
        ctyNamePerf: "781JLS",
        ctyNameReq: "Ireland",
        rCtyPerf: "781",
        rCtyReq: "7831",
        division: "1B",
        major: "638",
        minor: "234",
        leru: "1d32",
        description: "Brand new",
        nec: "12345",
        totalPlusTaxes: "231264",
        icaCore: "omgomg",
        id: "3",
    },
    {
        status: "Active",
        code: "A0jp65dd",
        type: "type example", 
        owner: "persona1@ibm.com",
        startDate: "2019-04-06",
        endDate: "2022-09-11",
        budget: "$42,003",
        totalBilling: "832022",
        
        year: "2022",
        idPlanning: "523",
        country: "Mexico",
        depto: "CIO",
        frequencyBill: "QUARTERLY",
        cc: "M552",
        ctyNamePerf: "781JLS",
        ctyNameReq: "Ireland",
        rCtyPerf: "781",
        rCtyReq: "7831",
        division: "1B",
        major: "638",
        minor: "234",
        leru: "1d32",
        description: "Brand new",
        nec: "12345",
        totalPlusTaxes: "231264",
        icaCore: "omgomg",
        id: "4",
    },
]

let headers=["Status", "Code", "Type", "Owner", "Start Date", "End Date", "Budget", "Total Billing"]

const ICAS = () => {

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

    // ICAs - State
    const ICAs = useSelector(allICAs);

    // Auto fetching for ICAS
    useGetICAsQuery()

    const [createICA, response] = useCreateICAMutation();
    const [error, setError] = useState<string | null>(null)

    const resetForm = () => {
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
        }

        createICA(icaForm)
            .unwrap()
            .then(() => resetForm())
            .catch(error => setError(
                "Something went wrong, please try again"
            ))
    }

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setICAs(data))
    }, [])

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
                buttonType={"icon"}
                buttonTitle="Add ICA"
                handleSubmit={handleSubmit} 
                error={error} 
                setError={setError}
            > 
                <>
                    <HStack space={2} justifyContent="space-evenly">
                        <VStack alignItems={"flex-start"}>
                            <LertText text="ICA Code" type={textTypes.heading} color={theme.colors.text.primary}/>
                            <LertInput text={ICACode} setText={setICACode} placeholder={"ICA Code"}/>
                            <LertText text="ICA Requesting" type={textTypes.heading} color={theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={ICACore} setText={setICACore} placeholder={"ICA Requesting"}/>
                            <LertText text="Year" type={textTypes.heading} color={theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={year} setText={setYear} placeholder={"Year"}/>
                            <LertText text="ID Planning" type={textTypes.heading} color={theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={IDPlanning} setText={setIDPlanning} placeholder={"ID Planning"}/>
                            <LertText text="ICA Owner" type={textTypes.heading} color={theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={ICAOwner} setText={setICAOwner} placeholder={"ICA Owner"}/>
                            <LertText text="Budget" type={textTypes.heading} color={theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={budget} setText={setBudget} placeholder={"Budget"}/>
                        </VStack>
                        <VStack alignItems={"flex-start"}>
                            <LertText text="Country" type={textTypes.heading} color={theme.colors.text.primary}/>
                            <LertInput text={country} setText={setCountry} placeholder={"Country"}/>
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
                            <LertInput text={nec} setText={setNec} placeholder={"Nec"}/>
                            <LertText text="Total Plus Taxes" type={textTypes.heading} color={theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={totalPlusTaxes} setText={setTotalPlusTaxes} placeholder={"Total Plus Taxes"}/>
                            <LertText text="Start Date" type={textTypes.heading} color={theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={startDate} setText={setStartDate} placeholder={"Start Date"}/>
                            <LertText text="Finish Date" type={textTypes.heading} color={theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={finishDate} setText={setFinishDate} placeholder={"Finish Date"}/>
                        </VStack>
                    </HStack>
                </>

            </Overlay>

            <Box
                marginTop={10}
            >
                <ExpandableTable 
                    headers={headers} 
                    items={ICAs} 
                    flexValues={[1, 1, 1, 2, 1, 1, 1, 1]}
                />
            </Box>

        </LertScreen>
    )
};

export default ICAS;