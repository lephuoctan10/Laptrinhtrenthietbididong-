import React, { Component } from 'react';
import {View,TextInput,Text,TouchableOpacity,StyleSheet,Alert} from 'react-native';
import register from '../../api/register';
export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            rePassword: ''
        };
    }
    onSuccess() {
        Alert.alert(
            'Notice',
            'Sign up successfully',
            [
                { text: 'OK', onPress : this.props.gotoSignIn() }
            ],
            { cancelable: false }
        );
    }
    onFail() {
        Alert.alert(
            'Notice',
            'Email has been used by other',
            [
                { text: 'OK', onPress: () => this.removeEmail.bind(this) }
            ],
            { cancelable: false }
        );
    }
    removeEmail() {
        this.setState({ email: '' });
    }
    registerUser() {
        const { email, name, password } = this.state;
        register(email, name, password)
        .then(res => {
            if (res === 'THANH_CONG') return this.onSuccess();
            this.onFail();
        });
    }
    render() {
        return (
            <View>
                <TextInput style={style.inputStyle} placeholder="Nhập tên của bạn"
                underlineColorAndroid ="transparent"
                value ={this.state.name}
                onChangeText={text => this.setState({name : text})}
                 />
                <TextInput style={style.inputStyle} placeholder="Nhập email của bạn" 
                underlineColorAndroid ="transparent"
                value ={this.state.email}
                onChangeText={text => this.setState({email : text})}
                />
                <TextInput style={style.inputStyle} placeholder="Nhập password của bạn"
                underlineColorAndroid ="transparent"
                secureTextEntry
                value ={this.state.password}
                onChangeText={text => this.setState({password : text})}
                 />
                <TextInput style={style.inputStyle} placeholder="Nhập lại password của bạn" 
                underlineColorAndroid ="transparent"
                secureTextEntry
                value ={this.state.rePassword}
                onChangeText={text => this.setState({rePassword : text})}
                />
                <TouchableOpacity style={style.bigButton}
                onPress = { this.registerUser.bind(this)} 
                >
                    <Text style={style.buttonText}>
                        ĐĂNG KÝ NGAY 
                            </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const style = StyleSheet.create({
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
    },
    bigButton: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'Avenir',
        color: '#fff',
        fontWeight: '400'
    }
})