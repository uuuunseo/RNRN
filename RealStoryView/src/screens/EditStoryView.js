import React from "react";
import { WithLocalSvg } from 'react-native-svg/css';
import { View, SafeAreaView, TouchableOpacity, TextInput, Text } from "react-native";
import Multiply from '../assets/Icons/Multiply';

function EditStoryView() {
    const onClickCancelButton = () => {
        console.log("취소 버튼 클릭")
    }

    const onClickApplyButton = () => {
        console.log("완료 버튼 클릭")
    }

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#000000', alignItems: 'flex-start', paddingHorizontal: 15}}>
            <View>
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

            <View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: 400, fontSize: 32, lineHeight: 38, color: '#F5F5F5'}}>{'{'}</Text>
                    <TextInput placeholder="무언가를" placeholderTextColor='#666766' style={{fontWeight: 500, fontSize: 28, lineHeight: 33}}/>
                    <Text style={{fontWeight: 400, fontSize: 32, lineHeight: 38, color: '#F5F5F5'}}>{'}'}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default EditStoryView;

