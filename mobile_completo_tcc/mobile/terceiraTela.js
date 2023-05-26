// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// const DetalhesCampanha = ({ route }) => {
//   const { campanha } = route.params;
//   const [campanhaEncontrada, setCampanhaEncontrada] = useState(null);

//   useEffect(() => {
//     carregarCampanha();
//   }, []);

//   const carregarCampanha = async () => {
//     try {
//       const response = await fetch('http://localhost:3300/campanha');
//       const data = await response.json();

//       const campanhaEncontrada = data.find((c) => c.id === campanha.id);
//       if (campanhaEncontrada) {
//         setCampanhaEncontrada(campanhaEncontrada);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (!campanhaEncontrada) {
//     return null;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titulo}>{campanhaEncontrada.titulo}</Text>
//       <Text style={styles.organizador}>{campanhaEncontrada.organizador.nome}</Text>
//       <Image style={styles.imagem} source={{ uri: campanhaEncontrada.imagens[0].caminho_imagem }} />
//       <Text style={styles.descricao}>{campanhaEncontrada.descricao}</Text>
//       <Text style={styles.valorMeta}>Valor meta: R$ {campanhaEncontrada.valor_meta}</Text>
//       <Text style={styles.valorArrecadado}>Já arrecadou: R$ {campanhaEncontrada.valor_arrecadado}</Text>
//       {/* Adicione mais informações da campanha aqui */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 16,
//     backgroundColor: '#F0F0F0', // Cor de fundo do container
//   },
//   titulo: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#333', // Cor do texto do título
//     textAlign: 'center',
//   },
//   organizador: {
//     fontSize: 20,
//     fontWeight: 'normal',
//     marginBottom: 10,
//     color: '#333', // Cor do texto do organizador
//     textAlign: 'center',
//   },
//   imagem: {
//     width: 200,
//     height: 200,
//     marginBottom: 10,
//   },
//   descricao: {
//     fontSize: 16,
//     marginBottom: 10,
//     color: '#666', // Cor do texto da descrição
//     textAlign: 'center',
//   },
//   valorMeta: {
//     fontSize: 16,
//     marginBottom: 5,
//     color: '#888', // Cor do texto do valor meta
//   },
//   valorArrecadado: {
//     fontSize: 16,
//     marginBottom: 10,
//     color: '#888', // Cor do texto do valor arrecadado
//   },
//   // Adicione estilos adicionais aqui conforme necessário
// });

// export default DetalhesCampanha;


// TESTE2
// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// const DetalhesCampanha = ({ route }) => {

//   const [campanhas, setCampanha] = useState([]);

//   useEffect(() => {

//     const options = { method: 'GET' };

//     fetch('http://localhost:3300/campanha', options)

//       .then(res => { return res.json() })

//       .then(data => {



//         setCampanha(data);

//       })


//   }, []);


//   useEffect(() => {
//   }, [campanhas]);

//   console.log(campanhas);


//   return (
//     <View style={styles.container}>

//       {

//         campanhas.map((c, i) => {

//           var imagem = c.imagens[i].caminho_imagem
          
//           var imagemFormatada = imagem.replace(/\\/g, '/')

//           console.log('../back/' + imagemFormatada);
//           return (
//             <View key={i}>
//               <Text style={styles.organizador}>{imagemFormatada}</Text>

//               <Image style={styles.imagem} source={'../back/' + imagemFormatada} />


//               {/* <Text style={styles.imagens}>{campanhaEncontrada.caminho_imagem}</Text>
//               <Text style={styles.descricao}>{campanhaEncontrada.descricao}</Text>
//               <Text style={styles.valorMeta}>Valor meta: R$ {campanhaEncontrada.valor_meta}</Text>
//               <Text style={styles.valorArrecadado}>Já arrecadou: R$ {campanhaEncontrada.valor_arrecadado}</Text> */}
//             </View>
//           )
//         })
//       }





//     </View >
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 16,
//     backgroundColor: '#F0F0F0', // Cor de fundo do container
//   },
//   titulo: {
//     flex: 1,
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#333', // Cor do texto do título
//     textAlign: 'center',
//   },
//   organizador: {
//     flex: 1,
//     fontSize: 20,
//     fontWeight: 'normal',
//     marginBottom: "90%",
//     color: '#333', // Cor do texto do título
//     textAlign: 'center',
//     marginTop: 2, // Margem superior para separar do título
//   },
//   descricao: {
//     fontSize: 16,
//     marginBottom: 10,
//     color: '#666', // Cor do texto da descrição
//   },
//   imagens: {
//     fontSize: 16,
//     marginBottom: 5,
//     color: '#888', // Cor do texto do valor meta
//   },
//   valorMeta: {
//     fontSize: 16,
//     marginBottom: 5,
//     color: '#888', // Cor do texto do valor meta
//   },
//   valorArrecadado: {
//     fontSize: 16,
//     marginBottom: 10,
//     color: '#888', // Cor do texto do valor arrecadado
//   },
//   // Adicione estilos adicionais aqui conforme necessário
// });

// export default DetalhesCampanha;


import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetalhesCampanha = ({ route }) => {
  const [campanhas, setCampanhas] = useState([]);

  useEffect(() => {
    const carregarCampanhas = async () => {
      try {
        const response = await fetch('http://localhost:3300/campanha');
        const data = await response.json();
        setCampanhas(data);
      } catch (error) {
        console.error(error);
      }
    };

    carregarCampanhas();
  }, []);

  return (
    <View style={styles.container}>
      {campanhas.map((campanha, index) => {
        const imagem = campanha.imagens[index].caminho_imagem;
        const imagemFormatada = imagem.replace(/\\/g, '/');

        console.log(imagemFormatada);

        // Atualize a variável 'uri' com o caminho correto da imagem no servidor
        const uri = `http://localhost:3300/${imagemFormatada}`;

        return (
          <View key={index}>
            <Text style={styles.organizador}>{campanha.organizador.nome}</Text>
            <Image style={styles.imagem} source={{ uri: uri }} />
            <Text style={styles.descricao}>{campanha.descricao}</Text>
            <Text style={styles.valorMeta}>Valor meta: R$ {campanha.valor_meta}</Text>
            <Text style={styles.valorArrecadado}>Já arrecadou: R$ {campanha.valor_arrecadado}</Text>
            {/* Adicione mais informações da campanha aqui */}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F0F0F0', // Cor de fundo do container
  },
  organizador: {
    fontSize: 20,
    fontWeight: 'normal',
    marginBottom: 10,
    color: '#333', // Cor do texto do organizador
    textAlign: 'center',
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666', // Cor do texto da descrição
    textAlign: 'center',
  },
  valorMeta: {
    fontSize: 16,
    marginBottom: 5,
    color: '#888', // Cor do texto do valor meta
  },
  valorArrecadado: {
    fontSize: 16,
    marginBottom: 10,
    color: '#888', // Cor do texto do valor arrecadado
  },
  // Adicione estilos adicionais aqui conforme necessário
});

export default DetalhesCampanha;
