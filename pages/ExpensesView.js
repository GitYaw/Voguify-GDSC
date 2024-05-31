import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, ImageBackground } from 'react-native';
import { BarChart, PieChart } from 'react-native-chart-kit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase-config';

import primaryBackground from '../assets/primary_background.png';

const StatsView = ({ navigation }) => {


    /* Hardcoded Values */
    let monthly_budget = 50
    let current_expenses = 60
    const data = [20, 45, 28, 80, 99, 43];
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];



    const [items, setItems] = useState([]);

    const colors = ['#9B5094', '#F2CD5D', '#26547C', '#FF5733', '#35B1B5'];

    useEffect(() => {
        const fetchData = async () => {
          try {
            const itemsRef = ref(database, '/clothing');
            onValue(itemsRef, (snapshot) => {
              const data = snapshot.val();
              if (data) {
                const itemsArray = Object.values(data);
                setItems(itemsArray);
                console.log(itemsArray);
              }
            });
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

    const calculateTotalExpenses = () => {
      return items.reduce((total, item) => total + item.price, 0);
    };

    const calculateSpendingByCategory = () => {
      const categoryMap = {};
      items.forEach((item) => {
        if (categoryMap[item.category]) {
          categoryMap[item.category] += item.price;
        } else {
          categoryMap[item.category] = item.price;
        }
      });
      console.log(categoryMap);
      return Object.entries(categoryMap).map(([category, total]) => ({
        category,
        total,
      }));
    };

    const totalExpenses = calculateTotalExpenses();
    const spendingByCategory = calculateSpendingByCategory();
    const jsonData = spendingByCategory.map((categoryData, index) => ({
      id: index,
      name: `spent on ${categoryData.category}`,
      color: colors[index % colors.length],
      price: categoryData.total,
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    }));

    const minRange = 0; // Minimum value for y-axis
    const maxRange = 100;
    const chartConfig = {
        backgroundGradientFrom: '#fff',
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: '#fff',
        backgroundGradientToOpacity: 0.5,
        color: () => '#333', // THIS
        barPercentage: 0.5,
        propsForLabels: {
            fontSize: '10',
        },
        fillShadowGradient: '#FF493B', // THIS
        fillShadowGradientOpacity: 1,
        propsForBackgroundLines: {
            strokeWidth: 1,
            stroke: '#efefef',
            strokeDasharray: '0',
        },
    };



    return (
        <ImageBackground source={primaryBackground} style={styles.backgroundImage}>
            <ScrollView>
                <View style={styles.container}>
                    {monthly_budget >= current_expenses ? (
                        <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10, marginVertical: 5, borderRadius: 5, backgroundColor: "#dbf9e2" }}>You have ${monthly_budget - totalExpenses} left to spend this month.</Text>
                    ) : (
                        <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10, marginVertical: 5, borderRadius: 5, backgroundColor: "#fcdee8" }}>You are ${totalExpenses - monthly_budget} over your budget this month.</Text>
                    )}

                    {/* {jsonData.map(clothingItem => (
                    <View>
                        <Text key={clothingItem.id} style={styles.title}>{clothingItem.name}</Text>
                        <Text key={clothingItem.id} style={styles.price}>Price: ${clothingItem.price}</Text>
                    </View>
                ))} */}
                    <Text style={styles.title}>Spending By Item</Text>
                    <View style={styles.chartContainer}>
                      <PieChart
                        data={jsonData}
                        width={500}
                        height={300} // Adjusted height for the pie chart
                        chartConfig={chartConfig}
                        accessor="price"
                        backgroundColor="transparent"
                        paddingLeft="15"
                        absolute
                      />
                    </View>
                    <Text style={styles.title}>Monthly Spending</Text>
                    <View style={styles.chartContainer}>
                        <BarChart
                            data={{
                                labels: labels,
                                datasets: [
                                    {
                                        data: data,
                                    },
                                ],
                            }}
                            width={300}
                            height={200}
                            yAxisLabel="$"
                            chartConfig={chartConfig}
                        />
                    </View>
                    <Button
                        title="Go Back"
                        onPress={() => navigation.goBack()}
                    />
                    </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    width: '90%', // Adjusted width for the chart container
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  price: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default StatsView;
