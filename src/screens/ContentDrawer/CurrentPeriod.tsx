import { ScrollView, Text, View } from "react-native";
import LegalMenu from "~components/molecules/LegalMenu";
import Theme from '~theme/theme';
import LertText from "~components/atoms/LertText";
import * as textTypes from '~styles/constants/textTypes';
import LertButton from "~components/atoms/LertButton";
import Table from "~components/organisms/Table";
import { useState } from "react";
import { Box } from "native-base";
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
        <ScrollView>
            <View style={{ flexDirection: "row", marginHorizontal: "5%", marginVertical: "5%" }}>
                <View style={{ flexDirection: "column", width: "85%" }}>
                    <LertText
                        text="Current Period"
                        type={textTypes.display04} />
                    <LertText
                        text="Period List"
                        type={textTypes.heading4}
                        style={{ marginTop: "3%" }} />

                </View>
                <LertButton
                    title="Continue"
                    type={"primary"}
                    onPress={() => {
                        // navigation.navigate("Content")
                    } }
                    style={{
                        width: "10%",
                        marginTop: "10%"
                    }} />


            </View>
            <Box style={{marginBottom:"5%", width:"95%"}}>
                <Table headers={["Quarter", "Year", "Key", "Status"]} items={periodExample} flexValues={[1, 1, 1, 1]}/>
            </Box>
            <LegalMenu />

        </ScrollView>
    );
}

export default CurrentPeriod;