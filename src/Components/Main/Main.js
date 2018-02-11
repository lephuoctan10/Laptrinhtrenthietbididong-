import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView } from 'react-native';
import icLogo from '../../Media/appIcon/ic_logo.png';
import icMenu from '../../Media/appIcon/ic_menu.png'
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';
import Header from './Header'
import global from '../../Components/global'
import initData from '../../api/initData'
import saveCart from '../../api/saveCart'
import getCart from '../../api/getCart'
import Cart from '../../Components/Main/Shop/Cart/Cart'
import checkLogin from '../../api/checkLogin.js'
import getToken from '../../api/getToken'
import refreshToken from '../../api/refreshToken'
export default class Main extends Component {
    static intance = null;
    constructor(props) {
        super(props);
        Main.instance = this;
        this.state = {
            types: [],
            topProducts: [],
            cartArray: [],
        };
        global.cartArray = this.state.cartArray;
        global.topProducts = this.state.topProducts
        global.addProductToCart = this.addProductToCart.bind(this);
         global.incrQuantity = this.incrQuantity.bind(this);
         global.decrQuantity = this.decrQuantity.bind(this);
        global.removeProduct = this.removeProduct.bind(this);
        global.gotoSearch = this.gotoSearch.bind(this);
    }
    componentDidMount() {
        initData()
            .then(resJSON => {
                const { type, product } = resJSON;
                this.setState({ types: type, topProducts: product })
            });
        getCart()
        .then(cartArray => Cart.instance.updateCart({ cartArray }));
        getToken()
        .then(token => checkLogin(token))
        .then(res => global.onSignIn(res.user))
        .catch(err => console.log('LOI CHECK LOGIN', err));
        setInterval(refreshToken,30000);
    }
    addProductToCart(product) {
        const isExist = this.state.cartArray.some(e => e.product.id === product.id);
        if (isExist) return false;
        Cart.instance.updateCart(
            { cartArray: this.state.cartArray.push({ product, quantity: 1 }) }, 
            () => saveCart(this.state.cartArray)
        );
    }
    incrQuantity(productId) {
        for (var i = this.state.cartArray.length - 1; i >= 0; i--) {
            if (this.state.cartArray[i].product.id == productId) {
                this.state.cartArray[i].quantity = this.state.cartArray[i].quantity +1
                console.log(" số lượng " + JSON.stringify(this.state.cartArray[i].quantity))

            }
        }
            Cart.instance.updateCart();
        }
        decrQuantity(productId) {
            for (var i = this.state.cartArray.length - 1; i >= 0; i--) {
                if (this.state.cartArray[i].product.id == productId) {
                    if (this.state.cartArray[i].quantity > 1 ){
                    this.state.cartArray[i].quantity = this.state.cartArray[i].quantity -1
                    console.log(" số lượng " + JSON.stringify(this.state.cartArray[i].quantity))
                    }
                }
            }
                Cart.instance.updateCart();
            }
        removeProduct(productId){
            for (var i = this.state.cartArray.length - 1; i >= 0; i--) {
                if (this.state.cartArray[i].product.id == productId) {
                    this.state.cartArray.splice(i, 1);
                }
            }
            Cart.instance.updateCart();
        }
        gotoSearch(){
            this.props.navigation.navigate('Search')
        }
        render() {
            const { types, topProducts } = this.state;
            return (
                <View style={{ flex: 1 }}>
                    <Header />
                    <ScrollView style={{ backgroundColor: '#EEEEEE' }}>
                        <Collection />
                        <Category types={types} />
                        <TopProduct topProducts={topProducts} />
                    </ScrollView>
                </View>
            );
        }
    }
    const style = StyleSheet.create({
        wrapper: {
            height: 80,
            backgroundColor: '#34B089',
            padding: 10,
            justifyContent: 'space-around'
        },
        row1: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        textInput: {
            backgroundColor: 'white',
            width: 340, height: 30,
            paddingLeft: 10
        },
        textStyle: {
            color: 'white',
            fontFamily: 'Avenir',
            fontSize: 25,
            fontStyle: 'italic'
        },
        iconStyle: {
            width: 25,
            height: 25
        },
    })
