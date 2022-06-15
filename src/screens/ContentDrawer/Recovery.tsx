import { useState } from "react";
import { useWindowDimensions } from "react-native";
import { BarChart } from 'react-native-chart-kit';
import { Box } from "native-base";

import { ExpensesForQuarterForm, useExpensesForQuarterQuery } from "~store/api";

import LertText, { TextStyles } from '~components/atoms/LertText';
import LertScreen from "~components/organisms/LertScreen";

import theme from '~theme/theme';
import * as textTypes from '~styles/constants/textTypes';

const chartConfig = {
	backgroundColor: "#fff",
	backgroundGradientFrom: '#fff',
	backgroundGradientFromOpacity: 1.0,
	backgroundGradientTo: '#fff',
	backgroundGradientToOpacity: 1.0,
	color: () => theme.colors.text.primary,
	strokeWidth: 0,
	barPercentage: 3.0,
	propsForLabels: {
		...TextStyles[textTypes.shortParagraph]
	},
	propsForHorizontalLabels: {
		...TextStyles[textTypes.shortParagraph]
	},
	propsForBackgroundLines: {
		color: "#000",
	}
};

const Recovery = () => {
	const screenWidth = useWindowDimensions().width;
	const screenHeight = useWindowDimensions().height;

	const [year, setYear] = useState("2021")

	const { data, isLoading } = useExpensesForQuarterQuery({ year } as ExpensesForQuarterForm)
	
	const charData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
            {
                data:
                    data !== undefined
                        ? [data['1'], data['2'], data['3'], data['4']]
                        : [40, 30, 20, 10],
                colors: [
                    () => theme.colors.actions.actionShade2,
                    () => theme.colors.actions.actionPrimary,
                    () => theme.colors.actions.actionShade1,
                    () => theme.colors.actions.actionShade0
                ]
            }
        ]
    };

    return (
        <LertScreen isLoading={isLoading}>
            <LertText 
				text="Recovery and Adjustments" 
				type={textTypes.display04} 
				color={theme.colors.text.primary}
			/>

			<LertText 
				text={`From ${year}`} 
				type={textTypes.display01} 
				color={theme.colors.text.primary}
			/>

            <Box alignItems="center" justifyContent="center" flex={1}>
                <BarChart
                    data={charData}
					//@ts-ignore
                    chartConfig={chartConfig}
					fromZero={true}
					withCustomBarColorFromData={true}
					showValuesOnTopOfBars={true}
					
					yAxisLabel={"$"}

                    height={screenHeight / 10.0 * 5}
                    width={screenWidth / 10.0 * 7}
					
                    withHorizontalLabels={true}
					withInnerLines={false}
					flatColor={true}
                    style={{
						marginTop: "3%"
					}}
                />
            </Box>

        </LertScreen>
    )
};

export default Recovery;