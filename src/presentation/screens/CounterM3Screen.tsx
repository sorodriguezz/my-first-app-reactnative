import {useState} from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../theme/global.styles';
import {FAB} from 'react-native-paper';

export const CounterM3Screen = () => {
  const [count, setCount] = useState(10);
  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>

      {/* <Icon name="accessibility-outline" size={24} /> */}

      <FAB
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        style={globalStyles.fab}
        icon="add-outline"
      />
    </View>
  );
};
