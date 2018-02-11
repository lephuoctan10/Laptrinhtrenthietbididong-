import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity
} from 'react-native';
import back from '../../../../Media/appIcon/back.png';
import cart from '../../../../Media/appIcon/cartfull.png';
import global from '../../../../Components/global';
import Cart from '../Cart/Cart.js'

const url = 'http://10.45.113.156:8080/app/app/images/product/';
function converPrice(number) {
    var ret = Math.floor(Math.abs(number));
    return (number < 0 ? "-" : "") + ret.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
export default class ProductDetail extends Component {
    addThisProductToCart() {
        // global.addCartArray.push(this.props.navigation.state.params.product);
        // Cart.instance.updateCart();
        global.addProductToCart(this.props.navigation.state.params.product)
       
    }
    render() {
        const { images, name, price, description, material, color } = this.props.navigation.state.params.product;
        return (
            <ScrollView style={style.wrapper}>
                <View style={style.cardStyle}>
                    <View style={style.header}>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.goBack() }}
                        >
                            <Image style={style.backStyle} source={back} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.addThisProductToCart.bind(this)}
                        >
                            <Image style={style.cartStyle} source={cart} />
                        </TouchableOpacity>
                    </View>
                    <View style={style.imageContainer}>
                        <ScrollView style={{ flexDirection: 'row', padding: 10, height: swiperHeight }}  >
                            <Image source={{ uri: `${url}${images[0]}` }} style={style.productImageStyle} />
                        </ScrollView>
                    </View>
                    <View style={style.footer}>
                        <View style={style.titleContainer}>
                            <Text style={style.textMain}>
                                <Text style={style.textBlack}>{name.toUpperCase()}</Text>
                                <Text style={style.textHighlight}> / </Text>
                                <Text style={style.textSmoke}>{converPrice(price)}đ</Text>
                            </Text>
                        </View>
                        <View style={style.descContainer}>
                            <Text style={style.descStyle}>{description}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15 }}>
                                <Text style={style.txtMaterial}>{material}</Text>
                                <View style={{ flexDirection: 'row' }} >
                                    <Text style={style.txtColor}>{color}</Text>
                                    <View style={{ height: 15, width: 15, backgroundColor: color.toLowerCase(), borderRadius: 15, marginLeft: 10, borderWidth: 1, borderColor: '#C21C70' }} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const { width } = Dimensions.get('window');
const swiperWidth = (width / 1.8) - 30;
const swiperHeight = (swiperWidth * 452) / 361;

const style = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#D6D6D6',
    },
    cardStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 20
    },
    cartStyle: {
        width: 25,
        height: 25
    },
    backStyle: {
        width: 25,
        height: 25
    },
    productStyle: {
        width: width / 2,
        height: width / 2
    },
    footer: {
        flex: 6
    },
    imageContainer: {
        flex: 6,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10
    },
    textMain: {
        paddingLeft: 20,
        marginVertical: 10
    },
    textBlack: {
        fontFamily: 'Avenir',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3F3F46'
    },
    textSmoke: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#34B089'
    },
    textHighlight: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#7D59C8'
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderColor: '#F6F6F6',
        marginHorizontal: 20,
        paddingBottom: 5
    },
    descContainer: {
        margin: 10,
        paddingTop: 10,
        paddingHorizontal: 10
    },
    descStyle: {
        color: 'black'
    },
    linkStyle: {
        color: '#7D59C8'
    },
    productImageStyle: {
        width: swiperWidth,
        height: swiperHeight,
        marginHorizontal: 5
    },
    mainRight: {
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        paddingLeft: 20
    },
    txtColor: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtMaterial: {
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    }
});