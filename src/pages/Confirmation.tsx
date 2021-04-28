import React, {useState} from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import Button from '../components/Button';

export function Confirmation() {
    return (
        <SafeAreaView style={style.container}>
            <View style={style.content}>
                <Text style={style.emoji}>
                    😄
                </Text>
                <Text style={style.title}>
                    Prontinho
                </Text>
                <Text style={style.subtitle}>
                    Agora vamos começar a cuidar das suas plantinhas com muito cuidado
                </Text>
                <View style={style.footer}>
                    <Button title="Começar" />
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content:{
        flex: 1,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    emoji:{
        fontSize: 78,
    },
    title:{
        fontSize: 22,
        lineHeight: 38,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 15,
    },
    subtitle:{
        fontSize: 17,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.text,
        paddingVertical: 10
    },
    footer:{
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 50
    }

});