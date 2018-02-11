import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image,ListView,RefreshControl } from 'react-native';
import Header from '../../Header';
import backList from '../../../../Media/appIcon/back.png'
import getListProduct from '../../../../api/getListProduct'
import Main from '../../Main'
const url = 'http://10.45.113.156:8080/app/app/images/product/';
function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
function converPrice(number) {
    var ret = Math.floor(Math.abs(number));
    return (number < 0 ? "-" : "") + ret.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
export default class ListProduct extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listProducts: ds,
            refreshing: false,
            page: 1
        };
        this.arr = [];
    }
    componentDidMount(){
        const idType = this.props.navigation.state.params.product2.id;
        getListProduct(idType, 1)
        .then(arrProduct => {
            this.setState({listProducts : this.state.listProducts.cloneWithRows(arrProduct)})
        })
        .catch(err => console.log(err));
    }
    render() {
        const {product2} = this.props.navigation.state.params;
        return (
            <View style={style.container}>
            <Header />
                <View style={style.wrapper}>
                    <View style={style.header}>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.goBack() }}
                        >
                            <Image source={backList} style={style.backStyle} />
                        </TouchableOpacity>
                        <Text style={style.titleStyle}>{product2.name}</Text>
                        <View style={{ width: 30 }} />
                    </View>
                    <ListView 
                        removeClippedSubviews={false}
                        dataSource={this.state.listProducts}
                        renderRow={product => (
                            <View style={style.productContainer}>
                        <Image style={style.productImage} source={{ uri: `${url}${product.images[0]}` }} />
                        <View style={style.productInfo}>
                            <Text style={style.txtName}>{toTitleCase(product.name)}</Text>
                            <Text style={style.txtPrice}>{converPrice(product.price)}đ </Text>
                            <Text style={style.txtMaterial}> {product.material} </Text>
                            <View style={style.lastRowInfo}>
                                <Text style={style.txtColor}>{product.color} </Text>
                                <View style={{backgroundColor: product.color.toLowerCase(), height: 12, width: 12, borderRadius: 8 }} />
                                <TouchableOpacity
                                 onPress={() => {
                                    Main.instance.props.navigation.navigate('ProductDetail', { product  });
                                }}
                                >
                                    <Text style={style.txtShowDetail}>Hiển thị chi tiết</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                        )}
                        refreshControl={
                            <RefreshControl 
                                refreshing={this.state.refreshing}
                                onRefresh={() => {
                                    this.setState({ refreshing: true });
                                    const newPage = this.state.page + 1;
                                    const idType = this.props.navigation.state.params.product2.id;
                                    getListProduct(idType, newPage)
                                    .then(arrProduct => {
                                        this.arr = arrProduct.concat(this.arr);
                                        this.setState({ 
                                            listProducts: this.state.listProducts.cloneWithRows(this.arr),
                                            refreshing: false 
                                        });
                                    })
                                    .catch(err => console.log(err));
                                }}
                            />
                        }
                        />
                </View>
            </View>
        );
    }
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBDB',
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5

    },
    wrapper: {
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        margin: 10,
        paddingHorizontal: 10
    },
    backStyle: {
        width: 30,
        height: 30

    },
    titleStyle: {
        fontFamily: 'Avenir',
        color: '#34B089',
        fontSize: 18
    },
    productContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderTopColor: '#F0F0F0',
        borderBottomColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderWidth: 1
    },
    productInfo: {
        justifyContent: 'space-between',
        marginLeft: 15,
        flex: 1
    },
    productImage: {
        width: 90,
        height: (90 * 452) / 361
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtName: {
        fontFamily: 'Avenir',
        color: '#BCBCBC',
        fontSize: 20,
        fontWeight: '400'
    },
    txtPrice: {
        fontFamily: 'Avenir',
        color: '#34B089',
    },
    txtMaterial: {
        fontFamily: 'Avenir'
    },
    txtColor: {
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        fontFamily: 'Avenir',
        color: '#34B089',
        fontSize: 12
    }
})
    {/* <View style={style.productContainer}>
                        <Image style={style.productImage} source={sp1} />
                        <View style={style.productInfo}>
                            <Text style={style.txtName}>Lace Sleeve Si</Text>
                            <Text style={style.txtPrice}> 117$ </Text>
                            <Text style={style.txtMaterial}> Material Silk </Text>
                            <View style={style.lastRowInfo}>
                                <Text style={style.txtColor}>Color RoyalBlue </Text>
                                <View style={{ backgroundColor: 'cyan', height: 12, width: 12, borderRadius: 8 }} />
                                <TouchableOpacity>
                                    <Text style={style.txtShowDetail}>SHOW DETAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={style.productContainer}>
                        <Image style={style.productImage} source={sp2} />
                        <View style={style.productInfo}>
                            <Text style={style.txtName}>Lace Sleeve Si</Text>
                            <Text style={style.txtPrice}> 117$ </Text>
                            <Text style={style.txtMaterial}> Material Silk </Text>
                            <View style={style.lastRowInfo}>
                                <Text style={style.txtColor}>Color RoyalBlue </Text>
                                <View style={{ backgroundColor: 'cyan', height: 12, width: 12, borderRadius: 8 }} />
                                <TouchableOpacity>
                                    <Text style={style.txtShowDetail}>SHOW DETAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={style.productContainer}>
                        <Image style={style.productImage} source={sp3} />
                        <View style={style.productInfo}>
                            <Text style={style.txtName}>Lace Sleeve Si</Text>
                            <Text style={style.txtPrice}> 117$ </Text>
                            <Text style={style.txtMaterial}> Material Silk </Text>
                            <View style={style.lastRowInfo}>
                                <Text style={style.txtColor}>Color RoyalBlue </Text>
                                <View style={{ backgroundColor: 'cyan', height: 12, width: 12, borderRadius: 8 }} />
                                <TouchableOpacity>
                                    <Text style={style.txtShowDetail}>SHOW DETAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={style.productContainer}>
                        <Image style={style.productImage} source={sp4} />
                        <View style={style.productInfo}>
                            <Text style={style.txtName}>Lace Sleeve Si</Text>
                            <Text style={style.txtPrice}> 117$ </Text>
                            <Text style={style.txtMaterial}> Material Silk </Text>
                            <View style={style.lastRowInfo}>
                                <Text style={style.txtColor}>Color RoyalBlue </Text>
                                <View style={{ backgroundColor: 'cyan', height: 12, width: 12, borderRadius: 8 }} />
                                <TouchableOpacity>
                                    <Text style={style.txtShowDetail}>SHOW DETAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View> */}