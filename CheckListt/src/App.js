import React, { useRef, useState } from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, TextInput, SafeAreaView, Modal, Button } from "react-native";
import ListItem from "./components/ListItem";

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);
    const [editTaskIndex, setEditTaskIndex] = useState(null);
    const [editTaskText, setEditTaskText] = useState('');
    const inputRef = useRef(null);

    const onChangeTask = (inputTask) => {
        setNewTask(inputTask)
    }

    const onClickAddButton = () => {
        if(newTask.trim()) {
            setTasks([...tasks, { title: newTask, completed: false }])
        }
        setNewTask('')
        inputRef.current.focus();
    }

    const onDeleteTask = (deleteIndex) => {
        const updateTasks = tasks.filter((_, index) => index !== deleteIndex);
        setTasks(updateTasks);
    };

    const onEditTask = (index) => {
        setEditTaskIndex(index);
        setEditTaskText(tasks[index].title);
        setModalVisible(true)
    }

    const onSaveTask = () => {
        const updateTasks = tasks.map((task, index) =>
            index === editTaskIndex ? { ...tasks, title: editTaskText } : task
        )
        setTasks(updateTasks)
        setModalVisible(false)
        setEditTaskIndex(null)
        setEditTaskText('')
    }
    
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
                {tasks.slice().reverse().map((task, index) => (
                    <ListItem key={index} title={task.title} onDelete={() => onDeleteTask(index)} isChecked={task.completed} onEdit={() => onEditTask(index)} />
                ))}
            </ScrollView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TextInput
                            value={editTaskText}
                            onChangeText={setEditTaskText}
                            style={styles.modalInput}
                        />
                        <Button title="저장" onPress={onSaveTask} />
                        <Button title="취소" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
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
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center'
    },
    modalInput: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        width: '100%',
        marginBottom: 10,
        paddingHorizontal: 8
    }
});