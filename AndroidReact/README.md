# 📱 Nome do Projeto

Uma breve descrição do que este aplicativo faz e qual o seu objetivo principal.

---

## 🚀 Tecnologias e Dependências

Este projeto foi desenvolvido utilizando o ecossistema **Expo** e as seguintes bibliotecas:

- **[React Navigation (Drawer)](https://reactnavigation.org/docs/drawer-based-navigation/)**: Navegação lateral intuitiva.
- **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)**: Motor de animações de alta performance.
- **[React Native Worklets](https://github.com/chimeg/react-native-worklets)**: Suporte para execução de código em threads secundárias.
- **[Tabler Icons React](https://tabler.io/icons)**: Conjunto de ícones personalizáveis para a interface.

---

## 📦 Instalação e Setup

Siga os passos abaixo para rodar o projeto localmente:

### 1. Criar o projeto (caso ainda não tenha criado)
```bash
npx create-expo-app@latest "nome-do-projeto"
cd "nome-do-projeto"

npx expo install @react-navigation/drawer react-native-reanimated react-native-worklets

npm install @tabler/icons-react

npx expo start ou npm start
