import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ItemDetailsView = ({ navigation, route }) => {

    return (
        <View style={styles.container}>
            <Text>Edit item details</Text>
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

export default ItemDetailsView;
