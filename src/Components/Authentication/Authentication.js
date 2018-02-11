import React, { Component } from 'react';
import { 
    View, Text, TouchableOpacity, Image, StyleSheet,ImageBackground
 } from 'react-native';
import icBack from '../../Media/appIcon/back_white.png';
import icLogo from '../../Media/appIcon/ic_logo1.png'
import SignIn from '../../Components/Authentication/SignIn'
import  SignUp from '../../Components/Authentication/SignUp'
export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = { isSignIn: true };
    };
    gotoSignIn(){
        this.setState({ isSignIn : true})
    }
    gotoMain(){
        this.props.navigation.navigate("Main")
    }
        
    signIn () {
        this.setState({isSignIn : true})
    }
    signUp () {
        this.setState({isSignIn : false})
    }
    render() {
        const {
            activeStyle, inactiveStyle
        } = style;
        const { isSignIn } = this.state;
        const MainJSX =this.state.isSignIn ? <SignIn goBackMain = {this.gotoMain.bind(this) } /> : <SignUp gotoSignIn={this.gotoSignIn.bind(this)}/>
        return (
            <View style={style.container}
            // source={require('../../Media/temp/bshfOAr.jpg')}
            >
                <View style={style.row1}>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.goBack() }}
                    >
                        <Image source={icBack} style={style.iconStyle} />
                    </TouchableOpacity>
                    {/* <Text style={style.textStyle}>Mobile City </Text>
                    <Image source={icLogo} style={style.iconStyle} /> */}
                </View>
                <View style={{alignItems: 'center',justifyContent : 'center'}}>
                <Image style={{width : 125, height :125}}
                 source={require('../../Media/temp/quill.png')}
                />
                </View>
                <View>
                  {MainJSX}
                </View>
                <View style={style.controlStyle}>
                    <TouchableOpacity style={style.signInStyle}
                    onPress={this.signIn.bind(this)}
                    >
                        <Text style={isSignIn ? activeStyle : inactiveStyle}>
                            ĐĂNG NHẬP
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.signUpStyle}
                    onPress={this.signUp.bind(this)}
                    >
                        <Text style={!isSignIn ? activeStyle : inactiveStyle}>
                            ĐĂNG KÝ 
                            </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34B089',
        padding: 20,
        justifyContent: 'space-between'
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    controlStyle: {
        flexDirection: 'row',
        alignSelf: 'stretch'
    },
    inactiveStyle: {
        color: '#D7D7D7'
    },
    activeStyle: {
        color: '#3EBA77'
    },
    textStyle: {
        color: '#FF6633',
        fontFamily: 'Avenir',
        fontSize: 20,
        fontStyle: 'italic'
    },
    iconStyle: {
        width: 25,
        height: 25
    },
    signInStyle: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 15,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 1
    },
    signUpStyle: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        alignItems: 'center',
        flex: 1,
        marginLeft: 1,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20
    },
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