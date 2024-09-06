import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';

function AnalysisScreen() {
  // 这里应该从数据库获取实际数据
  const lineChartData = {
    labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
    datasets: [{ data: [20, 45, 28, 80, 99, 43] }],
  };

  const pieChartData = [
    { name: '食品', population: 215, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: '交通', population: 280, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: '娱乐', population: 527, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>支出趋势</Text>
      <LineChart
        data={lineChartData}
        width={300}
        height={200}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        bezier
      />
      <Text style={styles.title}>支出分类</Text>
      <PieChart
        data={pieChartData}
        width={300}
        height={200}
        chartConfig={{
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default AnalysisScreen;