import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, ScrollView,
    Dimensions, StyleSheet, Image, ListView,Alert
} from 'react-native';
import Header from '../../Header'
import Main from '../../Main'
import global from '../../../../Components/global'
import sendOrder from '../../../../api/sendOrder'
import getToken from '../../../../api/getToken'
const url = 'http://10.45.113.156:8080/app/app/images/product/';
function converPrice(number) {
    var ret = Math.floor(Math.abs(number));
    return (number < 0 ? "-" : "") + ret.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
export default class Cart extends Component {
    incrQuantity(id) {
        global.incrQuantity(id);
    }
    decrQuantity(id) {
        global.decrQuantity(id);
    }
    removeProduct(id){
        global.removeProduct(id);
    }
    static instance = null;

    constructor(props) {
        super(props);
        Cart.instance = this;
        this.state = {
            soluong: 1
        };
    }
    updateCart() {
        this.setState({});
    }
    async onSendOrder() {
        try {
            const token = await getToken();
            const arrayDetail = this.props.cartArray.map(e => ({ 
                id: e.product.id, 
                quantity: e.quantity 
            }));
            const kq = await sendOrder(token, arrayDetail);
            if (kq === 'THEM_THANH_CONG') {
            console.log('THEM THANH CONG');
            } else {
            console.log('THEM THAT BAI', kq);
            }
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        var cartArray = global.cartArray;
        var product = global.topProducts;
        const arrTotal = cartArray.map(e => e.product.price* e.quantity);
        const total = arrTotal.length ? arrTotal.reduce((a, b) => a + b) : 0;
        return (
            <View style={style.wrapper}>
                <Header />
                <ListView
                    contentContainerStyle={style.main}
                    enableEmptySections
                    dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(cartArray)}
                    renderRow= {cartItem => (
                        <View style={style.productStyle}>
                        <Image source={{uri: `${url}${cartItem.product.images[0]}`}} style={style.productImage} />
                        <View style={style.mainRight}>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={style.txtName}>{cartItem.product.name.toUpperCase()}</Text>
                                <TouchableOpacity
                                 onPress = {() => this.removeProduct(cartItem.product.id)}
                                >
                                    <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={style.txtPrice}>{converPrice(cartItem.product.price)}đ</Text>
                            </View>
                            <View style={style.productController}>
                                <View style={style.numberOfProduct}>
                                    <TouchableOpacity
                                    onPress = {() => this.incrQuantity(cartItem.product.id)}
                                     > 
                                        <Text>+</Text>
                                    </TouchableOpacity>
                                    <Text>{cartItem.quantity}</Text>
                                    <TouchableOpacity
                                     onPress = {() => this.decrQuantity(cartItem.product.id)}
                                    >
                                        <Text>-</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={style.showDetailContainer}
                                  onPress={() => {
                                    Main.instance.props.navigation.navigate('ProductDetail', { product: cartItem.product });
                                }}
                                >
                                    <Text style={style.txtShowDetail}>Hiển thị chi tiết</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    )}
                    />
                <TouchableOpacity style={style.checkoutButton}
                // onPress={this.onSendOrder.bind(this)}
                onPress={() => {
                    Alert.alert('Đặt hàng thành công,cửa hàng sẽ sớm liên lạc với bạn')
                  }}>
                    <Text style={style.checkoutTitle}>TỔNG CỘNG {converPrice(total)} đ - ĐẶT HÀNG </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const style = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#DFDFDF'
    },
    checkoutButton: {
        height: 40,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#34B089',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        width, backgroundColor: '#DFDFDF'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
    productStyle: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 17,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#34B089',
        fontSize: 17,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: '#34B089',
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});

{/* <View style={style.product}>
<Image source={sp2} style={style.productImage} />
<View style={style.mainRight}>
    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <Text style={style.txtName}>Black Of The</Text>
        <TouchableOpacity>
            <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
        </TouchableOpacity>
    </View>
    <View>
        <Text style={style.txtPrice}>{100}$</Text>
    </View>
    <View style={style.productController}>
        <View style={style.numberOfProduct}>
            <TouchableOpacity>
                <Text>+</Text>
            </TouchableOpacity>
            <Text>{3}</Text>
            <TouchableOpacity>
                <Text>-</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={style.showDetailContainer}>
            <Text style={style.txtShowDetail}>SHOW DETAILS</Text>
        </TouchableOpacity>
    </View>
</View>
</View>
<View style={style.product}>
<Image source={sp3} style={style.productImage} />
<View style={style.mainRight}>
    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <Text style={style.txtName}>Black Of The</Text>
        <TouchableOpacity>
            <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
        </TouchableOpacity>
    </View>
    <View>
        <Text style={style.txtPrice}>{100}$</Text>
    </View>
    <View style={style.productController}>
        <View style={style.numberOfProduct}>
            <TouchableOpacity>
                <Text>+</Text>
            </TouchableOpacity>
            <Text>{3}</Text>
            <TouchableOpacity>
                <Text>-</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={style.showDetailContainer}>
            <Text style={style.txtShowDetail}>SHOW DETAILS</Text>
        </TouchableOpacity>
    </View>
</View>
</View>
<View style={style.product}>
<Image source={sp4} style={style.productImage} />
<View style={style.mainRight}>
    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <Text style={style.txtName}>Black Of The</Text>
        <TouchableOpacity>
            <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
        </TouchableOpacity>
    </View>
    <View>
        <Text style={style.txtPrice}>{100}$</Text>
    </View>
    <View style={style.productController}>
        <View style={style.numberOfProduct}>
            <TouchableOpacity>
                <Text>+</Text>
            </TouchableOpacity>
            <Text>{3}</Text>
            <TouchableOpacity>
                <Text>-</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={style.showDetailContainer}>
            <Text style={style.txtShowDetail}>SHOW DETAILS</Text>
        </TouchableOpacity>
    </View>
</View>
</View> */}