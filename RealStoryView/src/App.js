import React from "react";
import { StyleSheet, View, SafeAreaView, Image, Text, TextInput } from "react-native";
import { WithLocalSvg } from 'react-native-svg/css';
import ChevronLeft from './assets/Icons/ChevronLeft.svg';
import Happy from './assets/Happy.jpeg';
import Hey from './assets/Hey.jpeg';

function App() {
  return(
    <SafeAreaView style={styles.container}>s
      <View style={styles.header}>
        <WithLocalSvg
          width={24}
          height={24}
          asset={ChevronLeft}
        />
        <Text style={styles.navigationTitle}>리얼스토리 업로드</Text>
      </View>

      <View style={styles.promtBackground}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={Happy} style={{width: 28, height: 28, borderRadius: 100}}/>
          <Text style={{color: '#AEB0AE', marginLeft: 6, fontWeight: 700, fontSize: 14}}> 안냥</Text>
        </View>

        <Image source={Hey} style={styles.realImage}/>

        <Text style={styles.promtContext}>지금 무엇을 하고 있나요?</Text>

        <View style={{flexDirection: 'row'}}>
          <TextInput placeholder="{ 무언가를 } 하는 중" placeholderTextColor='#666766' style={{height: 38, fontWeight: 400, fontSize: 32, marginTop: 4, color: '#666766'}}/>
          <WithLocalSvg
            width={18}
            height={18}
            asset={ChevronLeft}
          />
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <WithLocalSvg
            width={20}
            height={20}
            asset={ChevronLeft}
            color={"#666766"}
          />
          <Text style={{color: '#666766', fontWeight: 500, fontSize: 22}}>어딘가</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'flex-start'
  },
  header: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 18, 
    paddingHorizontal: 15,
    marginTop: 0
  },
  navigationTitle: {
    flex: 1, 
    fontWeight: 700, 
    fontSize: 16, 
    lineHeight: 16, 
    color: '#fff', 
    justifyContent: 'center'
  },
  promtBackground: {
    flex: 1, 
    backgroundColor: '#1B1B1B', 
    height: 514, 
    marginHorizontal: 15, 
    borderRadius: 30, 
    marginTop: -100, 
    marginBottom: 53, 
    padding: 16
  },
  realImage: {
    height: 313, 
    resizeMode: 'contain', 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    marginTop: 8
  },
  promtContext: {
    color: '#3AF199', 
    fontWeight: 600, 
    fontSize: 14, 
    marginTop: 14
  }
});