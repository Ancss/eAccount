import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  { name: 'ExpenseDB.db', location: 'default' },
  () => console.log('数据库连接成功'),
  error => console.error('数据库连接错误', error)
);

export const initDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS expenses (id INTEGER PRIMARY KEY AUTOINCREMENT, amount REAL, description TEXT, category TEXT, date TEXT)'
    );
  });
};

export const getExpenses = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM expenses', [], (_, { rows }) => {
        resolve(rows.raw());
      });
    });
  });
};

export const addExpense = (amount: number, description: string, category: string) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO expenses (amount, description, category, date) VALUES (?, ?, ?, ?)',
        [amount, description, category, new Date().toISOString()],
        (_, result) => {
          resolve(result.insertId);
        },
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
};

// 添加更多数据库操作函数...