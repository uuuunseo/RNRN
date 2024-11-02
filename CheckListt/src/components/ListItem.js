import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const ListItem = ({title, onDelete}) => {
    return(
        <View style={styles.container}>
            <BouncyCheckbox
                style={styles.checkBox}
                size={24}
                fillColor="black"
                unFillColor="white"
                iconStyle={{
                    borderColor: "black",
                    borderRadius: 0
                }}
                innerIconStyle={{
                    borderWidth: 1,
                    borderRadius: 0
                }}
                textStyle={{ fontFamily: "JosefinSans-Regular" }}
                onPress={(isChecked) => {
                    console.log(isChecked);
                }}
            />
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
            <TouchableOpacity style={styles.editButton}>
                <Text>수정</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
                <Text>삭제</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        marginHorizontal: 7,
    },
    checkBox: {
        flex: 1,
    },
    title: {
        flex: 7,
        fontSize: 20,
        marginRight: 10
    },
    editButton: {
        padding: 5,
        backgroundColor: '#ddd',
        borderRadius: 5,
        marginRight: 10
    },
    deleteButton: {
        padding: 5,
        backgroundColor: '#ddd',
        borderRadius: 5
    }
});