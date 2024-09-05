import {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const LoginPage = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const ValidateForm = () => {
    let isValid = true;

    // Regular expression for password validation
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Validate username
    if (userName.length < 4) {
      setNameError('Invalid username');
      isValid = false;
    } else {
      setNameError(''); // Clear error if username is valid
    }

    // Validate password
    if (password.length < 8 || !passwordRegex.test(password)) {
      setPasswordError('Check Password again'); // Set error if password is invalid
      isValid = false;
    } else {
      setPasswordError(''); // Clear error if password is valid
    }

    return isValid;
  };

  const onSubmitHandler = () => {
    if (ValidateForm()) {
      // Clear form fields and navigate if the form is valid
      setUserName('');
      setPassword('');
      navigation.navigate('confirmation');
    }
  };

  return (
    <View style={styles.loginWrapper}>
      <Text style={styles.loginContent}>Login Here</Text>
      <View style={styles.loginContainer}>
        <View style={{marginBottom: 20, width:'100%' , alignItems:'center'}}>
          <View style={{marginTop: 80, width: '90%', marginBottom: 20}}>
            <Text style={styles.textContent}>Username</Text>
            <TextInput
              placeholder="Username"
              style={styles.input}
              onChangeText={setUserName}
              value={userName}
            />
            {nameError && <Text style={styles.errorContent}>{nameError}</Text>}
            <Text style={styles.textContent}>Password</Text>
            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry
              onChangeText={setPassword}
              value={password}
            />
            {passwordError && (
              <Text style={styles.errorContent}>{passwordError}</Text>
            )}
          </View>
          <View style={{width: '90%'}}>
            <Button title="Confirm" onPress={onSubmitHandler} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  loginWrapper: {
    backgroundColor: '#140d36',
    flex: 1,
  },
  loginContent: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 15,
  },
  loginContainer: {
    backgroundColor: '#ffffff',
    width: '90%',
    margin: 'auto',
  },
  textContent: {
    fontWeight: '900',
    fontSize: 20,
    marginBottom: 10,
  },
  errorContent: {
    color: 'red',
    fontSize: 15,
    marginTop: 7,
  },
  input: {
    padding: 10,
    borderRadius: 10,
    borderColor: '#3b3847',
    borderWidth: 2,
    fontSize: 20,
  },
});
