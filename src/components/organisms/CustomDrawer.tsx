import { useState } from "react";
import { View } from "react-native";

import { Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

import ProfileInfo from "~components/molecules/ProfileInfo";
import theme from "~theme/theme";
import { useRef } from "react";

const CustomDrawer = (props: any) => {

    /** @todo replace this with Redux State */
	const user = {
		name: 'Rafael Gómez',
		role: "CEO"
	}

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
                    height: '50%',
                    margin: 1,
                    width: 3,
                    alignItems: 'center',
                    borderRadius: 2,
                    backgroundColor: theme.colors.components.background
                }}
            >
                <Animated.View
                    style={{
                        height: scrollIndicatorSize,
                        width: 3,
                        borderRadius: 2,
                        backgroundColor: theme.colors.components.selectedState,
                        transform: [{ translateY: scrollIndicatorPosition  }]
                    }}
                />
            </View>
        </>

    return (
      <SafeAreaView style={{ flex: 1 }}>

        {/* Top Large Image */}
        <ProfileInfo
            name={user.name}
            role={user.role}
        />

        {/* Options List */}
        <View style={{ flex: 1,     flexDirection: 'row'}}>
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
                scrollEventThrottle={16}
            >
            
                <DrawerItemList 
                    {...props} 
                />
            </DrawerContentScrollView>
            
            <ScrollBar />
        </View>

      </SafeAreaView>
    );
};

export default CustomDrawer;