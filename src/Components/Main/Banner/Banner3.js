import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ListView, RefreshControl, ScrollView,Dimensions } from 'react-native';
import Header from '../../Main/Header';
import backList from '../../../Media/appIcon/back.png'
import Main from '../Main'
import anh1 from '../../../Media/temp/xiaomi.jpg'
import anh2 from '../../../Media/temp/xiaomi2.jpg'
const { height, width } = Dimensions.get('window');
export default class Banner3 extends Component {
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
                        Nếu như bạn là người luôn quan tâm tới những sản phẩm công nghệ thì chắc chắn sẽ biết tới sự xuất hiện của Xiaomi Mi 5x, chiếc điện thoại vừa mới được hãng “Apple của Châu Á” ra mắt cùng với MIUI 9 trong cuối tháng 7 vừa rồi. Và rất nhanh chóng, tại Clickbuy đã có mặt Xiaomi Mi 5X và sẵn sàng giải đáp những thắc mắc của người dùng.
                        </Text>
                        <Text style={style.titleStyle2}>
                        Thiết kế của Xiaomi 
                        </Text>
                        <Image source={anh1} style={style.imageStyle} />
                        <Text style={style.titleStyle}>
                        Xiaomi Mi 5x cũng tương tự như tất cả những chiếc điện thoại Xiaomi khác đang được bán tại Clickbuy, mọi sản phẩm đều là hàng mới 100% Nguyên Seal hộp, bạn được tự tay khui hộp khi mua hàng để có được những cảm giác thật yên tâm. Hộp của Xiaomi Mi 5X cũng được thiết kế rất đơn giản với tông màu trắng mang chủ đạo, những thông tin đều được in đơn giản và tương tự như Xiaomi Redmi 4x, Redmi Note 4x cùng nhà. Đi theo hộp là bộ phụ kiện của Xiaomi Mi 5X rất khiêm tốn, chỉ bao gồm củ sạc, cáp USB Type-C và que chọc sim cũng như sách hướng dẫn sử dụng.
                        </Text>
                        <Image source={anh2} style={style.imageStyle} />
                        <Text style={style.titleStyle}>
                        Xiaomi đã đem tới cho chiếc Mi 5x với 3 màu sắc khác nhau: Vàng gold, hồng, đen. Máy có kích thước đầy đủ là 155.4 x 75.8 x 7.3 mm, trọng lượng là 165g giúp cho khả năng cầm nắm vẫn khá thoải mái. Các chi tiết đều được hãng hoàn thiện khá tỷ mỉ. Viền xung quanh cũng như mặt sau của Xiaomi Mi 5X được chế tác bằng chất liệu kim loại nguyên khối với những đường nét tương đồng, như chiếc iPhone 7 Plus với dải an-ten được vắt lên cạnh trên và cạnh dưới, cụm camera kép cũng được đặt ở vị trí hoàn toàn tương tự. Cũng tương tự như Xiaomi Mi 6, Xiaomi Mi 5x cũng được trang bị cổng kết nối USB chuẩn Type-C, được hỗ trợ sạc nhanh. Mặt sau là cảm biến vân tay 1 chạm.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
const imageWidth = width - 40;
const imageHeight = (imageWidth / 680) * 382 ;
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
