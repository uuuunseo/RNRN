import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const PromtBtn = ({ title, onPress, isSelected }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.background, { backgroundColor: isSelected ? '#3AF199' : '#232423' }]}>
            <Text style={[styles.title, { color: isSelected ? '#2B2B2B' : '#AEB0AE' }]}>{title}</Text>
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
    },
    title: {
        fontWeight: 700,
        fontSize: 14,
        lineHeight: 16,
    }
});