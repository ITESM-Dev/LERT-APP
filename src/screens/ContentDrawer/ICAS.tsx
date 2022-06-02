import { Text, View } from "react-native";

import Table from "~components/organisms/Table";
import LertText from '~components/atoms/LertText';
import Overlay from '~components/organisms/Overlay';
import LertInput from '~components/molecules/LertInput';
import * as textTypes from '~styles/constants/textTypes';

import Theme from '../../theme/theme';
import { useState } from "react";
import { HStack, VStack } from "native-base";
import Dropdown from "~components/molecules/Dropdown";
import { useDispatch, useSelector } from "react-redux";

import { allICAs } from "~store/ICAs/selectors";
import { AppDispatch } from "~store/store";

const ICAS = () => {

    let example = [
        {ICAPerf: "781JLS", ICAReq: "78A67", Year: 2022, IDPlanning: 523, ICAOwner:"persona1@ibm.com", Budget:12000, Country: "Mexico", Dept: "CIO", FreqBill: "QUARTERLY", CC: "M552", 
        CityNamePerf: "Mexico", CityNameReq: "Ireland", RCityPerf: 781, RCityReq: 7831, Division: "1B", Major: 638, Minor: 234, Leru: "1d32", Description: "Brand New", Type: "111", 
        Nec: "12345", TotalPlusTaxes: "1111", StartDate: "11", FinishDate: "1111"},
        {ICAPerf: "781JLS", ICAReq: "78A67", Year: 2022, IDPlanning: 523, ICAOwner:"persona1@ibm.com", Budget:12000, Country: "Mexico", Dept: "CIO", FreqBill: "QUARTERLY", CC: "M552", 
        CityNamePerf: "Mexico", CityNameReq: "Ireland", RCityPerf: 781, RCityReq: 7831, Division: "1B", Major: 638, Minor: 234, Leru: "1d32", Description: "Brand New", Type: "111", 
        Nec: "12345", TotalPlusTaxes: "1111", StartDate: "11", FinishDate: "1111"},
    ]

    const [ICAPerf, setICAPerf] = useState("");
    const [ICAReq, setICAReq] = useState("");
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

    // Store Dispatcher
    const dispatch: AppDispatch = useDispatch();

    // ICAs - State
    const ICAs = useSelector(allICAs);

    return (
        <View>
            <LertText text="Extra Hours" type={textTypes.display04} color={Theme.colors.text.primary} style={{paddingLeft:"10%", paddingTop:"6%"}}/>

            <Overlay maxWidth={"65%"} maxHeight={"80%"} buttonTitle="Add Extra Hour"> 
                <>
                    <HStack space={2} justifyContent="space-evenly">
                        <VStack alignItems={"flex-start"}>
                            <LertText text="ICA Code" type={textTypes.heading} color={Theme.colors.text.primary}/>
                            <LertInput text={ICAPerf} setText={setICAPerf} placeholder={"ICA Code"}/>
                            <LertText text="ICA Requesting" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={ICAReq} setText={setICAReq} placeholder={"ICA Requesting"}/>
                            <LertText text="Year" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={year} setText={setYear} placeholder={"Year"}/>
                            <LertText text="ID Planning" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={IDPlanning} setText={setIDPlanning} placeholder={"ID Planning"}/>
                            <LertText text="ICA Owner" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={ICAOwner} setText={setICAOwner} placeholder={"ICA Owner"}/>
                            <LertText text="Budget" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={budget} setText={setBudget} placeholder={"Budget"}/>
                        </VStack>
                        <VStack alignItems={"flex-start"}>
                            <LertText text="Country" type={textTypes.heading} color={Theme.colors.text.primary}/>
                            <LertInput text={country} setText={setCountry} placeholder={"Country"}/>
                            <LertText text="Dept" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={dept} setText={setDept} placeholder={"Dept"}/>
                            <LertText text="Frequency Bill" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={freqBill} setText={setFreqBill} placeholder={"Frequency Bill"}/>
                            <LertText text="CC" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={CC} setText={setCC} placeholder={"CC"}/>
                            <LertText text="City Name Perf" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={CityNamePerf} setText={setCityNamePerf} placeholder={"City Name Perf"}/>
                            <LertText text="City Name Req" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={CityNameReq} setText={setCityNameReq} placeholder={"City Name Req"}/>
                        </VStack>
                        <VStack alignItems={"flex-start"}>
                            <LertText text="R City Perf" type={textTypes.heading} color={Theme.colors.text.primary}/>
                            <LertInput text={RCityPerf} setText={setRCityPerf} placeholder={"R City Perf"}/>
                            <LertText text="R City Req" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={RCityReq} setText={setRCityReq} placeholder={"R City Req"}/>
                            <LertText text="Division" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={division} setText={setDivision} placeholder={"Division"}/>
                            <LertText text="Major" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={major} setText={setMajor} placeholder={"Major"}/>
                            <LertText text="Minor" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={minor} setText={setMinor} placeholder={"Minor"}/>
                            <LertText text="Leru" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={leru} setText={setLeru} placeholder={"Leru"}/>
                        </VStack>
                        <VStack alignItems={"flex-start"}>
                            <LertText text="Description" type={textTypes.heading} color={Theme.colors.text.primary}/>
                            <LertInput text={description} setText={setDescription} placeholder={"Description"}/>
                            <LertText text="Type" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={type} setText={setType} placeholder={"Type"}/>
                            <LertText text="Nec" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={nec} setText={setNec} placeholder={"Nec"}/>
                            <LertText text="Total Plus Taxes" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={totalPlusTaxes} setText={setTotalPlusTaxes} placeholder={"Total Plus Taxes"}/>
                            <LertText text="Start Date" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={startDate} setText={setStartDate} placeholder={"Start Date"}/>
                            <LertText text="Finish Date" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <LertInput text={finishDate} setText={setFinishDate} placeholder={"Finish Date"}/>
                        </VStack>
                    </HStack>
                </>

            </Overlay>

            <LertText text="Extra Hours List" type={textTypes.display01} color={Theme.colors.text.primary} style={{paddingLeft:"10%", paddingTop:"4%"}}/>

            <Table headers={["ICA Performing", "ICA Requesting", "Year", "ID Planning", "ICA Owner", "Budget", "Country", "Dept", "Frequency Bill", "CC", "City Name Perf", 
            "City Name Req", "R City Perf", "R City Req", "Division", "Major", "Minor", "Leru", "Description", "Type", "Nec", "Total Plus Taxes", "Start Date", "Finish Date" ]} 
            items={example} 
            flexValues={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}/>
        </View>
    )
};

export default ICAS;