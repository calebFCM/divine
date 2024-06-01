import React, { useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS, SIZES } from '@/constants';
import { icons } from '@/constants';
import styles from './numberlist.style'; // Assuming you have a separate styles file
import { useNavigation } from '@react-navigation/native';

const NumberList = () => {
  const navigation = useNavigation();
  const [containerVisibility, setContainerVisibility] = useState([false, false, false]);

  const toggleContainerVisibility = (index) => {
    setContainerVisibility((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My phone number list</Text>
      <Text style={styles.subheading}>Phone numbers (3)</Text>

      <View style={styles.boxContainer}>
        {/* Label and Chevron Icon */}
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>View my numbers</Text>
          <TouchableOpacity onPress={() => toggleContainerVisibility(0)}>
            <FontAwesome5
              name={containerVisibility[0] ? 'chevron-up' : 'chevron-down'}
              size={17}
              color={COLORS.text}
            />
          </TouchableOpacity>
        </View>

        {/* Number Containers */}
        {containerVisibility[0] && (
          <>
            <View style={styles.numberContainer}>
              <View style={styles.grayLine}></View>
              {/* Number and Icon */}
              <View style={styles.number}>
                <Text style={styles.numberText}>071 190 6255</Text>
                <TouchableOpacity>
                  <FontAwesome5 name="trash-alt" size={17} color={COLORS.themeRed} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.numberContainer}>
              <View style={styles.grayLine}></View>
              {/* Number and Icon */}
              <View style={styles.number}>
                <Text style={styles.numberText}>071 190 6255</Text>
                <TouchableOpacity>
                  <FontAwesome5 name="trash-alt" size={17} color={COLORS.themeRed} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.numberContainer}>
              <View style={styles.grayLine}></View>
              {/* Number and Icon */}
              <View style={styles.number}>
                <Text style={styles.numberText}>071 190 6255</Text>
                <TouchableOpacity>
                  <FontAwesome5 name="trash-alt" size={17} color={COLORS.themeRed} />
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </View>

      <Text style={styles.chooseText}>I am buying for</Text>
      <Text style={styles.grayText}>Enter a Divine phone number</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Enter number"
      />
      <View style={styles.contactListContainer}>
        <Text style={styles.contactListText}>Or choose a divine phone number from your phone's contact list.</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={icons.group} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>ENTER</Text>
      </TouchableOpacity>

    </View>
  );
};

export default NumberList;
