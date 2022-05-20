import React from "react";
import { View, useWindowDimensions } from "react-native";
import { BarChart } from 'react-native-chart-kit';
import { Box } from "native-base";

import * as textTypes from '~styles/constants/textTypes';
import LertText from '~components/atoms/LertText';
import Theme from '../../theme/theme';

const data = {
	labels: ["Q1", "Q2", "Q3", "Q4"],
	datasets: [
		{
			data: [80, 56, 10, 20],
			colors: [
				(opacity = 1) => "#828",
				(opacity = 1) => "#381",
				(opacity = 1) => "#349",
				(opacity = 1) => "#900",
			]
		}
	],
	legend: ["BarChart"] // optional
};

const chartConfig = {
	backgroundColor: "#fff",
	backgroundGradientFrom: '#fff',
	backgroundGradientFromOpacity: 1.0,
	backgroundGradientTo: '#fff',
	backgroundGradientToOpacity: 1.0,
	color: (opacity = 1) => `rgba(50, 50, 100, ${opacity})`,
	strokeWidth: 3, // optional, default 3
	barPercentage: 3.0,
	propsForLabels: {
		fontSize: '15',
	},
	propsForBackgroundLines: {
		color: "#000",
	}
};

const Recovery = () => {

	const screenWidth = useWindowDimensions().width;
    const screenHeight = useWindowDimensions().height;

    return (
        <View>
            <LertText text="Recovery and Adjustments" type={textTypes.display04} color={Theme.colors.text.primary} style={{paddingLeft:"10%", paddingTop:"6%"}}/>

            <LertText text="Table per quarter" type={textTypes.display01} color={Theme.colors.text.primary} style={{paddingLeft:"10%", paddingTop:"4%"}}/>

            <Box alignItems="center" justifyContent="center" flex={1}>
                <BarChart
                    withHorizontalLabels={true}
                    data={data}
                    width={screenWidth/10.0 * 6}
                    height={screenHeight/10.0 * 5}
                    chartConfig={chartConfig}
                    style={{marginLeft: 8, marginRight: 8, borderRadius: 7}}
                    fromZero={true}
                    withCustomBarColorFromData={true}
                    flatColor={true}
                    showValuesOnTopOfBars={true}
                />
            </Box>

        </View>
    )
};

export default Recovery;