import React, { useState } from 'react';

import { View, StyleSheet, Text, Button, ScrollView } from 'react-native';
import Cores from '../constantes/Cores';



const NovoLugarTela = (props) => {
    const [novoLugar, setNovoLugar] = useState('');

    const novoLugarAlterado = (texto) => {
        setNovoLugar(texto);
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
                <Button
                    title="Salvar lugar"
                    color={Cores.primary}
                    onPress={novoLugarAlterado}
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