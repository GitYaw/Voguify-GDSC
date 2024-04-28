import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const OutfitsView = ({ navigation, route }) => {

    return (
        <View style={styles.container}>
            <Text>Your Outfits</Text>
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default OutfitsView;
