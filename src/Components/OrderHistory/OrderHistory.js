import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, ScrollView
} from 'react-native';
import backSpecial from '../../Media/appIcon/backs.png';
import getOrderHistory from '../../api/getOrderHistory';
import getToken from '../../api/getToken'
export default class OrderHistory extends Component {
    constructor(props) {
        super(props);
        this.state = { arrOrder: [] };
    }
    componentDidMount(){
        getToken()
        .then(token =>getOrderHistory(token))
        .then(arrOrder => this.setState({arrOrder}))
        .catch(err => console.log(err))
     
    }
    render() {
        return (
            <View style={style.wrapper}>
                <View style={style.header}>
                    <View />
                    <Text style={style.headerTitle}>Lịch sử mua hàng</Text>
                    <TouchableOpacity onPress={() => { this.props.navigation.goBack()}}>
                        <Image source={backSpecial} style={style.backIconStyle} />
                    </TouchableOpacity>
                </View>
                <View style={style.body}>
                    <ScrollView>
                        {this.state.arrOrder.map(e => (
                            <View style={style.orderRow} key={e.id}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                                <Text style={{ color: '#2ABB9C' }}>{e.id}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                                <Text style={{ color: '#C21C70' }}>{e.date_orther}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
                                <Text style={{ color: '#2ABB9C' }}>{e.status ? 'Complete' : 'Pending'}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                                <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>{e.total}$</Text>
                            </View>
                        </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');

const style = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flex: 1,
        backgroundColor: '#2ABB9C',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10
    },// eslint-disable-line
    headerTitle: {
        fontFamily: 'Avenir',
        color: '#fff',
        fontSize: 20
    },
    backIconStyle: {
        width: 30,
        height: 30
    },
    body: {
        flex: 10,
        backgroundColor: '#F6F6F6'
    },
    orderRow: {
        height: width / 3,
        backgroundColor: '#FFF',
        margin: 10,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#DFDFDF',
        shadowOpacity: 0.2,
        padding: 10,
        borderRadius: 2,
        justifyContent: 'space-around'
    }
});
