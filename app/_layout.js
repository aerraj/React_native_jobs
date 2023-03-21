import {Stack} from 'expo-router';
import { useCallback}  from 'react';
import{useFonts}  from 'react';
import * as SplashScreen from 'expo-splash-screen'
SplashScreen.preventAutoHideAsync();
const Layout=()=>{
    const [fontsLoaded]=useFonts({
        DMBold:require('.')
    })
    return <Stack/>;

}
export default Layout;