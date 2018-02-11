import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, TextInput, Alert
} from 'react-native';
import backSpecial from '../../Media/appIcon/backs.png';
import getToken from '../../api/getToken'
import changeInfoApi from '../../api/changeInfo'
export default class ChangeInfo extends Component {
    constructor(props) {
        super(props);
        const {name,address,phone} = this.props.navigation.state.params.user;
        this.state = {
            txtName: name,
            txtAddress: address,
            txtPhone: phone
        };
    }
    change(){
        const {txtName, txtAddress, txtPhone} = this.state;
        getToken()
        .then(token => changeInfoApi(token, txtName, txtPhone, txtAddress))
        .then(user => console.log(user))
        .catch(err => console.log(err));
    }

    render() {
        const { txtName, txtAddress, txtPhone } = this.state;
        return (
            <View style={style.wrapper}>
                <View style={style.header}>
                    <View />
                    <Text style={style.headerTitle}>Thông tin người dùng</Text>
                    <TouchableOpacity  onPress={() => { this.props.navigation.goBack()}}>
                        <Image source={backSpecial} style={style.backIconStyle} />
                    </TouchableOpacity>
                </View>
                <View style={style.body}>
                    <TextInput
                        style={style.textInput}
                        placeholder="Enter your name"
                        underlineColorAndroid ="transparent"
                        autoCapitalize="sentences"
                        value={txtName}
                        onChangeText={txtName => this.setState({ ...this.state, txtName })}
                    />
                    <TextInput
                        style={style.textInput}
                        placeholder="Enter your address"
                        underlineColorAndroid ="transparent"
                        autoCapitalize="none"
                        value={txtAddress}
                        onChangeText={txtAddress => this.setState({ ...this.state, txtAddress })}
                    />
                    <TextInput
                        style={style.textInput}
                        placeholder="Enter your phone number"
                        underlineColorAndroid ="transparent"   
                        autoCapitalize="none"
                        value={txtPhone}
                        onChangeText={txtPhone => this.setState({ ...this.state, txtPhone })}
                    />
                    <TouchableOpacity style={style.signInContainer}
                    onPress={
                        this.change.bind(this)
                    }
                    >
                        <Text style={style.signInTextStyle}>Thay đổi thông tin </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flex: 1,
        backgroundColor: '#2ABB9C',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10
    },// eslint-disable-line
    headerTitle: {
        fontFamily: 'Avenir',
        color: '#fff',
        fontSize: 18
    },
    backIconStyle: {
        width: 30,
        height: 30
    },
    body: {
        flex: 10,
        backgroundColor: '#F6F6F6',
        justifyContent: 'center'
    },
    textInput: {
        height: 45,
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Avenir',
        paddingLeft: 20,
        borderRadius: 20,
        marginBottom: 20,
        borderColor: '#2ABB9C',
        borderWidth: 1
    },
    signInTextStyle: {
        color: '#FFF',
        fontFamily: 'Avenir',
        fontWeight: '600',
        paddingHorizontal: 20
    },
    signInContainer: {
        marginHorizontal: 20,
        backgroundColor: '#2ABB9C',
        borderRadius: 20,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    signInStyle: {
        flex: 3,
        marginTop: 50
    }
});