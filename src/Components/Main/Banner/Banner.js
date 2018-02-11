import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ListView, RefreshControl, ScrollView,Dimensions } from 'react-native';
import Header from '../../Main/Header';
import backList from '../../../Media/appIcon/back.png'
import Main from '../Main'
import anh1 from '../../../Media/temp/s7e_2016-04-19-14.53.24.jpg'
import anh2 from '../../../Media/temp/s7e_2016-04-19-14.50.40.jpg'
const { height, width } = Dimensions.get('window');
export default class Banner extends Component {
    render() {
        return (
            <ScrollView style={style.container}>
                <Header />
                <View style={style.wrapper}>
                    <View style={style.header}>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.goBack() }}
                        >
                            <Image source={backList} style={style.backStyle} />
                        </TouchableOpacity>
                        <Text style={style.titleStyle}>ĐÁNH GIÁ SẢN PHẨM</Text>
                        <View style={{ width: 30 }} />
                    </View>
                    <View style={style.wrapper}>
                        <Text style={style.titleStyle}>
                        Sau tất cả, cả 2 phiên bản của chiếc S7 Edge xách tay chạy chip Snapdragon 820 và chính hãng chạy chip Exynos 8990 đều đã có mặt tại các cơ sở của Clickbuy. Sẽ có những phân vân khi các bạn muốn sắm cho mình một chiếc S7 Edge, hi vọng bài viết này sẽ đem đến cho các bạn một cái nhìn chi tiết hơn về 2 phiên bản của siêu phẩm hàng đầu thế giới Adroid hiện nay.   
                        </Text>
                        <Text style={style.titleStyle2}>
                        1.Thiết kế
                        </Text>
                        <Image source={anh1} style={style.imageStyle} />
                        <Text style={style.titleStyle}>
                        Các cạnh cong trong phiên bản 2016 đã trở nên mượt mà hơn, chắc chắn hơn. Không còn cái cảm giác phải giữ khư khư chiếc máy trên tay vì sợ rơi, chiếc S7e của năm nay cực kì bám tay mà không hề tạo cảm giác cấn. Mặt trước vẫn là thiết kế cong 3D độc đáo, trong khi mặt lưng cong 2.5D góp phần rất lớn vào cảm giác cầm cực kì tự nhiên của máy. Đặc biệt với lớp vỏ kính cong, S7 Edge có thể đem lại những hiệu ứng về màu sắc hết sức độc đáo khi bạn nghiêng máy ở trên tay. Nhờ thiết kế cong cũng như tỉ lệ màn hình được tận dụng tốt, kích thước của S7 Edge là rất nhỏ nếu so với những gì mà bạn nghĩ về một thiết bị có màn hình 5,5 inches, thậm chí là một trong những máy 5,5 inches hiếm hoi có thể thực sự sử dụng được bằng một tay.
                        </Text>
                        <Image source={anh2} style={style.imageStyle} />
                        <Text style={style.titleStyle}>
                        Trong bối cảnh camera của hầu hết các flagship đều bị “lồi hoá”, nỗ lực của Samsung để giảm tới mức cực kì khó nhận ra độ lồi ra ở camera sau là thực sự đáng ghi nhận, nhất là trong bối cảnh camera của máy cũng được cải tiến rất nhiều. Mặt kính, viền nhôm nhưng S7 Edge vẫn có khả năng chống bụi cũng như chống được nước theo tiêu chuẩn IP68 (30 phút ở độ sâu 1,5m), một niềm tự hào mà trước đây chỉ các máy của Sony mới có.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
const imageWidth = width - 40;
const imageHeight = (imageWidth / 700) * 467 ;
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
    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center'
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
        color: 'black',
        fontSize: 16
    },
    titleStyle2: {
        fontFamily: 'Avenir',
        color: 'black',
        fontSize: 22
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
        fontSize: 11
    }
})
