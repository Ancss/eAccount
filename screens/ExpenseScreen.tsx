import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ExpenseItem from '../components/ExpenseItem';
import { getExpenses } from '../utils/database';

function ExpenseScreen() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    loadExpenses();
  }, []);

  const loadExpenses = async () => {
    const loadedExpenses = await getExpenses();
    setExpenses(loadedExpenses);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        renderItem={({ item }) => <ExpenseItem expense={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default ExpenseScreen;