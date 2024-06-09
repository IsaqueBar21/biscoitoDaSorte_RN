import React, { Component } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
  } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {

      textoFrase: '',

      img: require('./src/biscoito.png'),

    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    // frases guardadas em um array
    this.frases = [
      'A solidão é a sorte de todos os espíritos excepcionais.',
      'Não ser amado é falta de sorte, mas não amar é a própria infelicidade.',
      'Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.',
      'Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.',
      'A sorte não existe. Aquilo a que chamas sorte é o cuidado com os pormenores.',
      'Homens fracos acreditam na sorte. Homens fortes acreditam em causa e efeito',
      'A coragem não é ausência do medo; é a persistência apesar do medo.',
      'Somos o que pensamos. Tudo o que somos surge com nossos pensamentos. Com nossos pensamentos, fazemos o nosso mundo.',
      'O mundo é um lugar perigoso de se viver, não por causa daqueles que fazem o mal, mas sim por causa daqueles que observam e deixam o mal acontecer.',
      'Não lamente o que podia ter e se perdeu por caminhos errados e nunca mais voltou.',
      'As convicções são inimigas mais perigosas da verdade do que as mentiras.',
      'As pessoas mais perigosas são aquelas que têm paixão, mas não têm sabedoria.',
      'A vida me ensinou a nunca desistir. Nem ganhar, nem perder, mas procurar evoluir.'
    ];
  }

  quebraBiscoito(){
    // variavel recebe um numero gerado de acordo com o numero de frases do array
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    // função que irá quebrar o biscoito e também mostrar a frase aleatoria
    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
      img: require('./src/biscoitoAberto.png')
    });
  }

  render() {
    return(
      <View style={styles.container}>
        
        {/* imagem biscoito */}
        <Image
          source={this.state.img}
          style={styles.img}
        />

        {/* frase da sorte */}
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        {/* botão da ação */}
        <TouchableOpacity style={styles.botao} 
          
          // função que executa uma ação
          onPress={this.quebraBiscoito}
        >
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }

}

// estilos do app
const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    marginTop: 30,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: 250,
    height: 250
  },

  textoFrase:{
    fontSize:20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  }, 

  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor:'#dd7b22',
    borderRadius: 15
  },

  btnArea:{
     flex: 1,
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
  },

  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  }


  
})


export default App;

