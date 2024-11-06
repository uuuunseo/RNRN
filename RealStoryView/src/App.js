import React from "react";
import { StyleSheet, View, SafeAreaView, Image, Text, TextInput, Dimensions, TouchableOpacity } from "react-native";
import { WithLocalSvg } from 'react-native-svg/css';
import ChevronLeft from './assets/Icons/ChevronLeft.svg';
import Add from './assets/Icons/Add.svg';
import Location from './assets/Icons/Location.svg';
import Vector from './assets/Icons/Vector.svg';
import Happy from './assets/Happy.jpeg';
import Hey from './assets/Hey.jpeg';

const screenWidth = Dimensions.get('window').width;

function App() {
  const onClickBackButton = () => {
    console.log("뒤로가기 버튼 클릭")
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClickBackButton}>
          <WithLocalSvg
            width={24}
            height={24}
            asset={ChevronLeft}
            color={'#f5f5f5'}
            style={{position: 'absolute', left: 0, marginLeft: 15}}
          />
        </TouchableOpacity>
        <Text style={styles.navigationTitle}>리얼스토리 업로드</Text>
      </View>

      <View style={styles.promtBackground}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={Happy} style={{width: 28, height: 28, borderRadius: 100}}/>
          <Text style={{color: '#AEB0AE', marginLeft: 6, fontWeight: 700, fontSize: 14}}> 안냥</Text>
        </View>

        <View style={styles.realImage}>
          <Image source={Hey} style={{width: '100%', height: '100%', borderRadius: 20}}/>
        </View>

        <View>
        <Text style={styles.promtContext}>지금 무엇을 하고 있나요?</Text>

        <View style={{flexDirection: 'row', height: 38, marginTop: 4}}>
          <TextInput placeholder="{ 무언가를 }" placeholderTextColor='#666766' style={{fontWeight: 400, fontSize: 32, color: '#666766'}}/>
          <Text style={{fontWeight: 400, fontSize: 32, color: '#666766'}}> 하는 중</Text>
          <WithLocalSvg
            width={18}
            height={18}
            asset={Add}
            color={'#666766'}
            style={{marginLeft: 8}}
          />
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
          <WithLocalSvg
            width={20}
            height={20}
            asset={Location}
            color={"#666766"}
          />
          <Text style={{color: '#666766', fontWeight: 500, fontSize: 22}}>어딘가</Text>
        </View>
        </View>
      </View>

      <View>
        <TouchableOpacity style={{width: 60, height: 60, backgroundColor: '#3AF199', borderRadius: 60, justifyContent: 'center', alignItems: 'center', marginBottom: 40}}>
            <WithLocalSvg
              width={20}
              height={20}
              asset={Vector}
              color={'#000000'}
            />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  header: {
    height: 44, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    paddingHorizontal: 15,
    backgroundColor: '#29262e'
  },
  navigationTitle: {
    fontWeight: 700, 
    fontSize: 16, 
    lineHeight: 16, 
    color: '#fff',
    position: 'absolute', // 중앙에 배치하기 위한 절대 위치
    left: '50%', // 화면의 중앙으로 이동
    transform: [{ translateX: '-50%' }], // 중앙 정렬을 위한 이동
  },
  promtBackground: {
    flex: 1, 
    backgroundColor: '#1B1B1B', 
    height: 514,
    width: screenWidth - 30,
    borderRadius: 30,
    marginBottom: 53, 
    padding: 16,
    marginTop: 12
  },
  realImage: {
    height: 313,
    resizeMode: 'contain', 
    alignItems: 'center',
    marginTop: 8
  },
  promtContext: {
    color: '#3AF199', 
    fontWeight: 600, 
    fontSize: 14, 
    marginTop: 14
  }
});