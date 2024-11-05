import React from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";

const EditModal = ({editTaskText, onChangeEditTaskText, onSaveTask, onChangeIsModalVisible}) => {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>수정하기</Text> 
                <TextInput
                    value={editTaskText}
                    onChangeText={onChangeEditTaskText}
                    style={styles.input}
                />
                <View style={styles.buttonContainer}>
                    <Button title="수정" onPress={onSaveTask} />
                    <Button title="취소" onPress={onChangeIsModalVisible} />
                </View>
            </View>
        </View>
    )
}

export default EditModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    title: {
        fontSize: 20,
        fontWeight: 700
    },
    content: {
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center'
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        width: '100%',
        marginTop: 10,
        paddingHorizontal: 8,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row'
    }
})