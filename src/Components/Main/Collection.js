import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Main from './Main';
import bannerImage from '../../Media/temp/banner.png'
import bannerImage2 from '../../Media/temp/banner2.jpg'
import bannerImage3 from '../../Media/temp/banner3.png'
const { height, width } = Dimensions.get('window');
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
                    <Swiper
                    autoplay 
                    >
                           <TouchableOpacity
                             onPress={() => { Main.instance.props.navigation.navigate('Banner')}}
                           >
                           <Image source={bannerImage} style={style.imageStyle} />
                           </TouchableOpacity>
                           <TouchableOpacity
                            onPress={() => { Main.instance.props.navigation.navigate('Banner2')}}
                           >
                           <Image source={bannerImage2} style={style.imageStyle} />
                           </TouchableOpacity>
                           <TouchableOpacity
                           onPress={() => { Main.instance.props.navigation.navigate('Banner3')}}
                           >
                           <Image source={bannerImage3} style={style.imageStyle} />
                           </TouchableOpacity>
                    </Swiper>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={style.wrapper} >
                <View style={{ height: 50, justifyContent: 'center' }}>
                    <Text style={style.textStyle}>SỰ KIỆN NỔI BẬT</Text>
                </View>
                {this.renderSwiper()}
            </View>
        );
    }
}
const imageWidth = width - 40;
const imageHeight = (imageWidth / 912) * 380 ;
const style = StyleSheet.create({
    wrapper: {
        height: height * 0.3,
        backgroundColor: '#FFF',
        margin: 10,
        justifyContent: 'space-between',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,
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