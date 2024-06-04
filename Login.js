import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { styles } from './styles/loginStyle.js';
import { TextInput } from 'react-native-web';

export default function MenuScreen({ navigation }) {
  const homePress = () => {
    navigation.navigate('Home');
  };

  const editPress = () => {
    navigation.navigate('EditLimit');
  };

  const handlePress = () => {
    Linking.openURL('https://exemplo.com');
  };

  return (

    <View style={styles.body}>

      <View style={styles.statusBG}></View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>

        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <ImageBackground source={require('./assets/logo3.png')} style={styles.logo}></ImageBackground>
          </View>
          <Text style={styles.loginTitle}>Entre no CashStash</Text>
          <Text style={styles.loginText}>Tenha controle sobre seu dinheiro</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Nome</Text>

            <TextInput style={styles.inputControl} placeholder='Seu Nome'>
            </TextInput>

          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Nome</Text>

            <TextInput style={styles.inputControl} placeholder='Seu Nome'>
            </TextInput>

          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Nome</Text>

            <TextInput style={styles.inputControl} placeholder='Seu Nome'>
            </TextInput>

          </View>

          <View style={styles.formAction}>
            <TouchableOpacity>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Criar Conta</Text>
              </View>
            </TouchableOpacity>
          </View>


        </View>

        
      




        <StatusBar style="light" />


      </ScrollView>
    </View>

  );
}
