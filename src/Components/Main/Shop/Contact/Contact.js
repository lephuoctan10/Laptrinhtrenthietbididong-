import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import map from '../../../../Media/appIcon/map.png';

import phoneIcon from '../../../../Media/appIcon/phone.png';
import mailIcon from '../../../../Media/appIcon/mail.png';
import messageIcon from '../../../../Media/appIcon/message.png';
import locationIcon from '../../../../Media/appIcon/location.png';
import Header from '../../Header'

export default class Contact extends Component {
    render() {
        return (
            <View style={style.container}>
            <Header />
                <View style={style.wrapper}>
                    <View style={style.mapContainer}>
                    <Image style={style.mapStyle}
                      source={map}  />
                    </View>
                    <View style={style.infoContainer}>
                        <View style={style.rowInfoContainer}>
                            <Image source={locationIcon} style={style.imageStyle} />
                            <Text style={style.infoText}>18 Doan Nhu Hai/ Quan 4</Text>
                        </View>
                        <View style={style.rowInfoContainer}>
                            <Image source={phoneIcon} style={style.imageStyle} />
                            <Text style={style.infoText}>(+84) 1634278522</Text>
                        </View>
                        <View style={style.rowInfoContainer}>
                            <Image source={mailIcon} style={style.imageStyle} />
                            <Text style={style.infoText}>https://www.facebook.com/phuoc.tan.71</Text>
                        </View>
                        <View style={style.rowInfoContainer}>
                            <Image source={messageIcon} style={style.imageStyle} />
                            <Text style={style.infoText}>lephuoctan10@gmail.com</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBDB',
    },
    wrapper: {
        flex: 1,
        backgroundColor: '#F6F6F6'
    },
    mapStyle: {
        width: width - 40,
        height: 230,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mapContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFFFFF',
        margin: 10,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    infoContainer: {
        padding: 10,
        flex: 1,
        backgroundColor: '#FFF',
        margin: 10,
        marginTop: 0,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    rowInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#D6D6D6'
    },
    imageStyle: {
        width: 25,
        height: 25
    },
    infoText: {
        fontFamily: 'Avenir',
        color: 'black',
        fontWeight: '500'
    }
});