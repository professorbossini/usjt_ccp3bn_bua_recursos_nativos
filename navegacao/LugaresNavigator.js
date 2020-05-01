import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation'
import DetalhesDoLugarTela from '../telas/DetalhesDoLugarTela';
import ListaDeLugaresTela from '../telas/ListaDeLugaresTela';
import NovoLugarTela from '../telas/NovoLugarTela';
import MapaTela from '../telas/MapaTela';
import { Platform } from "react-native";
import Cores from "../constantes/Cores";

const LugaresNavigator = createStackNavigator(
    {
        Lugares: ListaDeLugaresTela,
        DetalheDoLugar: DetalhesDoLugarTela,
        NovoLugar: NovoLugarTela,
        Mapa: MapaTela
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Cores.primary : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Cores.primary
        }
    });

export default createAppContainer(LugaresNavigator);