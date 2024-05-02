import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput  } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import styles from '@/components/home/datatopup.style';
import { COLORS, FONT, SIZES } from "@/constants";

const DataTopUp = () => {
  const navigation = useNavigation(); 
  const [selectedOption, setSelectedOption] = useState('myNumber');

  return (
    <View style={styles.container}>
      {/* Back Icon */}
      <View style={styles.BackBtnContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="angle-left" size={24} style={styles.icon} />
        </TouchableOpacity > 
        <Text style={styles.headingText}>Data Bundles</Text>
      </View>

      <Text style={styles.allBundles}>All bundles (6)</Text>

      {/* Clickable Box */}
      <TouchableOpacity onPress={() => navigation.navigate('DataSelectedScreen')}  
         style={styles.clickableBox}>
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
      
      {/* Clickable Box */}
      <TouchableOpacity style={styles.clickableBox}>
        <View style={styles.greenBox}>
          <View style={styles.whiteBox}>
            <Text style={styles.bigText}>1.2 GB</Text>
            <Text style={styles.included}>included</Text>
            <View style={styles.flexRow}>
              <Text style={styles.leftText}>Anytime Megabytes</Text>
              <Text style={styles.rightText}>600 MG</Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.leftText}>Night Megabytes</Text>
              <Text style={styles.rightText}>600 MG</Text>
            </View>
          </View>
          <Text style={styles.price}>R49</Text>
        </View>
      </TouchableOpacity>
      
      {/* Clickable Box */}
      <TouchableOpacity style={styles.clickableBox}>
        <View style={styles.greenBox}>
          <View style={styles.whiteBox}>
            <Text style={styles.bigText}>2.5 GB</Text>
            <Text style={styles.included}>included</Text>
            <View style={styles.flexRow}>
              <Text style={styles.leftText}>Anytime Megabytes</Text>
              <Text style={styles.rightText}>600 MG</Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.leftText}>Night Megabytes</Text>
              <Text style={styles.rightText}>600 MG</Text>
            </View>
          </View>
          <Text style={styles.price}>R79</Text>
        </View>
      </TouchableOpacity>
      
      {/* Clickable Box */}
      <TouchableOpacity style={styles.clickableBox}>
        <View style={styles.greenBox}>
          <View style={styles.whiteBox}>
            <Text style={styles.bigText}>5 GB</Text>
            <Text style={styles.included}>included</Text>
            <View style={styles.flexRow}>
              <Text style={styles.leftText}>Anytime Megabytes</Text>
              <Text style={styles.rightText}>600 MG</Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.leftText}>Night Megabytes</Text>
              <Text style={styles.rightText}>600 MG</Text>
            </View>
          </View>
          <Text style={styles.price}>R139</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DataTopUp;
