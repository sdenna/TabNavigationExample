import React, {useContext} from 'react';
import { View, Text } from 'react-native';
import { Context } from '../../config/context';

export default function SettingsScreen() {
  const [context, setContext] = useContext(Context);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        onPress={() => alert('This is the "Settings" screen.')}
        style={{ fontSize: 26, fontWeight: 'bold' }}>
        Settings Screen
      </Text>
      <Text>I have {context.length} friends</Text>
    </View>
  );
}
