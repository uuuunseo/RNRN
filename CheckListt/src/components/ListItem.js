import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const ListItem = () => {
    return(
        <View style={styles.container}>
            <BouncyCheckbox style={styles.checkBox}
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
                onPress={(isChecked) => {console.log(isChecked)}}
            />
            <Text style={styles.title}> 할 일을 체크  하자</Text>
        </View>
    );
};

export default ListItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 28,
        paddingVertical: 8,
    },
    checkBox: {
        flex: 1
    },
    title: {
        flex: 9
    }
});