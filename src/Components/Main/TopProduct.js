import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ListView } from 'react-native';
import Main from './Main';
const url = 'http://10.45.113.156:8080/app/app/images/product/';
function converPrice(number) {
    var ret = Math.floor(Math.abs(number));
    return (number < 0 ? "-" : "") + ret.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
export default class TopProduct extends Component {
    render() {
        const { topProducts } = this.props;
        return (
            <View style={style.container}>
                <View styel={style.titleContainer}>
                    <Text style={style.title}>  SẢN PHẨM PHỔ BIẾN</Text>
                </View >

                <ListView
                    contentContainerStyle={style.body}
                    enableEmptySections
                    dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(topProducts)}
                    renderRow={product => (
                        <TouchableOpacity style={style.productContainer}
                            onPress={() => {
                                Main.instance.props.navigation.navigate('ProductDetail', { product });
                            }}
                        >
                            <Image source={{ uri: `${url}${product.images[0]}` }} style={style.productImage} />
                            <Text style={style.productName}>{product.name.toUpperCase()}</Text>
                            <Text style={style.productPrice}>{converPrice(product.price)} đ</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }
}
const { width } = Dimensions.get('window');
const productWidth = (width - 60) / 2
const productImageHeight = (productWidth / 361) * 452
const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        justifyContent: 'space-between',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        paddingTop : 10
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10
    },
    title: {
        color: '#34B089',
        fontSize: 15,
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10,
    },
    productContainer: {
        width: productWidth,
        paddingBottom: 20,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
    },
    productImage: {
        width: productWidth,
        height: productImageHeight
    },
    productName: {
        marginVertical: 5,
        paddingLeft: 10,
        // fontFamily: 'Avenir',
        color: 'black',
        fontWeight: '400'
    },
    productPrice: {
        marginBottom: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#34B089'
    }
})
