import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const MapRender = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.calloutText}>teste 1</Text>
      <Text style={styles.calloutSmallText}>teste 2</Text>
    </View>
  );
}

export default MapRender;