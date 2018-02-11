import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView,Dimensions } from 'react-native';
import icLogo from '../../Media/appIcon/ic_phone.png';
import icMenu from '../../Media/appIcon/ic_menu.png';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct'
import Router from '../Router'
import Main from './Main'
import global from '../global'
import search from '../../api/searchProduct'
import Search from './Shop/Search/Search';
const { height } = Dimensions.get('window');
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtSearch : ''
        };
    }
    onSearch() {
        const { txtSearch } = this.state;
        this.setState({ txtSearch: '' });
        search(txtSearch)
        .then(arrProduct => global.setArraySearch(arrProduct))
        .catch(err => console.log(err));
    }
    render() {
        return (
                <View style={style.wrapper}>
                    <View style={style.row1}>
                        <TouchableOpacity
                            onPress={() => {Main.instance.props.navigation.navigate('DrawerOpen'); }}
                        >
                            <Image source={icMenu} style={style.iconStyle} />
                        </TouchableOpacity>
                        <TextInput style={style.textInput}
                        placeholder="Tìm kiếm sản phẩm..."
                        underlineColorAndroid ="transparent"
                        value ={this.state.txtSearch}
                        onChangeText={text => this.setState({ txtSearch: text })}
                        // onFocus={() => {Search.instance.props.navigation.navigate('Search'); }}
                        onSubmitEditing={this.onSearch.bind(this)}
                    />
                        <Image source={icLogo} style={style.iconStyle} />
                    </View>
                </View>
        );
    }
}
const style = StyleSheet.create({
    wrapper: {
        // height: 80,
        height: height / 12, 
        backgroundColor: '#34B089',
        padding: 10,
        justifyContent: 'space-around'
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textInput: {
        backgroundColor: '#fff',
        height: height / 23, 
        width : 270,
        paddingLeft: 10,
        paddingVertical : 0
    },
    textStyle: {
        color: '#FF6600',
        fontFamily: 'Avenir',
        fontSize: 18,
        // fontStyle: 'italic',
    },
    iconStyle: {
        width: 25,
        height: 25,
        paddingBottom : 28
    },
})
