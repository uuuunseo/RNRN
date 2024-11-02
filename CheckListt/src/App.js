import React, { useRef, useState } from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, TextInput, SafeAreaView } from "react-native";
import ListItem from "./components/ListItem";

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const inputRef = useRef(null);

    const onChangeTask = (inputTask) => {
        setNewTask(inputTask)
    }

    const onClickAddButton = () => {
        if(newTask.trim()) {
            setTasks([...tasks, newTask])
        }
        setNewTask('')
        inputRef.current.focus();
    }

    const onDeleteTask = (deleteIndex) => {
        const updateTasks = tasks.filter((_, index) => index !== deleteIndex);
        setTasks(updateTasks);
    };
    
    return( 
        <SafeAreaView style={styles.total_container}>
            <Text style={styles.title}>체크리스트</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={onChangeTask}
                    value={newTask}
                    placeholder="할 일을 입력하세요.."
                    style={styles.inputTextField}
                    ref={inputRef}
                />

                <TouchableOpacity style={styles.plusButton} onPress={onClickAddButton}>
                    <Text style={{color: '#fff'}}> + </Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.checkListContainer}>
                {tasks.map((task, index) => (
                    <ListItem key={index} title={task} onDelete={() => onDeleteTask(index)} />
                ))}
            </ScrollView>
        </SafeAreaView>
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
        marginTop: 30
    },
    inputTextField: {
        height: 40, 
        borderColor: 'black', 
        borderWidth: 1, 
        paddingHorizontal: 8, 
        cornerRadius: 8, 
        flex: 9
    }
});