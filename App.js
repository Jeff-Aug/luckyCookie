import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const biscoito = './src/img/biscoito.png'
  const [textoFrase, setTextoFrase] = useState(" ")
  const [img, setImg] = useState(require(biscoito))
  let frases = [
    'Seja feliz. A base de remédios',
    'Potencial. Nem todo mundo será Astronauta quando crescer!',
    'Esforço. Plágio economiza tempo!',
    'Vocês que pensam que sabem tudo, se incomodem conosco que sabemos!',
    'A inteligência artificial não é páreo para a estupidez natural!',
    'Faça um bom uso do objeto cilíndrico que você deve ter, sob a sua mesa!',
    'Saboreie os momentos sob os holofotes. Eles não irão durar muito!',
    'Se você não conseguir de primeira, remova todas as evidências de que você ao menos tentou!',
    'A Inabilidade de um Time, tem um impacto muito maior que a soma das inabilidades individuais de seus componentes!',
    'Fujões nunca vencem. Vencedores nunca fogem. Mas aqueles que nunca vencem e continuam sem fugir são idiotas!',
    'Quando o que está por vir é duro, o durão pede um café!',
    'Finalmente ela olhou pra você. E te achou feio.',
    'Aquela festa parece legal… Ninguém te convidou.',
    'Sexta feira! O melhor dia para invejar pessoas felizes…',
    'Se você vai se atrasar, então se atrase de verdade. Não dois minutinhos. Atrase-se uma hora e saboreie seu café da manhã!',
    'Sonhos são como arco-íris. Somente os bobos correm atrás deles!',
    'Uma jornada de milhares de quilômetros, as vezes termina mal. Muito mal!',
    'Realizando o impossível significa apenas a demanda que seu chefe irá adicionar as suas atividades regulares.',
    'Faça um elogio. Não receba outro em troca.',
    'Ela disse que te ama. “Desculpe, janela errada”.',
    'Você venceu seus inimigos. Playstation!',
    'Acaricie sua mão. Finja que é de uma garota!',
    'Seu fim de semana. Também conhecido como “fail de semana”!',
    'Nem tudo que cai do ceu é água, ás vezes pode ser bosta'
  ]

    function quebrarBiscoito(){
      let numAleatorio = Math.floor(Math.random() * frases.length)
      setTextoFrase(`"${frases[numAleatorio]}"`)
      setImg(require('./src/img/biscoitoAberto.png'))
    } 
    function reiniciarBiscoito(){
      setImg(require(biscoito))
      setTextoFrase('')
    }
  return (
    <View style={[styles.container, { borderWidth: 9, borderColor: '#ff389e', borderRadius: 30 }]}>

      <Image
        source={img}// responsavel por busca a imagem
        style={styles.img}
      />

      <Text style={styles.textofrase}> {textoFrase}</Text>


      <TouchableOpacity style={styles.botao} onPress={() => quebrarBiscoito()} >
        <View style={styles.btnArea}>
          <Text style={styles.bntTexto}> Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>



      <TouchableOpacity style={[styles.botao, { borderColor: '#111' }]} onPress={() => reiniciarBiscoito()} >
        <View style={styles.btnArea}>
          <Text style={[styles.bntTexto, { color: '#121212' }]}> Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 222,
    width: 222,
    marginBottom: 30
  },
  textofrase: {
    fontStyle: 'italic',
    fontSize: 20,
    textAlign: 'center'
  },
  botao: {
    width: 222,
    height: 50,
    marginTop: 14,
    textAlign: 'center',
    borderWidth: 3,
    backgroundColor: '#00f7ff',
    borderRadius: 25

  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bntTexto: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#dd7d22'
  }

});
