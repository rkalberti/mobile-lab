//Aula de Programação Mobile, estruturas basicas e contador simples.


// Importa componentes do React Native e bibliotecas de terceiros necessárias para a aplicação
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


// Componente funcional principal que representa a tela ou parte da aplicação
export default function App() {


 // Declarações de variáveis/estados e funções
 // Onde declaramos estados, constantes e funções que controlam o comportamento do componente
 const [contador, setContador] = useState(0); // Estado que armazena o valor do contador


 const aumentar = () => setContador(contador + 1); // Função que incrementa o contador


 const limpar = () => setContador(0);




 // Renderização:
 // JSX define o que será exibido na tela
 return (
   <View style={styles.container}>
   <Text style={styles.textoContador}>
       Contador: {contador}
     </Text>


     <TouchableOpacity style={styles.botao} onPress={aumentar}>
       <Text style={styles.textoBotao}>Aumentar</Text>
     </TouchableOpacity>


     <TouchableOpacity style={[styles.botao, styles.botaoLimpar]} onPress={limpar}>
       <Text style={styles.textoBotao}>Limpar</Text>
     </TouchableOpacity>


   </View>
 );
}


// Estilização:
// StyleSheet organiza os estilos aplicados aos componentes
const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#f2aebc',
 },
 textoContador: {
   fontSize: 23,
   marginBottom: 20,
   fontWeight: 'bold',
 },
 botao: {
   backgroundColor: '#16131f',
   paddingVertical: 15,
   paddingHorizontal: 30,
   borderRadius: 10,
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.25,
   marginBottom: 10, 
   width: 200,       // Largura fixa para os botões ficarem iguais
   alignItems: 'center',
 },
 botaoLimpar: {
   backgroundColor: '#16131f',
 },
 textoBotao: {
   color: '#F2DCDB',
   fontSize: 18,
   fontWeight: '600',
   textTransform: 'uppercase',
 },
});
