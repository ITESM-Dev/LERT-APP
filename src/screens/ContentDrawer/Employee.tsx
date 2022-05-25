import { Text, View } from "react-native";

import Table from "~components/organisms/Table";
import LertText from '~components/atoms/LertText';
import Overlay from '~components/organisms/Overlay';
import LertInput from '~components/molecules/LertInput';
import * as textTypes from '~styles/constants/textTypes';

import Theme from '../../theme/theme';
import { useState } from "react";
import { HStack, VStack } from "native-base";

const Employee = () => {

    let example = [
        {NumEmpleado: 121, Nombre: "Leonardo Galindo", Gerente: "Ulises Venegas",  NumICA: 5, Banda: 4},
        {NumEmpleado: 122, Nombre: "Rafael Gómez", Gerente: "Ulises Venegas",  NumICA: 1, Banda: 1},
    ]

    const [numEmpleado, setNumEmpleado] = useState("");
    const [nombre, setNombre] = useState("");
    const [gerente, setGerente] = useState("");
    const [numICA, setNumeICA] = useState("");
    const [banda, setBanda] = useState("");

    return (
        <View>

            <LertText text="Employees" type={textTypes.display04} color={Theme.colors.text.primary} style={{paddingLeft:"10%", paddingTop:"6%"}}/>

            <Overlay maxWidth={"50%"} maxHeight={"50%"} buttonTitle="Add Employee"> 
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

            <LertText text="Employees List" type={textTypes.display01} color={Theme.colors.text.primary} style={{paddingLeft:"10%", paddingTop:"4%"}}/>

            <Table headers={["Num. Empleado", "Nombre", "Gerente", "Num. de ICA", "Banda"]} items={example} flexValues={[1, 2, 2, 1, 1]} amount={5}/>

        </View>
    )
};

export default Employee;