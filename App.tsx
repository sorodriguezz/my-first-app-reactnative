import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';

import IonIcon from 'react-native-vector-icons/Ionicons';
import {DimensionScreen} from './src/presentation/screens';

export const App = () => {
  return (
    <PaperProvider settings={{icon: props => <IonIcon {...props} />}}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name="Sebastián Rodríguez" /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen /> */}
        <DimensionScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
