//imports
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
//components
export default class App extends Component {
  state = {
    text: '',
    todo: ''
  }
  addTodo=() => {
    this.setState({ todo: this.state.text }); 
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
        style={styles.inputStyle}
        onChangeText={(text) => this.setState({ text })}
        />
        <Button 
        title='add to-do' 
        color='blue'
        onPress={this.addTodo}
        />
        <Text>{this.state.text}</Text>
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    height: 40,
    borderColor: 'blue',
    borderWidth: 1,
  }
});
