/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}



const AwesomeProject = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [randomNum, setRandomNum] = useState(0);



  const generateRandomNum = () => {
    const min = Math.ceil(Math.min(parseFloat(num1), parseFloat(num2)));
    const max = Math.floor(Math.max(parseFloat(num1), parseFloat(num2)));
    setRandomNum(Math.floor(Math.random() * (max - min + 1)) + min);
  };


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };



  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}> 
          <TextInput
            placeholder='Digite o primeiro número'
            value = {num1}
            onChangeText={setNum1}
            keyboardType='numeric'
          />
          <TextInput
            placeholder='Digite o segundo número'
            value={num2}
            onChangeText={setNum2}
            keyboardType='numeric'
          />
          <Button title='Gerar número aleatório'
          onPress={generateRandomNum}/>
          {randomNum && <Text>Número aleatório entre {num1} e {num2} é: {randomNum}</Text>}

        </View>
    
      </ScrollView>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


}
export default App;
*/

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AwesomeProject = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [randomNum, setRandomNum] = useState(0);

  const generateRandomNum = () => {
    const min = Math.ceil(Math.min(parseInt(num1), parseInt(num2)));
    const max = Math.floor(Math.max(parseInt(num1), parseInt(num2)));
    setRandomNum(Math.floor(Math.random() * (max - min + 1)) + min);
  };

  return (
    <View>
      <TextInput
        placeholder="Digite o primeiro número"
        value={num1}
        onChangeText={setNum1}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Digite o segundo número"
        value={num2}
        onChangeText={setNum2}
        keyboardType="numeric"
      />
      <Button title="Gerar número aleatório" onPress={generateRandomNum} />
      {randomNum !== 0 && <Text>Número aleatório entre {num1} e {num2} é: {randomNum}</Text>}
    </View>
  );
};
'teste'

export default AwesomeProject;

