import React, { useState } from "react";
import { WithLocalSvg } from 'react-native-svg/css';
import { View, SafeAreaView, TouchableOpacity, TextInput, Text, Dimensions, StyleSheet } from "react-native";
import Multiply from '../assets/Icons/Multiply.svg';
import Location from '../assets/Icons/Location.svg';
import PromtBtn from "../components/PromtBtn";

const screenWidth = Dimensions.get('window').width;

const statusMessages = [
    { id: 1, status: '독서' },
    { id: 2, status: '공부' },
    { id: 3, status: '힐링' },
    { id: 4, status: '식사' },
    { id: 5, status: '감상' },
    { id: 6, status: '게임' },
    { id: 7, status: '여행' },
    { id: 8, status: '쇼핑' },
    { id: 9, status: '운동' },
    { id: 10, status: '상상' },
    { id: 11, status: '이야기' },
    { id: 12, status: '도전' },
    { id: 13, status: '모험' },
    { id: 14, status: '연애' },
];
const locationMessages = [
    { id: 1, location: '현위치' },
    { id: 2, location: '학원' },
    { id: 3, location: '학교' },
    { id: 4, location: '공원' },
    { id: 5, location: '식당' },
    { id: 6, location: '도서관' },
    { id: 7, location: '편의점' },
    { id: 8, location: '카페' },
    { id: 9, location: '핫플' },
    { id: 10, location: '지하철' },
    { id: 11, location: '도로 위' }
];

function EditStoryView({ navigation }) {
    const [activeStatusButton, setActiveStatusButton] = useState(null);
    const [activeLocationButton, setActiveLocationButton] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState('하는');
    const [selectedLocation, setSelectedLocation] = useState('어딘가');

    const onClickApplyButton = () => {
        console.log("완료 버튼 클릭")
    }

    const handleActiveStatusButton = (item) => {
        setActiveStatusButton(item.id === activeStatusButton ? null : item.id);
        setSelectedStatus(item.status === selectedStatus ? '하는' : item.status)
    };

    const handleActiveLocationButton = (item) => {
        setActiveLocationButton(item.id === activeLocationButton ? null : item.id);
        setSelectedLocation(item.location === selectedLocation ? '어딘가' : item.location)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', left: 0 }}>
                    <WithLocalSvg
                        width={24}
                        height={24}
                        asset={Multiply}
                        color={'#f5f5f5'}
                    />
                </TouchableOpacity>
                <Text style={{ fontWeight: 700, fontSize: 16, lineHeight: 16, color: '#F5F5F5' }}>수정하기</Text>
                <TouchableOpacity onPress={onClickApplyButton} style={{ position: 'absolute', right: 0 }}>
                    <Text style={{ fontWeight: 600, fontSize: 14, lineHeight: 16, color: '#3AF199' }}>완료</Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 32, width: screenWidth - 30 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.curlyBraceText}>{'{ '}</Text>
                    <TextInput placeholder="무언가를" placeholderTextColor='#666766' color='#F5F5F5' style={styles.actionText} />
                    <Text style={styles.curlyBraceText}>{' }'}</Text>
                </View>
            </View>

            <View style={{ marginTop: 57, width: screenWidth - 30 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.actionText, { color: selectedStatus == '하는' ? '#666766' : '#F5F5F5' }]}>{selectedStatus}</Text>
                    <Text style={[styles.actionText, { color: selectedStatus == '하는' ? '#666766' : '#F5F5F5' }]}> 중</Text>
                </View>
                <View style={styles.promtButtonContainer}>
                    {statusMessages.map((item, _) => (
                        <PromtBtn
                            key={item.id}
                            title={item.status}
                            onPress={() => handleActiveStatusButton(item)}
                            isSelected={activeStatusButton == item.id}
                        />
                    ))}
                </View>
            </View>

            <View style={{ marginTop: 52, width: screenWidth - 30 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 4 }}>
                    <WithLocalSvg
                        width={24}
                        height={24}
                        asset={Location}
                        color={selectedLocation == '어딘가' ? '#666766' : '#F5F5F5'}
                    />
                    <Text style={[styles.actionText, { color: selectedLocation == '어딘가' ? '#666766' : '#F5F5F5' }]}>{selectedLocation}</Text>
                </View>
                <View style={styles.promtButtonContainer}>
                    {locationMessages.map((item, _) => (
                        <PromtBtn
                            key={item.id}
                            title={item.location}
                            onPress={() => handleActiveLocationButton(item)}
                            isSelected={activeLocationButton == item.id}
                        />
                    ))}
                </View>
            </View>
        </SafeAreaView>
    )
};

export default EditStoryView;

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
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth - 30
    },
    curlyBraceText: {
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 38,
        color: '#F5F5F5'
    },
    actionText: {
        fontWeight: 500,
        fontSize: 28,
        lineHeight: 33
    },
    promtButtonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginTop: 17,
        gap: 12
    }
});