import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS } from '@/constants';
import styles from './profileoptions.style';

const ProfileOptions = () => {
   
  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('EmailAddressScreen')}
      style={styles.optionContainer}>
        <View style={styles.content}>
          <View>
            <Text style={styles.heading}>Email Address</Text>
            <Text style={styles.description}>johndoe@example.com</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={20} color={COLORS.textGreen} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('MyNumberScreen')}
      style={styles.optionContainer}>
        <View style={styles.content}>
          <View>
            <Text style={styles.heading}>Phone Number</Text>
            <Text style={styles.description}>0712345678</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={20} color={COLORS.textGreen} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer}>
        <View style={styles.content}>
          <View>
            <Text style={styles.heading}>Phone Number List</Text>
            <Text style={styles.description}>Manage your phone numbers</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={20} color={COLORS.textGreen} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionContainer}>
        <View style={styles.content}>
          <View>
            <Text style={styles.heading}>Password</Text>
            <Text style={styles.description}>xxxxxxxx</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={20} color={COLORS.textGreen} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionContainer}>
        <View style={styles.content}>
          <View>
            <Text style={styles.heading}>Payment details</Text>
            <Text style={styles.description}>Manage your payment details</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={20} color={COLORS.textGreen} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileOptions;
