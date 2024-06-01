import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput  } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import styles from '@/components/home/datatopupselected.style';
import { COLORS, FONT, SIZES } from "@/constants";
import ChooseNumber from './ChooseNumber';

const DataTopupSelected = () => {
  const navigation = useNavigation(); 
  const [selectedOption, setSelectedOption] = useState('myNumber');

  return (
    <View style={styles.container}>
      {/* Back Icon */}
      <View style={styles.BackBtnContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="angle-left" size={24} style={styles.icon} />
        </TouchableOpacity > 
        <Text style={styles.headingText}>Data Bundle</Text>
      </View>

      {/* Clickable Box */}
      <TouchableOpacity style={styles.clickableBox}>
        <View style={styles.greenBox}>
          <View style={styles.whiteBox}>
            <Text style={styles.bigText}>500 MB</Text>
            <Text style={styles.included}>included</Text>
            <View style={styles.flexRow}>
              <Text style={styles.leftText}>Anytime Megabytes</Text>
              <Text style={styles.rightText}>25 MG</Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.leftText}>Night Megabytes</Text>
              <Text style={styles.rightText}>25 MG</Text>
            </View>
          </View>
          <Text style={styles.price}>R25</Text>
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

export default DataTopupSelected;
