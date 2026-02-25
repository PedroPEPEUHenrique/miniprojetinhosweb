import { Text, View } from "react-native";

export default function Extrato() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#1E90FF",
                gap: 50,
                marginBottom: 20,
            }}
        >
            <Text style={{
                color: "#edf8fd",
                fontSize: 40,
            }}>Contador</Text>
        </View>
    );
}