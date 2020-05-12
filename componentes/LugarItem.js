import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Cores from '../constantes/Cores'



const LugarItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onSelect} style={estilos.lugarItem}>
            <Image
                style={estilos.imagem}
                source={{ uri: props.imagem }}
            />
            <View style={estilos.infoContainer}>
                <Text style={estilos.nomeLugar}>{props.nomeLugar}</Text>
                <Text style={estilos.endereco}>{props.endereco}</Text>
            </View>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    lugarItem: {
        flexDirection: 'row',
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignItems: 'center'
    },
    infoContainer: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    imagem: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#CCC',
        borderColor: Cores.primary,
        borderWidth: 1
    },
    nomeLugar: {
        color: 'black',
        fontSize: 18,
        marginBottom: 5
    },
    endereco: {
        color: '#666',
        fontSize: 16
    }

});

export default LugarItem;