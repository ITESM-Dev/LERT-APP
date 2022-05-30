import { ScrollView, Text, View } from "react-native";
import LegalMenu from "~components/molecules/LegalMenu";
import Theme from '~theme/theme';
import LertText from "~components/atoms/LertText";
import * as textTypes from '~styles/constants/textTypes';
import LertButton from "~components/atoms/LertButton";
import Table from "~components/organisms/Table";
import { useState } from "react";
import { Box } from "native-base";
import LertScreen from "~components/organisms/LertScreen";

const TABLE_HEADERS = ["Quarter", "Year", "Key", "Status"]

const CurrentPeriod = () =>{

    let periodExample = [
        {quarter: 1, year: "2022", key: "idk",  status: "Active"},
        {quarter: 2, year: "2022", key: "idk",  status: "Active"},
    ]

    const [quarter, setQuarter] = useState("");
    const [year, setYear] = useState("");
    const [key, setKey] = useState("");
    const [status, setStatus] = useState("");

    return (
        <LertScreen>
            
            <LertText
                text="Current Period"
                type={textTypes.display04} />

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