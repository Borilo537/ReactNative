import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { styles } from './styles/menuStyle';

export default function MenuScreen({ navigation }) {
    const homePress = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.body}>
            <View style={styles.topContainer}>
                <TouchableOpacity onPress={homePress}>
                    <ImageBackground source={require('./assets/arrow.png')} style={styles.voltar}></ImageBackground>
                </TouchableOpacity>
                <ImageBackground source={require('./assets/profile.png')} style={styles.profile}></ImageBackground>
            </View>
            <View style={styles.main}>
                <Text style={styles.menuText}>Limite de gastos</Text>
                <Text style={styles.menuText}>Metas</Text>
                <Text style={styles.menuText}>Calendário</Text>
                <Text style={styles.menuText}>Amigos</Text>
            </View>
        </View>
    );
}
