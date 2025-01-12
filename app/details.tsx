import { StyleSheet, Text, View } from "react-native";

export default function DetailScreen() {
    return(
        <View style={styles.container}>
            <Text>Details</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});