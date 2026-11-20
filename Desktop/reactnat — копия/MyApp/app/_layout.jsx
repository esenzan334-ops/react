import { Stack } from "expo-router";

export default function RootLayout() {
  <Stack screen0ptinos={{
    headersStyle: { backgroundColor: '#0B1F3A'},
    headerTintColor: '#FFFFFF',
    headerTitleStyle: { fontWeight: 'bold'},
  }}>
    <Stack.Screen name="index"
    options={{ title: 'Башкы Бет'}}/>
  </Stack>

}
