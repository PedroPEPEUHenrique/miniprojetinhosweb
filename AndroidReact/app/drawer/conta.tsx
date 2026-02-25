import { Text, View } from "react-native";

export default function Conta() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#1E90FF",
                marginBottom: 20,
            }}          
        >
            <Text style={{
                color: "#edf8fd",
                fontSize: 40,
                fontWeight: 'bold'
            }}>
                Bem-vindo!
            </Text>
        </View>
    );
}