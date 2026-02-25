import { Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function Inicio() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1E90FF",
        padding: 20,
        marginTop: 50,
        marginBottom: 50,
      }}
    >
      {}
      <Stack.Screen options={{ headerShown: false }} />

      {}
      <Ionicons name="logo-react" size={120} color="white" style={{ marginBottom: 20 }} />

      <Text style={{
        color: "#edf8fd",
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 50,
      }}>
        App Contador
      </Text>

      <Link href={"./drawer"}
        style={{
          backgroundColor: "white",
          padding: 15,
          borderRadius: 10,
          width: "50%",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#1E90FF",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Iniciar
        </Text>
      </Link>
    </View>
  );
}