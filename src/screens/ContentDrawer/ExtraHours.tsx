import { Text, View } from "react-native";

import Table from "~components/organisms/Table";
import TableItem from "~components/molecules/TableItem";

const ExtraHours = () => {

    let example = [
        {Type: 1, Band: 2, Country: "México", Rate: 5, DateOfStart:"22/01/18", DateOfFinish:"22/01/18"},
        {Type: 2, Band: 2, Country: "Culiacan", Rate: 4, DateOfStart:"22/03/18", DateOfFinish:"22/04/22"},
    ]

    return (
        <View>
            <Text>ExtraHours</Text>
            <Table headers={["Type", "Band", "Country", "Rate", "Date of Start", "Date of Finish"]} items={example} flexValues={[1, 1, 2, 1, 2, 2]}/>
        </View>
    )
};

export default ExtraHours;