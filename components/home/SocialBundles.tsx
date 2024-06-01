import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput  } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import styles from '@/components/home/socialbundles.style';
import { COLORS, FONT, SIZES } from "@/constants";

const SocialBundles = () => {
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

      <View style={styles.bundlesTypeContainer}>
         <Text style={styles.bundlesType}>Weekly {'  '}</Text>
         <Text style={styles.allBundles}>All bundles (6)</Text>
      </View>
      

      {/* Clickable Box */}
      <TouchableOpacity onPress={() => navigation.navigate('SocialSelectedScreen')}  
         style={styles.clickableBox}>
        <View style={styles.greenBox}>
          <View style={styles.whiteBox}>
            <Text style={styles.type}>Weekly</Text>
            <Text style={styles.bigText}>500 MB</Text>
          </View>
          <Text style={styles.price}>R37,50</Text>
        </View>
      </TouchableOpacity>

      {/* Clickable Box */}
      <TouchableOpacity onPress={() => navigation.navigate('')}  
         style={styles.clickableBox}>
        <View style={styles.greenBox}>
          <View style={styles.whiteBox}>
            <Text style={styles.type}>Weekly</Text>
            <Text style={styles.bigText}>2 GB</Text>
          </View>
          <Text style={styles.price}>R70</Text>
        </View>
      </TouchableOpacity>

      {/* Clickable Box */}
      <TouchableOpacity onPress={() => navigation.navigate('')}  
         style={styles.clickableBox}>
        <View style={styles.greenBox}>
          <View style={styles.whiteBox}>
            <Text style={styles.type}>Weekly</Text>
            <Text style={styles.bigText}>3 GB</Text>
          </View>
          <Text style={styles.price}>R90</Text>
        </View>
      </TouchableOpacity>
      
      <View style={styles.bundlesTypeContainer}>
         <Text style={styles.bundlesType}>Monthly {'  '}</Text>
         <Text style={styles.allBundles}>All bundles (4)</Text>
      </View>

      

      {/* Clickable Box */}
      <TouchableOpacity onPress={() => navigation.navigate('')}  
         style={styles.clickableBox}>
        <View style={styles.greenBox}>
          <View style={styles.whiteBox}>
            <Text style={styles.type}>Monthly</Text>
            <Text style={styles.bigText}>500 MB</Text>
          </View>
          <Text style={styles.price}>R90</Text>
        </View>
      </TouchableOpacity>
      
      
    </View>
  );
};

export default SocialBundles;
