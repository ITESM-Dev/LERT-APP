import { ScrollView, Text, View } from "react-native";
import LegalMenu from "~components/molecules/LegalMenu";
import Theme from '~theme/theme';
import Overlay from "~components/organisms/Overlay";
import LertText from "~components/atoms/LertText";
import * as textTypes from '~styles/constants/textTypes';
import LertButton from "~components/atoms/LertButton";
import Table from "~components/organisms/Table";
import { useState } from "react";
import LertScreen from "~components/organisms/LertScreen";

const TABLE_HEADERS = ["Quarter", "Year", "Key", "Status"]
import { Box, VStack, HStack } from "native-base";
import Dropdown from "~components/molecules/Dropdown";
import LertInput from "~components/molecules/LertInput";

const dropdownTypes = [
    { label: 'First', value: '1' },
    { label: 'Second', value: '2' },
    { label: 'Third', value: '3' },
    { label: 'Fourth', value: '4' },
]

const CurrentPeriod = () =>{

    let periodExample = [
        {quarter: 1, year: "2022", key: "idk",  status: "Active"},
        {quarter: 2, year: "2022", key: "idk",  status: "Active"},
    ]

    const [year, setYear] = useState("");
    const [key, setKey] = useState("");
    const [status, setStatus] = useState("");

    return (
        <LertScreen>
            
            <LertText
                text="Current Period"
                type={textTypes.display04} />

                <Overlay 
                    minWidth={"50%"} 
                    maxHeight={"60%"} 
                    buttonTitle="Add Period"
                    error={error}
                    setError={setError}
                    handleSubmit={handleSubmit}
                > 
                    <>
                        <HStack space={2} justifyContent="space-evenly">
                            <VStack alignItems={"flex-start"}>
                                <LertText text="Quarter" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                                <Dropdown placeholder="Quarter" items={dropdownTypes}/>
                            </VStack>
                            <VStack alignItems={"flex-start"}>
                                <LertText text="Year" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                                <LertInput text={year} setText={setYear} placeholder={"Year"}/>
                            </VStack>
                        </HStack>
                    </>
                </Overlay>

            <Box style={{ marginTop: "3%" }}>
                <Table 
                    headers={TABLE_HEADERS} 
                    items={periodExample} 
                    flexValues={[1, 1, 1, 1]}
                />
            </Box>

        </LertScreen>
    );
}

export default CurrentPeriod;