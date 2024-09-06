import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ExpenseItemProps {
  expense: {
    id: number;
    amount: number;
    description: string;
    category: string;
    date: string;
  };
}

function ExpenseItem({ expense }: ExpenseItemProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.amount}>{`¥${expense.amount.toFixed(2)}`}</Text>
      <Text style={styles.description}>{expense.description}</Text>
      <Text style={styles.category}>{expense.category}</Text>
      <Text style={styles.date}>{new Date(expense.date).toLocaleDateString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
  category: {
    fontSize: 14,
    color: '#666',
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
});

export default ExpenseItem;