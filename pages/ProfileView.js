import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ProfileView = ({ navigation, route }) => {
    
    const name = route.params?.name || 'Lucas';

    return (
        <View style={styles.container}>
            <Text>This is {name}'s profile</Text>
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

export default ProfileView;
