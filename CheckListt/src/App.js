import React from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import ListItem from "./components/ListItem";

function App() {
    const todos = ["할 일", "하자", "진짜", "한다", "진짜로"]
    return( 
        <View style={styles.total_container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>체크리스트</Text>

                <TouchableOpacity style={styles.plusButton}>
                    <Text> + </Text>
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
        marginTop: 30,
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