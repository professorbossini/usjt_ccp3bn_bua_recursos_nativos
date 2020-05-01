import React from 'react';

import { View, StyleSheet, Text, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import BotaoCabecalho from '../componentes/BotaoCabecalho';


const ListaDeLugaresTela = (props) => {
    return (
        <View>
            {ListaDeLugaresTela}
        </View>
    )
}

ListaDeLugaresTela.navigationOptions = (dadosNav) => {
    return {
        headerTitle: 'Todos os lugares',
        headerRight:
            <HeaderButtons HeaderButtonComponent={BotaoCabecalho}>
                <Item
                    title="Adicionar"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => { dadosNav.navigation.navigate("NovoLugar") }}
                />
            </HeaderButtons>
    }
}


const estilos = StyleSheet.create({});

export default ListaDeLugaresTela;