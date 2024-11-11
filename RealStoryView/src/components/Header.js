import React from "react";
import { WithLocalSvg } from 'react-native-svg/css';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width;

const Header = ({ onClickBackButton, iconImage, title }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={onClickBackButton} style={styles.buttonImage}>
                <WithLocalSvg
                    width={24}
                    height={24}
                    asset={iconImage}
                    color={'#f5f5f5'}
                />
            </TouchableOpacity>
            <Text style={styles.navigationTitle}>{title}</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth - 30,
    },
    buttonImage: {
        position: 'absolute',
        left: 0
    },
    navigationTitle: {
        fontWeight: 700,
        fontSize: 16,
        lineHeight: 16,
        color: '#F5F5F5',
    }
});