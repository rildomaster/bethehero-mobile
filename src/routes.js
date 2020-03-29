import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

export default function Routes() {
    return (
        <NavigationContainer>

            {
                //a propriedade name de AppStack.Screen é obrigatória
                //a propriedade headerShown de AppStack.Navigator screenOptions é para não exibir o título da página
            }

            <AppStack.Navigator screenOptions={ { headerShown: false } }>

                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />

            </AppStack.Navigator>

        </NavigationContainer>
    );
};