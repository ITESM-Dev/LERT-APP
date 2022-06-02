import { Box } from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import TableItem from "~components/molecules/TableItem";
import theme from "~theme/theme";

const data = [
    ["Item 1", "Item 2", "Item 3", "Item 4"], 
    ["Item 5", "Item 6", "Item 7", "Item 8"], 
    ["Item 9", "Item 10", "Item 11", "Item 12"], 
]

const ICARow = (props) => {
    const [open, setOpen] = useState(false)

    return (
        <TouchableOpacity
            onPress={() => setOpen(!open)}
            style={{
                borderColor: open ? theme.colors.components.highContrast : theme.colors.icons.primary,
                borderWidth: 0.1
            }}
        >
            <TableItem 
                items={["Item", "Item", "Item", "Item"]} 
                flexValues={[1, 1, 1, 1]} 
                amount={4} 
            />
            {open && 
                <Box 
                    flex={1}
                >
                    <TableItem 
                        items={data[0]} 
                        flexValues={[1, 1, 1, 1]} 
                        amount={4}
                    />
                    <TableItem 
                        items={data[1]} 
                        flexValues={[1, 1, 1, 1]} 
                        amount={4}
                    />
                    <TableItem 
                        items={data[2]} 
                        flexValues={[1, 1, 1, 1]} 
                        amount={4}
                    />
                </Box>
            }
        </TouchableOpacity>
    )
};

export default ICARow;