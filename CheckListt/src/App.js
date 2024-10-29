import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import ListItem from "./components/ListItem";

function App() {
    return( 
        <View style={styles.total_container}>
            <Text style={styles.title}>체크리스트</Text>
            <ScrollView contentContainerStyle={styles.checkListContainer}>
                <ListItem/>
                <ListItem/>
            </ScrollView>
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    totalContainer:{
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 28,
        marginTop: 30,
        fontWeight: 700,
        marginLeft: 24
    },
    checkListContainer: {
        marginTop: 20,
        marginHorizontal: 10
    }
});