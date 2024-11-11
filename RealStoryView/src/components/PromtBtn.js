import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const PromtBtn = ({title, onPressButton, isActive}) => {
    return(
        <TouchableOpacity style={[styles.container, {backgroundColor: isActive ? '#3AF199' : 'rgba(0, 0, 0, 0.5)'}]}>
            <Text style={[styles.title, {color: isActive ? '#2B2B2B' : '#666766'}]}>{title}</Text>
        </TouchableOpacity>
    )
};

export default PromtBtn;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 14, 
        paddingVertical: 10, 
        borderRadius: 42, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 700, 
        fontSize: 14, 
        lineHeight: 16
    }
});