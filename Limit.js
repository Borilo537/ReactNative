import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { styles } from './styles/limitStyle';

export default function MenuScreen({ navigation }) {
  const homePress = () => {
    navigation.navigate('Home');
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
            <TouchableOpacity onPress={homePress}>
              <ImageBackground source={require('./assets/arrow.png')} style={styles.voltar}></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress}>
              <ImageBackground source={require('./assets/profile.png')} style={styles.profile}></ImageBackground>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={handlePress}>
          <View style={styles.limitTextContainer}>
              <Text style={styles.limitText}>Seu Limite</Text>
              <ImageBackground source={require('./assets/pen.png')} style={styles.edit}></ImageBackground>
          </View>
          </TouchableOpacity>

          <View style={styles.limitValueContainer}>
              <Text style={styles.limitValueLabel}>R$</Text>
              <Text style={styles.limitValue}>720</Text>
              <Text style={styles.limitValueLabel}>,00</Text>
          </View>

          <View style={styles.limitTypeContainer}>
              <Text style={styles.limitType}>Semanais</Text>
          </View>

          <View style={styles.main}>
            <View style={styles.gastouContainer}>
              <Text style={styles.gastouLabel}>Gasto atual</Text>
              <Text style={styles.gastou}>R$ 67,05</Text>
            </View>
          </View>

        </View>






        <StatusBar style="light" />


      </ScrollView>
    </View>

  );
}
