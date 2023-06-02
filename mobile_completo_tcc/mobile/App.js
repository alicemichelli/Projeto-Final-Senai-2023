import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper/src';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SegundaTela from './segundaTela';
import DetalhesCampanha from './terceiraTela';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Image source={require('./imgs/logo.png')} style={styles.logo} />
        <Text style={styles.logoText}>Contribua+</Text>
        <TextInput
          placeholder="Busque por uma campanha específica"
          style={styles.input}
        />
        <TouchableOpacity style={styles.button}>
          <Image source={require('./imgs/lupa-white.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.swipper}>
        <Swiper style={styles.wrapper} autoplay>
          <View style={styles.slide}>
            <Image
              source={require('./imgs/arvore-destaque.png')}
              resizeMode="cover"
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('./imgs/background.png')}
              resizeMode="cover"
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('./imgs/cachorro-destaque.png')}
              resizeMode="cover"
              style={styles.image}
            />
          </View>
        </Swiper>
      </View>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Campanhas"
            component={SegundaTela}
            options={{
              headerTitleStyle: {
                color: '#000000',
                fontSize: 24,
                fontWeight: 'bold',
                
              },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
           name="DetalhesCampanha" 
           component={DetalhesCampanha}
           options={{
            headerTitleStyle: {
              color: '#000000',
              fontSize: 24,
              fontWeight: 'bold',
              
            },
            headerTitleAlign: 'center',
          }}
           />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
 

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
  },
  logo: {
    width: 60,
    height: 60,
  },
  logoText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(211, 211, 211, 0.824)',
    width: '60%',
    height: 40,
    marginLeft: 15,
    color: '#808080',
  },
  button: {
    height: 35,
    width: 46,
    backgroundColor: 'grey',
    borderWidth: 5,
    borderColor: 'transparent',
    borderRadius: 10,
    opacity: 0.2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    marginLeft: '1%',
  },
  swipper: {
    width: '100%',
    height: '20%',
  },
  icon: {
    height: 25,
    width: 25,
  },
  wrapper: {},
  slide: {
    flex: 1,
    top: '5%',
    height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});