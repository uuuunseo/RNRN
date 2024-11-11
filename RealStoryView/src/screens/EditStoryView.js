import React, {useState} from "react";
import { WithLocalSvg } from 'react-native-svg/css';
import { View, SafeAreaView, TouchableOpacity, TextInput, Text, Dimensions } from "react-native";
import Multiply from '../assets/Icons/Multiply.svg';
import Location from '../assets/Icons/Location.svg';
import PromtBtn from "../components/PromtBtn";

const screenWidth = Dimensions.get('window').width;
const statusMessages = ['독서', '공부', '힐링', '식사', '감상', '게임', '여행', '쇼핑', '운동', '상상', '이야기', '도전', '모험', '연애', '+'];
const locationMessages = ['현위치', '학원', '학교', '공원', '식당', '도서관', '편의점', '카페', '핫플', '지하철', '도로 위']

function EditStoryView() {
    const [activeButton, setActiveButton] = useState(null);
    const onClickCancelButton = () => {
        console.log("취소 버튼 클릭")
    }

    const onClickApplyButton = () => {
        console.log("완료 버튼 클릭")
    }

    const handlePressButton = (index) => {
        setActiveButton(index === activeButton ? null : index);
    };

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#000000', alignItems: 'flex-start', paddingHorizontal: 15}}>
            <View style={{height: 44, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: screenWidth - 15,}}>
                <TouchableOpacity onPress={onClickCancelButton} style={{position: 'absolute', left: 0}}>
                    <WithLocalSvg
                        width={24}
                        height={24}
                        asset={Multiply}
                        color={'#f5f5f5'}
                    />
                </TouchableOpacity>
                <Text style={{fontWeight: 700, fontSize: 16, lineHeight: 16, color: '#F5F5F5'}}>수정하기</Text>
                <TouchableOpacity onPress={onClickApplyButton} style={{position: 'absolute', right: 0}}>
                    <Text style={{fontWeight: 600, fontSize: 14, lineHeight: 16, color: '#3AF199'}}>완료</Text>
                </TouchableOpacity>
            </View>

            <View style={{marginTop: 32}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: 400, fontSize: 32, lineHeight: 38, color: '#F5F5F5'}}>{'{ '}</Text>
                    <TextInput placeholder="무언가를" placeholderTextColor='#666766' color='#F5F5F5' style={{fontWeight: 500, fontSize: 28, lineHeight: 33}}/>
                    <Text style={{fontWeight: 400, fontSize: 32, lineHeight: 38, color: '#F5F5F5'}}>{' }'}</Text>
                </View>
            </View>

            <View style={{marginTop: 57}}>
                <Text style={{fontWeight: 500, fontSize: 28, lineHeight: 33, color: '#666766'}}>하는 중</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', marginTop: 16, gap: 12}}>
                    {statusMessages.map((title, index) => (
                        <PromtBtn
                            key={index}
                            title={title}
                            onPressButton={() => handlePressButton(index)}
                            isActive={activeButton === index}
                        />
                    ))}
                </View>
            </View>

            <View style={{marginTop: 52}}>
                <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 4}}>
                    <WithLocalSvg
                        width={24}
                        height={24}
                        asset={Location}
                        color={'#666766'}
                    />
                    <Text style={{color: '#666766', fontWeight: 500, fontSize: 28, lineHeight: 33}}>어딘가</Text>
                </View>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', marginTop: 17, gap: 12}}>
                    {locationMessages.map((title, index) => (
                        <PromtBtn
                            key={index}
                            title={title}
                            onPressButton={() => handlePressButton(index)}
                            isActive={activeButton === index}
                        />
                    ))}
                </View> 
            </View>
        </SafeAreaView>
    )
}

export default EditStoryView;

