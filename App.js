/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import{createDrawerNavigator,createAppContainer} from 'react-navigation'
//createStackNavigator =>like PresentModal VC in swift
//createDrawerNavigator => like Sliding VC in Swift
import HomeScreen from './src/home.js'
import ListScreen from './src/list.js'
import EmpListScreen from './src/emp_list.js'

const AppNavigator = createDrawerNavigator({
                                          Home:HomeScreen,
                                          List:ListScreen,
                                          EmpList:EmpListScreen
                                          },{
                                          initialRouteName:'Home',
                                          },{
                                          defaultNavigationOptions: {
                                          header: null
                                          }
                                          },)
export default createAppContainer(AppNavigator)
