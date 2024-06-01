import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONT, SIZES } from "@/constants";
import styles from './sim.style';

const Sim = () => {
  const navigation = useNavigation();

  {/* Modal 
   const [isModalVisible, setIsModalVisible] = useState(false);

   const toggleModal = () => {
     setIsModalVisible(!isModalVisible);
   };*/}

  return (
    <View style={styles.container}>
      {/* Back Icon */}
      <View style={styles.BackBtnContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="angle-left" size={24} style={styles.icon} />
        </TouchableOpacity >
        <Text style={styles.headingText}>Self Rica</Text>
      </View>

      
      <View style={styles.whiteBox}>
         <View style={styles.headingContainer}>
            <Text style={styles.heading}>To Self RICA</Text>
            <Text style={styles.heading}>you will need:</Text>
         </View>
         <View style={styles.textContainer}>
            <Text style={styles.text}>The SIM number on your SIM card.</Text>
            <Text style={styles.text}>A cellphone with a camera.</Text>
            <Text style={styles.text}>A valid SA ID or international passport.</Text>
            <Text style={styles.text}>A residential address in South Africa.</Text>
         </View>
        
        <TouchableOpacity onPress={() => navigation.navigate('GetStartedScreen')} 
            style={styles.buttonContainer}>
          <Text style={styles.buttonText}>get started</Text>
        </TouchableOpacity>
      </View>

      {/* White Box */}
      <View style={styles.whiteBox}>
         <View style={styles.headingContainer}>
            <Text style={styles.heading}>Please Note:</Text>
         </View>
         <View style={styles.textContainer}>
            <Text style={styles.text}>The self RICA process will take 10-15 minutes. RICA activation might take up to 24 hours</Text>
         </View>
      </View>

      {/* Modal 
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeIconContainer} onPress={toggleModal}>
            <FontAwesome5 name="times" size={30} style={styles.closeIcon} />
          </TouchableOpacity>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>First, find your SIM number.</Text>
            <Text style={styles.modalText}>Look for a row of 10 numbers on your SIM </Text>
            <Text style={styles.modalText}>Package or on the physical SIM card.</Text>
            <TouchableOpacity style={styles.modalButtonContainer}>
              <Text style={styles.modalButtonText}>I have my SIM number</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>*/}


    </View>
  );
};

export default Sim;
