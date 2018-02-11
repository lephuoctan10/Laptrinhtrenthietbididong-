import React, { Component } from 'react'; 
import { View, Text,StyleSheet } from 'react-native';
import {SideMenu} from './Router';
import Header from './Main/Header';
export default class App extends Component {
    render(){
        return(
                 <SideMenu />
        );
    }
}