import React from 'react';
import {Text, TouchableOpacity, StyleSheet,TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export default function Button({title, ...rest} : ButtonProps) {
    return (
        <TouchableOpacity style={style.button} activeOpacity={0.7} {...rest} >
            <Text style={style.buttonText}> {title} </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({

    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 20,
        height: 56,
        paddingHorizontal: 10
    },
    buttonText:{
        color: colors.white,
        fontSize: 15,
        fontFamily: fonts.heading
    }
})