import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput  } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import styles from '@/components/home/voicetopup.style';
import { COLORS, FONT, SIZES } from "@/constants";

const VoiceTopUp = () => {
  const navigation = useNavigation(); 
  const [selectedOption, setSelectedOption] = useState('myNumber');

  return (
    <View style={styles.container}>
      {/* Back Icon */}
      <View style={styles.BackBtnContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="angle-left" size={24} style={styles.icon} />
        </TouchableOpacity > 
        <Text style={styles.headingText}>Voice Bundles</Text>
      </View>

      <Text style={styles.allBundles}>All bundles (3)</Text>

      {/* Clickable Box */}
      <TouchableOpacity onPress={() => navigation.navigate('VoiceSelectedScreen')}  
         style={styles.clickableBox}>
        <View style={styles.greenBox}>
          <View style={styles.whiteBox}>
            <Text style={styles.bigText}>40 min</Text>
          </View>
          <Text style={styles.price}>R22,50</Text>
        </View>
      </TouchableOpacity>
      
      {/* Clickable Box */}
      <TouchableOpacity style={styles.clickableBox}>
        <View style={styles.greenBox}>
          <View style={styles.whiteBox}>
            <Text style={styles.bigText}>1.2 GB</Text>
          </View>
          <Text style={styles.price}>R40</Text>
        </View>
      </TouchableOpacity>
      
      {/* Clickable Box */}
      <TouchableOpacity style={styles.clickableBox}>
        <View style={styles.greenBox}>
          <View style={styles.whiteBox}>
            <Text style={styles.bigText}>160 min</Text>
          </View>
          <Text style={styles.price}>R80</Text>
        </View>
      </TouchableOpacity>
      
    </View>
  );
};

export default VoiceTopUp;
