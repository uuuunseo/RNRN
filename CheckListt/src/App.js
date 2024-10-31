import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ListItem from "./components/ListItem";

function App() {
    const todos = ["할 일", "하자", "진짜", "한다", "진짜로"]
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState(todos);

    // 할 일 추가 (todos에 newTask로 작성한 String이 append되고, tasks가 update 되면 리스트 다시 불러오기?)
    const addTask = () => {
        if(newTask) {

        }
    }

    return( 
        <View style={styles.total_container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>체크리스트</Text>

                <TouchableOpacity style={styles.plusButton}>
                    <Text style={{color: '#fff'}}> + </Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.checkListContainer}>
                {todos.map((todo, index) => (
                    <ListItem key={index} title={todo}/>
                ))}
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
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 50,
        marginHorizontal: 16
    },
    title: {
        fontSize: 28,
        fontWeight: 700,
    },
    plusButton: {
        width: 24, 
        height: 24, 
        backgroundColor: '#AAD1E7',
        alignItems: 'center', 
        justifyContent: 'center'
    },
    checkListContainer: {
        marginTop: 10
    }
});