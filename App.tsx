/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnalysisScreen from './screens/AnalysisScreen';
import BudgetScreen from './screens/BudgetScreen';
import CategoryScreen from './screens/CategoryScreen';
import ExpenseScreen from './screens/ExpenseScreen';
import HomeScreen from './screens/HomeScreen';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="首页" component={HomeScreen} />
        <Tab.Screen name="支出" component={ExpenseScreen} />
        <Tab.Screen name="分析" component={AnalysisScreen} />
        <Tab.Screen name="预算" component={BudgetScreen} />
        <Tab.Screen name="分类" component={CategoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
