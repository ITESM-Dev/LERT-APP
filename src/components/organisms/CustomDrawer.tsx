import { useState, useEffect, useRef } from "react";
import { View, Animated } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerContentScrollView, DrawerItemList, useDrawerProgress } from "@react-navigation/drawer";

import ProfileInfo from "~components/molecules/ProfileInfo";
import theme from "~theme/theme";
import { userSelector } from "~store/user";
import { useSelector } from "react-redux";

const CustomDrawer = (props: any) => {

    const user = useSelector(userSelector);
    
    const [completeScrollBarHeight, setCompleteScrollBarHeight] = useState(1);
    const [visibleScrollBarHeight, setVisibleScrollBarHeight] = useState(0);

    const scrollIndicatorSize =
        completeScrollBarHeight > visibleScrollBarHeight
            ? (visibleScrollBarHeight * visibleScrollBarHeight) / completeScrollBarHeight
            : visibleScrollBarHeight;

    const scrollIndicator = useRef(new Animated.Value(0)).current

    const difference =
        visibleScrollBarHeight > scrollIndicatorSize
            ? visibleScrollBarHeight - scrollIndicatorSize
            : 1;
            
    const scrollIndicatorPosition = Animated
        .multiply(
            scrollIndicator,
            visibleScrollBarHeight / completeScrollBarHeight
        )
        .interpolate({
            inputRange: [0, difference],
            outputRange: [0, difference],
            extrapolate: 'clamp'
        })
        

    const ScrollBar = () => 
        <>
            <View 
                style={{  
                    marginHorizontal: 1,
                    width: 3,
                    alignItems: 'center',
                    borderRadius: 2,
                    backgroundColor: theme.colors.components.background
                }}
            >
                <Animated.View
                    style={{
                        height: scrollIndicatorSize * 0.99,
                        width: 3,
                        borderRadius: 2,
                        backgroundColor: theme.colors.components.selectedState,
                        transform: [{ translateY: scrollIndicatorPosition  }]
                    }}
                />
            </View>
        </>

    return (
        <View style={{ flex: 1 }}>

            {/* Top Large Image */}
            <View style={{ flex: 1}}>
                <ProfileInfo
                    name={user.name}
                    role={user.role}
                />
            </View>

            {/* Options List */}
            <View style={{ flex: 2, flexDirection: 'row'}}>
                <DrawerContentScrollView 
                    {...props}

                    showsVerticalScrollIndicator={false}

                    onContentSizeChange={height => {
                        setCompleteScrollBarHeight(height);
                    }}

                    onLayout={({
                        nativeEvent: {
                            layout: { height }
                        }
                    }) => {
                        setVisibleScrollBarHeight(height);
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollIndicator } } }],
                        { useNativeDriver: false }
                    )}
                    scrollEventThrottle={8}
                >
                
                    <DrawerItemList 
                        {...props}
                    
                    />
                </DrawerContentScrollView>
                
                <ScrollBar />
            </View>

        </View>
    );
};

export default CustomDrawer;