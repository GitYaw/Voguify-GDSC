import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const NewItemView = ({ navigation, route }) => {

    return (
        <View style={styles.container}>
            <Text>Add an item</Text>
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

export default NewItemView;
