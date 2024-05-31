import * as React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, ImageBackground } from 'react-native';
import { BarChart, PieChart } from 'react-native-chart-kit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import primaryBackground from '../assets/primary_background.png';

const StatsView = ({ navigation, route }) => {



    let monthly_budget = 50
    let current_expenses = 60


    const jsonData = [
        { "id": 1, "name": "Blue Hoodie", "price": 12, color: '#9B5094', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { "id": 2, "name": "White Shirt", "price": 10, color: "#F2CD5D", legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { "id": 3, "name": "Grey Hat", "price": 8, color: "#26547C", legendFontColor: '#7F7F7F', legendFontSize: 15 }
    ];

    const data = [20, 45, 28, 80, 99, 43];
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];


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

    const sliceColor = ['#fbd203', '#ffb300', '#ff9100', '#ff6c00', '#ff3c00']




    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('current_user');
          
          console.log(value);
          
        } catch (e) {
          console.error("home page not get")
        }
      };
      getData();



    return (
        <ImageBackground source={primaryBackground} style={styles.backgroundImage}>
            <ScrollView>
                <View style={styles.container}>
                    {monthly_budget >= current_expenses ? (
                        <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10, marginVertical: 5, borderRadius: 5, backgroundColor: "#dbf9e2" }}>You have ${monthly_budget - current_expenses} left to spend this month.</Text>
                    ) : (
                        <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10, marginVertical: 5, borderRadius: 5, backgroundColor: "#fcdee8" }}>You are ${current_expenses - monthly_budget} over your budget this month.</Text>
                    )}

                    {/* {jsonData.map(clothingItem => (
                    <View>
                        <Text key={clothingItem.id} style={styles.title}>{clothingItem.name}</Text>
                        <Text key={clothingItem.id} style={styles.price}>Price: ${clothingItem.price}</Text>
                    </View>
                ))} */}
                    <Text style={styles.title}>Spending By Item</Text>
                    <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 10, padding: 10 }}>
                        <PieChart
                            data={jsonData}
                            width={300}
                            height={220}
                            chartConfig={{
                                backgroundColor: '#ffffff',
                                backgroundGradientFrom: '#ffffff',
                                backgroundGradientTo: '#ffffff',
                                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            }}
                            accessor="price"
                            backgroundColor="transparent"
                            paddingLeft="15"
                            absolute
                        />
                    </View>
                    <Text style={styles.title}>Monthly Spending</Text>
                    <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 10, padding: 10 }}>
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
                        title="get auth string"
                        onPress={() => getData()}
                    />



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
    clothingitem: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
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
