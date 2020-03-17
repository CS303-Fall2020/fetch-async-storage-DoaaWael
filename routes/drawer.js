import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import HomeStack from './homeStack'
import AboutStack from './aboutStack'
import Loading from "../screens/loading";

const RootDrawerNavigator = createDrawerNavigator({
    loading: {
        screen: Loading,
        navigationOptions: {
            drawerLabel: () => null
        }

    },
    Home: {
        screen: HomeStack,
    },
    About: {
        screen: AboutStack,
    }
})

export default createAppContainer(RootDrawerNavigator);