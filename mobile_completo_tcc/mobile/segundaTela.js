import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

const Campanhas = ({ navigation }) => {
  const [campanhas, setCampanhas] = useState([]);

  useEffect(() => {
    const fetchCampanhas = async () => {
      const response = await axios.get('http://localhost:3300/campanha');
      setCampanhas(response.data);
    };

    fetchCampanhas();
  }, []);

  const handleCampanhaPress = (item) => {
    // Navegar para a tela de detalhes da campanha
    navigation.navigate('DetalhesCampanha', { campanha: item });
  };

  const renderCampanha = ({ item }) => {
    // console.log(item.imagens[0])
    return (

      <TouchableOpacity style={styles.campanha} onPress={() => handleCampanhaPress(item)}>
        <View style={styles.imageContainer}>
          {/* Renderiza todas as imagens da campanha */}
          {
          item.imagens.map((imagem, index) => {
            // console.log(imagem[Object.keys(imagem)[0]]);
            const imagemF = imagem[Object.keys(imagem)[1]];
            
            console.log(imagemF);
           const imagemFormatada = imagemF.replace(/\\/g, '/');
            
            var imgFormatada = imagemFormatada.slice(6,150)
            // var imgPrincipal = `http://localhost:3300${imgFormatada}`
            console.log(imgFormatada);
           return(
          <Image
            key={index}
            source={`http://localhost:3300/${imgFormatada}`}
            style={styles.image}
          />
          )
          })
        }
          
        </View>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Text style={styles.descricao}>{item.descricao}</Text>
        <Text style={styles.valorMeta}>Valor meta: R$ {item.valor_meta}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={campanhas}
        renderItem={renderCampanha}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  
    
  },
  campanha: {
    marginBottom: 20,
    borderColor: '#D3D3D3',
    backgroundColor: 'rgba(211, 211, 211, 0.1)',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    height: 200,
    width: '100%',
    
    
  },
  image: {
    height: '100%',
    width:"100%",
    // aspectRatio: 1,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  descricao: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  valorMeta: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Campanhas;
