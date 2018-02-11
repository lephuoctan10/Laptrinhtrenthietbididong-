import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image,ImageBackground } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Authentication from '../Authentication/Authentication';
import OrderHistory from '../OrderHistory/OrderHistory';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import profileIcon from '../../Media/temp/user2.png'
import global from '../../Components/global'
import saveToken from '../../api/saveToken'
export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { user: null };
        global.onSignIn = this.onSignIn.bind(this);
    }
    onSignIn(user){
        this.setState({ user });
    }
    onSignOut()
    {
        this.setState({user : null})
        saveToken('');
    }
    render() {
        const {user} = this.state;
        const logoutJSX = (
            <View>
                <TouchableOpacity style={style.btnStyle}
                onPress={() => { this.props.navigation.navigate('Authentication')}}
                >
                    <Text style={style.btnText}> Đăng nhập </Text>
                </TouchableOpacity>
            </View>
        );
        const loginJSX = (
            <View style={style.loginContainer}>
                <Text style={style.username} >{user ? user.name: ''}</Text>
                <View>
                    <TouchableOpacity style={style.btnSignInStyle}
                        onPress={() => { this.props.navigation.navigate('OrderHistory'); }}
                    >
                        <Text style={style.btnTextSignIn}>Lịch sử mua hàng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.btnSignInStyle}
                        onPress={() => { this.props.navigation.navigate('ChangeInfo',{user}) }}
                    >
                        <Text style={style.btnTextSignIn}>Thay đổi thông tin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.btnSignInStyle}
                        onPress ={this.onSignOut.bind(this)} 
                    >
                        <Text style={style.btnTextSignIn}>Đăng Xuất</Text>
                    </TouchableOpacity>
                </View>
                <View />
            </View>
        )
        const mainJSX = this.state.user ? loginJSX : logoutJSX;
        return (
            <View style={style.container}
            // source={require('../../Media/temp/bshfOAr.jpg')}
            >
                <Image source={profileIcon} style={style.profile} />
                {mainJSX}
            </View>
        );
    }
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34B089',
        borderRightWidth: 3,
        borderColor: '#fff',
        alignItems: 'center'
    },
    profile: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginVertical: 30
    },
    btnStyle: {
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 50

    },
    btnText: {
        color: '#34B089',
        fontFamily: 'Avenir',
        fontSize: 15
    },
    btnSignInStyle: {
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderRadius: 5,
        paddingHorizontal: 40,
        marginBottom: 10,
        alignItems: 'center'

    },
    btnTextSignIn: {
        color: '#34B089',
        fontSize: 13
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    username: {
        color: '#fff',
        fontFamily: 'Avenir',
        fontSize: 15
    }
})