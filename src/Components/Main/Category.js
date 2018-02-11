import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Main from './Main';
const { height, width } = Dimensions.get('window');
const url = 'http://10.45.113.156:8080/app/app/images/type/';
export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleSwiper: false
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                visibleSwiper: true
            });
        }, 100);
    }

    renderSwiper() {
        const {types} = this.props;
        if (this.state.visibleSwiper) {
            return (
                <View style={{ justifyContent: 'flex-end', flex: 4 }}>
                    <Swiper showsButtons>
                       {types.map(product2 => (
                           <TouchableOpacity
                           onPress={() => { Main.instance.props.navigation.navigate('ListProduct', {product2} );}}
                           key = {product2.id}
                           >
                           <Image source={{uri:`${url}${product2.image}` }} style={style.imageStyle} >
                               <Text >{product2.name} </Text>
                           </Image>
                           </TouchableOpacity>
                       ))}
                    </Swiper>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={style.wrapper} >
                <View style={{ height: 50, justifyContent: 'center' }}>
                    <Text style={style.textStyle}>DANH MỤC</Text>
                </View>
                {this.renderSwiper()}
            </View>
        );
    }
}
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;
const style = StyleSheet.create({
    wrapper: {
        height: height * 0.35,
        backgroundColor: '#FFF',
        margin: 10,
        justifyContent: 'space-between',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: '#34B089',
        fontSize: 15
    },
})