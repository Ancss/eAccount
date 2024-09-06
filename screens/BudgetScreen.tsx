import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { getBudget, setBudget } from '../utils/database';

function BudgetScreen(): React.JSX.Element {
  const [budget, setBudgetState] = useState('');
  const [currentBudget, setCurrentBudget] = useState(0);

  useEffect(() => {
    loadBudget();
  }, []);

  const loadBudget = async () => {
    const loadedBudget = await getBudget();
    setCurrentBudget(loadedBudget);
  };

  const handleSetBudget = async () => {
    const newBudget = parseFloat(budget);
    if (!isNaN(newBudget) && newBudget > 0) {
      await setBudget(newBudget);
      setCurrentBudget(newBudget);
      setBudgetState('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>当前预算: ¥{currentBudget.toFixed(2)}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={budget}
          onChangeText={setBudgetState}
          placeholder="输入新预算"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleSetBudget}>
          <Text style={styles.buttonText}>设置预算</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default BudgetScreen;