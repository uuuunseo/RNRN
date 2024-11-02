import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";
import ListItem from "./components/ListItem";

function App() {
    const [task, setTask] = useState('');

    const onChangeTask = (inputTask) => {
        setTask(inputTask)
    }
    
    return( 
        <View style={styles.total_container}>
            <Text style={styles.title}>체크리스트</Text>

            <View style={styles.inputContainer}>
            <TextInput
                onChangeText={onChangeTask}
                value={task}
                placeholder="할 일을 입력하세요.."
                style={{height: 40, borderColor: 'black', borderWidth: 1, paddingHorizontal: 8, cornerRadius: 8, flex: 9}}
            />

            <TouchableOpacity style={styles.plusButton}>
                    <Text style={{color: '#fff'}}> + </Text>
            </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.checkListContainer}>
                
            </ScrollView>
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    totalContainer:{
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 24
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 50,
        marginHorizontal: 16
    },
    title: {
        fontSize: 28,
        fontWeight: 700,
        marginTop: 30,
        marginLeft: 10
    },
    plusButton: {
        width: 40, 
        height: 40, 
        backgroundColor: '#AAD1E7',
        alignItems: 'center', 
        justifyContent: 'center'
    },
    checkListContainer: {
        marginTop: 10
    }
});