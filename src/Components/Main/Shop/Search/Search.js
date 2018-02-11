import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions, ListView } from 'react-native';
import Header from '../../Header';
import global from '../../../../Components/global'
import Main from '../../Main'

const url = 'http://10.45.113.156:8080/app/app/images/product/';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
function converPrice(number) {
    var ret = Math.floor(Math.abs(number));
    return (number < 0 ? "-" : "") + ret.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
export default class Search extends Component {
    static intance = null;
    constructor(props) {
        super(props);
        Search.instance = this;
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listProduct: ds
        };
        global.setArraySearch = this.setSearchArray.bind(this);
    }
    setSearchArray(arrProduct) {
        this.setState({ listProduct: this.state.listProduct.cloneWithRows(arrProduct) });
    }
    render() {
        return (
            <View style={style.container}>
                <Header />
                <ListView
                    contentContainerStyle={style.wrapper}
                    dataSource={this.state.listProduct}
                    renderRow={product => (
                        <View style={style.productStyle}>
                            <Image source={{ uri: `${url}${product.images[0]}` }} style={style.productImage} />
                            <View style={style.mainRight}>
                                <Text style={style.txtName}>{toTitleCase(product.name)}</Text>
                                <Text style={style.txtPrice}>{converPrice(product.price)} đ</Text>
                                <Text style={style.txtMaterial}>{product.material}</Text>
                                <View style={{ flexDirection: 'row' }} >
                                    <Text style={style.txtColor}>{product.color}</Text>
                                    <View
                                        style={{
                                            height: 15,
                                            width: 15,
                                            backgroundColor: 'white',
                                            borderRadius: 15,
                                            marginLeft: 10
                                        }}
                                    />
                                </View>
                                <TouchableOpacity style={style.showDetailContainer}
                                onPress={() => {
                                    Main.instance.props.navigation.navigate('ProductDetail', { product  });
                                }}
                                >
                                    <Text style={style.txtShowDetail}>Hiển thị chi tiết</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DFDFDF',
    },
    wrapper: {
        backgroundColor: '#DFDFDF',
        flex: 1
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
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#34B089',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtColor: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtMaterial: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
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
        flexDirection: 'row',
        position: 'absolute',
        alignSelf: 'flex-end',
        marginTop: 100
    }
});
{/* <ScrollView style={style.wrapper}>
<View style={style.product}>
    <Image source={sp1} style={style.productImage} />
    <View style={style.mainRight}>
        <Text style={style.txtName}>{toTitleCase('black dress')}</Text>
        <Text style={style.txtPrice}>100$</Text>
        <Text style={style.txtMaterial}>Material Fur</Text>
        <View style={{ flexDirection: 'row' }} >
            <Text style={style.txtColor}>Color white</Text>
            <View
                style={{
                    height: 15,
                    width: 15,
                    backgroundColor: 'white',
                    borderRadius: 15,
                    marginLeft: 10
                }}
            />
        </View>
        <TouchableOpacity style={style.showDetailContainer}>
            <Text style={style.txtShowDetail}>SHOW DETAILS</Text>
        </TouchableOpacity>
    </View>
</View>
<View style={style.product}>
    <Image source={sp4} style={style.productImage} />
    <View style={style.mainRight}>
        <Text style={style.txtName}>{toTitleCase('black dress')}</Text>
        <Text style={style.txtPrice}>100$</Text>
        <Text style={style.txtMaterial}>Material Fur</Text>
        <View style={{ flexDirection: 'row' }} >
            <Text style={style.txtColor}>Color white</Text>
            <View
                style={{
                    height: 15,
                    width: 15,
                    backgroundColor: 'white',
                    borderRadius: 15,
                    marginLeft: 10
                }}
            />
        </View>
        <TouchableOpacity style={style.showDetailContainer}>
            <Text style={style.txtShowDetail}>SHOW DETAILS</Text>
        </TouchableOpacity>
    </View>
</View>
</ScrollView> */}