import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => (
    <View style={styles.header} >
        <Text>{props.title}</Text>
    </View>
);

const styles = {
    header: { 
        alignItems: 'center',
        justifyContent: 'center', 
        paddingTop: 15,
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
      }
};

export default Header;