import * as React from 'react';
import {Button, View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};
  }

  componentDidMount() {
    // make fetch request
    fetch('http://localhost:3000/api/todo')
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({todos: response});
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Text>Oi nanda</Text>
        <Button
          title="Go to Details"
          onPress={() =>
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            })
          }
        />
        { this.state.todos.length > 0 && (
          <SafeAreaView style={styles.container}>
          <FlatList
            data={this.state.todos}
            renderItem={({ item }) => <Item title={item.text} />}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
        )}
      </View>
    )
  }
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
