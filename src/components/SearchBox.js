import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

class SearchBox extends React.Component {
    state = {
        inputValue: ''
    };

    onChangeText = (inputValue) => {
        this.setState({ inputValue });
    }

    render() {
        const { onSearchPressed } = this.props;
        return (
            <View style={styles.boxStyle}>
                <TextInput
                    onChangeText={this.onChangeText}
                    style={styles.inputStyle}
                    autoCorrect={false}
                />
                <TouchableOpacity onPress={() => onSearchPressed(this.state.inputValue)} >
                    <Text>Search</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    boxStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.2

    },
    inputStyle: {
        borderColor: 'green',
        borderWidth: 2,
        width: 100,
        height: 30
    }
};

export default SearchBox;