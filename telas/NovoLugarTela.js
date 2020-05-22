import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { View, StyleSheet, Text, Button, ScrollView, TextInput } from 'react-native';
import Cores from '../constantes/Cores';
import * as lugaresActions from '../store/lugares-actions';
import TiraFoto from '../componentes/TiraFoto';
import CapturaLocalizacao from '../componentes/CapturaLocalizacao';


const NovoLugarTela = (props) => {
    const [novoLugar, setNovoLugar] = useState('');

    const dispatch = useDispatch();
    const novoLugarAlterado = (texto) => {
        setNovoLugar(texto);
    }

    const [imagemURI, setImagemURI] = useState();

    const fotoTirada = (imagemURI) => {
        setImagemURI(imagemURI);
    }

    const adicionarLugar = () => {
        dispatch(lugaresActions.addLugar(novoLugar, imagemURI));
        props.navigation.goBack();
    }
    return (
        <ScrollView>
            <View style={estilos.form}>
                <Text style={estilos.titulo}>Novo lugar</Text>
                <TextInput
                    style={estilos.textInput}
                    onChangeText={novoLugarAlterado}
                    value={novoLugar}
                />
                <TiraFoto onFotoTirada={fotoTirada} />
                <CapturaLocalizacao />
                <Button
                    title="Salvar lugar"
                    color={Cores.primary}
                    onPress={adicionarLugar}
                />
            </View>
        </ScrollView>
    )
}

const estilos = StyleSheet.create({
    form: {
        margin: 30
    },
    titulo: {
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: "#DDD",
        borderBottomWidth: 2,
        marginBottom: 15,
        paddingVertical: 4
    }

});

export default NovoLugarTela;