import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import signIn from '../../api/signIn'
import global from '../global'
import saveToken from '../../api/saveToken'
export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }
    onSignIn() {
        const { email, password } = this.state;
        signIn(email, password)
            .then(res => {
                global.onSignIn(res.user);
                this.props.goBackMain();
                saveToken(res.token);
            })
            .catch(err => console.log(err));
    }
    render() {
        const { email, password } = this.state;
        return (
            <View>
                <TextInput
                    style={style.inputStyle} placeholder="Nhập email của bạn"
                    underlineColorAndroid="transparent"
                    value={this.state.email}
                    onChangeText={text => this.setState({ email: text })}
                />
                <TextInput style={style.inputStyle} placeholder="Nhập password của bạn"
                    underlineColorAndroid="transparent"
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={text => this.setState({ password: text })}
                />
                <TouchableOpacity style={style.bigButton}
                    onPress={this.onSignIn.bind(this)}
                >
                    <Text style={style.buttonText}>
                        ĐĂNG NHẬP 
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