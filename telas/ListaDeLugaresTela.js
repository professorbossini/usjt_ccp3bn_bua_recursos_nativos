import React from 'react';

import { View, StyleSheet, Text, Platform, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import BotaoCabecalho from '../componentes/BotaoCabecalho';

import LugarItem from '../componentes/LugarItem'

const ListaDeLugaresTela = (props) => {
    const lugares = useSelector(estado => estado.lugares.lugares)
    return (
        <FlatList
            data={lugares}
            keyExtractor={lugar => lugar.id}
            renderItem={lugar =>
                <LugarItem
                    nomeLugar={lugar.item.titulo}
                    onSelect={() => {
                        props.navigation.navigate('DetalheDoLugar',
                            { tituloLugar: lugar.item.titulo, idLugar: lugar.id })
                    }}
                    imagem={lugar.item.imagemURI}
                    endereco={null}
                />
            }
        />
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