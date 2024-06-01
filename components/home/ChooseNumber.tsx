import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import styles from '@/components/home/choosenumber.style';
import { COLORS } from "@/constants";

const ChooseNumber = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedNumber, setSelectedNumber] = useState('');

  const handleRadioPress = (value) => {
    setSelectedOption((prevSelectedOption) => 
      prevSelectedOption === value ? '' : value
    );
  };

  return (
    <View style={styles.container}>
      {/* Radio Buttons */}
      <View style={styles.radioButtonContainer}>
        {/* My Number */}
        <View style={styles.radioItem}>
          <View style={styles.radioBtns}>
            <RadioButton
              value="myNumber"
              status={selectedOption === 'myNumber' ? 'checked' : 'unchecked'}
              onPress={() => handleRadioPress('myNumber')}
              color={COLORS.themeRed}
              uncheckedColor={COLORS.themeRed} // Set the color for unchecked state
            />
          </View>
          <Text style={styles.instructionText}>My Number</Text>
        </View>
        <Text style={styles.radioLabel}>071 012 5436</Text>
      </View>

      <Text style={styles.numbertHeading}>Another Digital Mobile number</Text>

      <View style={styles.dropDownContainer}>
        <Picker
          selectedValue={selectedNumber}
          onValueChange={(itemValue) => setSelectedNumber(itemValue)}
          enabled={selectedOption !== 'myNumber'} // Disable when myNumber is selected
        >
          <Picker.Item label="Select a number" value="" disabled={true} color={COLORS.lightGray} />
          <Picker.Item label="071 012 5436" value="071 012 5436" />
          <Picker.Item label="071 115 52 26" value="071 115 52 26" />
          <Picker.Item label="071 662 5539" value="071 662 5539" />
        </Picker>
      </View>

      <Text style={styles.orText}>Or</Text>

      <Text style={styles.numbertHeading}>Add a Digital Mobile number</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digital Mobile Number"
          placeholderTextColor="#c4c6c5"
          keyboardType='numeric'
          editable={selectedOption !== 'myNumber'} // Disable when myNumber is selected
        />
      </View>
    </View>
  );
};

export default ChooseNumber;
