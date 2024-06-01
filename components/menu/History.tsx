import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import { COLORS } from '@/constants';
import styles from './history.style';

const History = () => {
  const navigation = useNavigation(); 
  const [showDetails1, setShowDetails1] = useState(false);
  const [buttonText1, setButtonText1] = useState("View Details");
  const [showDetails2, setShowDetails2] = useState(false);
  const [buttonText2, setButtonText2] = useState("View Details");

  const toggleDetails1 = () => {
    setShowDetails1(!showDetails1);
    setButtonText1(showDetails1 ? "View Details" : "View Less");
  };

  const toggleDetails2 = () => {
    setShowDetails2(!showDetails2);
    setButtonText2(showDetails2 ? "View Details" : "View Less");
  };

  return (
    <View style={styles.container}>
      {/* Back Icon */}
      <View style={styles.BackBtnContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="angle-left" size={24} style={styles.icon} />
        </TouchableOpacity > 
        <Text style={styles.headText}>Purchase History</Text>
      </View>

      {/* History Heading */}
      <Text style={styles.mediumText}>Purchase history</Text>

      {/* First Box Container */}
      <View style={styles.boxContainer}>
        {/* Purchase Headings Container */}
        <View style={styles.purchaseHeadingsContainer}>
          {/* Left Purchase Heading */}
          <Text style={[styles.boldText, styles.leftPurchaseHeading]}>Data</Text>
          {/* Right Purchase Heading */}
          <Text style={[styles.boldText, styles.rightPurchaseHeading]}>1 GB</Text>
        </View>

        {/* Bundle Details Title */}
        {showDetails1 && <Text style={styles.bundleDetailsTitle}>Bundle details</Text>}

        {/* Container for Bundle Details */}
        {showDetails1 && (
          <View style={styles.bundleDetailsContainer}>
            {/* Left Side for Bundle Details */}
            <View style={styles.leftSide}>
              {/* Bundle Details */}
              <View>
                <Text style={styles.bundleDetailLabel}>Product type:</Text>
                <Text style={styles.bundleDetailLabel}>Price:</Text>
                <Text style={styles.bundleDetailLabel}>Date:</Text>
                <Text style={styles.bundleDetailLabel}>Order Number:</Text>
                <Text style={styles.bundleDetailLabel}>Paid with:</Text>
                <Text style={styles.bundleDetailLabel}>Order By:</Text>
                <Text style={styles.bundleDetailLabel}>Order for:</Text>
                <Text style={styles.bundleDetailLabel}>Status:</Text>
              </View>
            </View>

            {/* Right Side for Bundle Details */}
            <View style={styles.rightSide}>
              {/* Bundle Details */}
              <View>
                <Text style={styles.bundleDetailValue}>1 GB Data</Text>
                <Text style={styles.bundleDetailValue}>R37.50</Text>
                <Text style={styles.bundleDetailValue}>10/10/2023</Text>
                <Text style={styles.bundleDetailValue}>S1436790</Text>
                <Text style={styles.bundleDetailValue}>Credit card</Text>
                <Text style={styles.bundleDetailValue}>07123456789</Text>
                <Text style={styles.bundleDetailValue}>071223435465</Text>
                <Text style={styles.bundleDetailValue}>Successful</Text>
              </View>
            </View>
          </View>
        )}

        {/* Button: View Less or View Details */}
        <TouchableOpacity onPress={toggleDetails1} style={styles.viewLessContainer}>
          <Text style={styles.viewLessText}>{buttonText1}</Text>
        </TouchableOpacity>
      </View>
      
      {/* Second Box Container */}
      <View style={styles.boxContainer}>
        {/* Purchase Headings Container */}
        <View style={styles.purchaseHeadingsContainer}>
          {/* Left Purchase Heading */}
          <Text style={[styles.boldText, styles.leftPurchaseHeading]}>Airtime</Text>
          {/* Right Purchase Heading */}
          <Text style={[styles.boldText, styles.rightPurchaseHeading]}>R50.00</Text>
        </View>

        {/* Bundle Details Title */}
        {showDetails2 && <Text style={styles.bundleDetailsTitle}>Bundle details</Text>}

        {/* Container for Bundle Details */}
        {showDetails2 && (
          <View style={styles.bundleDetailsContainer}>
            {/* Left Side for Bundle Details */}
            <View style={styles.leftSide}>
              {/* Bundle Details */}
              <View>
                <Text style={styles.bundleDetailLabel}>Product type:</Text>
                <Text style={styles.bundleDetailLabel}>Price:</Text>
                <Text style={styles.bundleDetailLabel}>Date:</Text>
                <Text style={styles.bundleDetailLabel}>Order Number:</Text>
                <Text style={styles.bundleDetailLabel}>Paid with:</Text>
                <Text style={styles.bundleDetailLabel}>Order By:</Text>
                <Text style={styles.bundleDetailLabel}>Order for:</Text>
                <Text style={styles.bundleDetailLabel}>Status:</Text>
              </View>
            </View>

            {/* Right Side for Bundle Details */}
            <View style={styles.rightSide}>
              {/* Bundle Details */}
              <View>
                <Text style={styles.bundleDetailValue}>Airtime R50.00 </Text>
                <Text style={styles.bundleDetailValue}>R50.00</Text>
                <Text style={styles.bundleDetailValue}>10/10/2023</Text>
                <Text style={styles.bundleDetailValue}>S1436790</Text>
                <Text style={styles.bundleDetailValue}>Credit card</Text>
                <Text style={styles.bundleDetailValue}>07123456789</Text>
                <Text style={styles.bundleDetailValue}>071223435465</Text>
                <Text style={styles.bundleDetailValue}>Successful</Text>
              </View>
            </View>
          </View>
        )}

        {/* Button: View Less or View Details */}
        <TouchableOpacity onPress={toggleDetails2} style={styles.viewLessContainer}>
          <Text style={styles.viewLessText}>{buttonText2}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default History;
