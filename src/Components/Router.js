import React, { Component } from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { View, Text, AppRegistry, Image } from 'react-native';
import Authentication from './Authentication/Authentication';
import OrderHistory from './OrderHistory/OrderHistory';
import ChangeInfo from './ChangeInfo/ChangeInfo'
import Main from './Main/Main';
import Menu from './Main/Menu';
import Cart from './Main/Shop/Cart/Cart';
import Search from './Main/Shop/Search/Search';
import Contact from './Main/Shop/Contact/Contact';
import ListProduct from './Main/Shop/ListProduct/ListProduct';
import ProductDetail from './Main/Shop/ProductDetail/ProductDetail';
import Banner from './Main/Banner/Banner'
import Banner2 from './Main/Banner/Banner2'
import Banner3 from './Main/Banner/Banner3'
import Header from './Main/Header'
export const Home = StackNavigator({
    Main : {
        screen : Main,
        navigationOptions:
        {
            header: null
        }
    },
    ProductDetail : {
        screen : ProductDetail,
        navigationOptions:
        {
            header: null
        }
    },
    ListProduct : {
        screen : ListProduct,
        navigationOptions:
        {
            header: null
        }
    },
    Banner : {
        screen : Banner,
        navigationOptions:
        {
            header: null
        }
    },
    Banner2 : {
        screen : Banner2,
        navigationOptions:
        {
            header: null
        }
    },
    Banner3 : {
        screen : Banner3,
        navigationOptions:
        {
            header: null
        }
    },
   
}); 
export const CartTab = StackNavigator({
    Cart : {
        screen : Cart,
        navigationOptions:
        {
            header: null
        }
    },
    ProductDetail : {
        screen : ProductDetail,
        navigationOptions:
        {
            header: null
        }
    }
}); 
export const SearchTab = StackNavigator({
    Search : {
        screen : Search,
        navigationOptions:
        {
            header: null
        }
    },
    ProductDetail : {
        screen : ProductDetail,
        navigationOptions:
        {
            header: null
        }
    },
    Main : {
        screen : Main,
        navigationOptions:
        {
            header: null
        }
    },
}); 
export const ContactTab = StackNavigator({
    Contact : {
        screen : Contact,
        navigationOptions:
        {
            header: null
        }
    },
    ProductDetail : {
        screen : ProductDetail,
        navigationOptions:
        {
            header: null
        }
    }
}); 
export const Tabbar = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../Media/appIcon/home.png')}
                    style={[{ width: 15, height: 15 }, { tintColor: tintColor }]}
                />
            ),
           
        },
    },
    CartTab: {
        screen: CartTab,
        navigationOptions: {
            tabBarLabel: 'Giỏ hàng',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../Media/appIcon/cart.png')}
                    style={[{ width: 15, height: 15 }, { tintColor: tintColor }]}
                />
            ),
        }
    },
    SearchTab: {
        screen: SearchTab,
        navigationOptions: {
            tabBarLabel: 'Tìm kiếm',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../Media/appIcon/search.png')}
                    style={[{ width: 15, height: 15 }, { tintColor: tintColor }]}
                />
            ),
        }
    },
    ContactTab: {
        screen: ContactTab,
        navigationOptions: {
            tabBarLabel: 'Liên hệ',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../Media/appIcon/contact.png')}
                    style={[{ width: 15, height: 15 }, { tintColor: tintColor }]}
                />
            ),
        }
    }
},
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            style: {
                backgroundColor: "white",
                padding: 1
            },
            inactiveTintColor: '#555555',
            activeTintColor: '#34B089',
            labelStyle: {
                fontSize: 9,
            },
            tabStyle: {
                height: 40,
            },
            showIcon: true,
            iconStyle: {
                width: 12,
                height: 12
            },
            upperCaseLabel: false
        }
    });
export const SideMenu = DrawerNavigator({
    Tabbar: {
        screen: Tabbar,
    },
    Authentication: {
        screen: Authentication,

    },
    OrderHistory: {
        screen: OrderHistory,
    },
    ChangeInfo: {
        screen: ChangeInfo,
    },
},
    {
        drawerWidth: 200,
        drawerPosition: 'left',
        contentComponent: props => <Menu {...props} />
    }
);
