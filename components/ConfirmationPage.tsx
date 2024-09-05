import {Text, View} from 'react-native';

const Confirmation = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{backgroundColor: '#ffffff'}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '900',
            color: 'green',
            padding: 35,
          }}>
          You are navigated
        </Text>
      </View>
    </View>
  );
};
export default Confirmation;
