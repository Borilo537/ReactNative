import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { styles } from './styles/appStyle';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './Menu'; 
import Limit from './Limit'; 

const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }}/>
        <Stack.Screen name="Limit" component={Limit} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



function HomeScreen({ navigation }) {
  

  const menuPress = () => {
    navigation.navigate('Menu');
  };

  const limitPress = () => {
    navigation.navigate('Limit');
  };

  const handlePress = () => {
    Linking.openURL('https://exemplo.com');
  };

  return (


        <View style={styles.body}>

          <View style={styles.statusBG}></View>

          <ScrollView contentContainerStyle={styles.scrollViewContent}>

            <View style={styles.header}>
              <View style={styles.topContentIcons}>
                <TouchableOpacity onPress={menuPress}>
                  <ImageBackground source={require('./assets/menu.png')} style={styles.menu}></ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePress}>
                  <ImageBackground source={require('./assets/profile.png')} style={styles.profile}></ImageBackground>
                </TouchableOpacity>
              </View>

              <Text style={styles.gastoText}>gasto na semana</Text>

              <View style={styles.gastoContainer}>
                <TouchableOpacity onPress={limitPress}>
                  <Text style={styles.gastoNum}>R$ 0,00</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePress}>
                  <ImageBackground source={require('./assets/add.png')} style={styles.gastoAdd}></ImageBackground>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.main}>
              <Text style={styles.economiaText}>Sua economia está ótima!</Text>

              <TouchableOpacity onPress={handlePress}>
                <View style={styles.analiseContainer}>
                  <Text style={styles.analiseText}>Ver Análise</Text>
                  <ImageBackground source={require('./assets/analise.png')} style={styles.analiseImage}></ImageBackground>
                </View>
              </TouchableOpacity>

            </View>

            <View style={styles.line}></View>

            <View style={styles.main}>
              <TouchableOpacity onPress={handlePress}>
                <View style={styles.metasContainer}>
                  <Text style={styles.metasText}>Suas Metas</Text>
                  <ImageBackground source={require('./assets/arrow.png')} style={styles.arrow}></ImageBackground>
                </View>
              </TouchableOpacity>


              <TouchableOpacity onPress={handlePress}>
                <View style={styles.metasBox}>
                  <View style={styles.metasStats}>
                    <Text style={styles.metasName}>Computador Novo</Text>
                    <Text style={styles.metasPrice}>R$ 5000,00</Text>
                  </View>
                  <View style={styles.metasBar}>
                    <View style={styles.barProgress}></View>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={handlePress}>
                <View style={styles.metasBox2}>
                  <View style={styles.metasStats}>
                    <Text style={styles.metasName2}>Cafeteira</Text>
                    <Text style={styles.metasPrice2}>R$ 419,90</Text>
                  </View>
                  <View style={styles.metasBar}>
                    <View style={styles.barProgress2}></View>
                  </View>
                </View>
              </TouchableOpacity>



            </View>

            <View style={styles.line}></View>

            <View style={styles.main}>

              <TouchableOpacity onPress={handlePress}>
                <View style={styles.calendarioContainer}>
                  <Text style={styles.calendarioText}>Calendário</Text>
                  <ImageBackground source={require('./assets/arrow.png')} style={styles.arrow}></ImageBackground>
                </View>
              </TouchableOpacity>

              <View style={styles.dateContainer}>
                <Text style={styles.dateName}>Presente pro Caio</Text>
                <Text style={styles.dateDay}>14 Mai.</Text>
              </View>

              <View style={styles.dateContainer}>
                <Text style={styles.dateName2}>Mensalidade academia</Text>
                <Text style={styles.dateDay2}>21 Jun.</Text>
              </View>

              <View style={styles.dateContainer}>
                <Text style={styles.dateName3}>Mercado</Text>
                <Text style={styles.dateDay3}>24 Jun.</Text>
              </View>



              <StatusBar style="light" />

            </View>
          </ScrollView>
        </View>


  );
}