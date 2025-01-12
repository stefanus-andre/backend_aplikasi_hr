import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
    return(
        <View style={styles.container}>
            <Text>Home</Text>
            <Text>Coba ini adalah testing</Text>
            <Link href="/details">Details</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})