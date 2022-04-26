import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "native-base";
import ProfileInfo from "~components/molecules/ProfileInfo";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Linking } from "react-native";

const CustomDrawer = (props) => {

	const user = {
		name: 'Rafael Gómez',
		role: "CEO"
	}

    return (
      <SafeAreaView style={{flex: 1}}>

          {/* Top Large Image */}
          <ProfileInfo
              name={user.name}
              role={user.role}
          />

          {/* Options List */}
          <DrawerContentScrollView {...props}>
              <DrawerItemList 
                  {...props} 
              />
          </DrawerContentScrollView>

      </SafeAreaView>
    );
};

export default CustomDrawer;