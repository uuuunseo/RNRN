import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const PromtBtn = ({title, onPress, isSelected}) => {
    return(
        <TouchableOpacity onPress={(onPress)} style={isSelected ? styles.selectedBackground : styles.background}>
            <Text style={isSelected ? styles.selectedTitle : styles.title}>{title}</Text>
        </TouchableOpacity>
    )
};

export default PromtBtn;

const styles = StyleSheet.create({
    background: {
        paddingHorizontal: 14, 
        paddingVertical: 10, 
        borderRadius: 42, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#232423',
    },
    selectedBackground: {
        paddingHorizontal: 14, 
        paddingVertical: 10, 
        borderRadius: 42,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3AF199'
    },
    title: {
        fontWeight: 700, 
        fontSize: 14, 
        lineHeight: 16,
        color: '#AEB0AE'
    },
    selectedTitle: {
        fontWeight: 700, 
        fontSize: 14, 
        lineHeight: 16,
        color: '#2B2B2B'
    }
});