import { Text, View } from "react-native";

import Table from "~components/organisms/Table";
import LertText from '~components/atoms/LertText';
import Overlay from '~components/organisms/Overlay';
import LertInput from '~components/molecules/LertInput';
import * as textTypes from '~styles/constants/textTypes';

import Theme from '../../theme/theme';
import { useState } from "react";
import { HStack, ScrollView, VStack } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "~store/store";

import { allEmployees } from "~store/employees/selectors";
import LegalMenu from "~components/molecules/LegalMenu";
import containerStyles from "~styles/containers";
import { useEffect } from "react";
import { EmployeeType, setEmployees } from "~store/employees";
import LertScreen from "~components/organisms/LertScreen";

const TABLE_HEADERS = ["Num. Empleado", "Nombre", "Gerente", "Num. de ICA", "Banda"]

const Employee = () => {

    let example: EmployeeType[] = [
        {
            employeeNum: 121, 
            name: "Leonardo Galindo", 
            manager: "Ulises Venegas",  
            ICA: 5, 
            band: 4,
            id: 121
        },
        {
            employeeNum: 122,
            name: "Rafael Gómez", 
            manager: "Ulises Venegas",  
            ICA: 1, 
            band: 1,
            id: 122, 
        },
    ]

    const [numEmpleado, setNumEmpleado] = useState("");
    const [nombre, setNombre] = useState("");
    const [gerente, setGerente] = useState("");
    const [numICA, setNumeICA] = useState("");
    const [banda, setBanda] = useState("");

    // Store Dispatcher
    const dispatch: AppDispatch = useDispatch();

    // Employees - State
    const employees = useSelector(allEmployees);

    useEffect(() => {
        dispatch(setEmployees(example))
    }, [])

    return (
        <LertScreen>
            <LertText 
                text="Employees" 
                type={textTypes.display04} 
                color={Theme.colors.text.primary} 
            />

            <Overlay minWidth={"50%"} maxHeight={"50%"} buttonTitle="Add Employee"> 
                <>
                    <HStack space={2} justifyContent="space-evenly">
                        <VStack alignItems={"flex-start"}>

                            <LertText text="Num. Empleado" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>

                            <LertInput text={numEmpleado} setText={setNumEmpleado} placeholder={"Num. Empleado"}/>

                            <LertText text="Nombre" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>

                            <LertInput text={nombre} setText={setNombre} placeholder={"Nombre"}/>

                            <LertText text="Gerente" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>

                            <LertInput text={gerente} setText={setGerente} placeholder={"Gerente"}/>
                        </VStack>
                        <VStack alignItems={"flex-start"}>

                            <LertText text="Num. de ICA" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>

                            <LertInput text={numICA} setText={setNumeICA} placeholder={"Num. de ICA"}/>

                            <LertText text="Banda" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>

                            <LertInput text={banda} setText={setBanda} placeholder={"Banda"}/>
                        </VStack>
                    </HStack>
                </>
            </Overlay>

            <View style={{ 
                    marginTop: "3%",
                }}
            >
                <Table 
                    headers={TABLE_HEADERS} 
                    items={employees} 
                    flexValues={[1, 2, 2, 1, 1]}
                />
            </View>
        </LertScreen>
    )
};

export default Employee;