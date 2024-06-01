import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput  } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import styles from '@/components/home/socialtopupselected.style';
import { COLORS, FONT, SIZES } from "@/constants";
import ChooseNumber from './ChooseNumber';

const SocialTopUpSelected = () => {
  const navigation = useNavigation(); 
  const [selectedOption, setSelectedOption] = useState('myNumber');

  return (
    <View style={styles.container}>
      {/* Back Icon */}
      <View style={styles.BackBtnContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="angle-left" size={24} style={styles.icon} />
        </TouchableOpacity > 
        <Text style={styles.headingText}>Social Bundles</Text>
      </View>

      {/* Clickable Box */}
      <TouchableOpacity onPress={() => navigation.navigate('')}  
         style={styles.clickableBox}>
        <View style={styles.greenBox}>
          <View style={styles.whiteBox}>
            <Text style={styles.type}>Weekly</Text>
            <Text style={styles.bigText}>500 MB</Text>
          </View>
          <Text style={styles.price}>R37,50</Text>
        </View>
      </TouchableOpacity>

      {/* Additional Text */}
      <View style={styles.additionalTextContainer}>
        <Text style={styles.additionalTextLeft}>For number</Text>
        <Text style={styles.additionalTextRight}>072 345 6789</Text>
      </View>

      {/* Add to Basket Button */}
      <TouchableOpacity
        onPress={() => console.log('Add to basket pressed')}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Add to Basket</Text>
      </TouchableOpacity>

    </View>
  );
};

export default SocialTopUpSelected;
