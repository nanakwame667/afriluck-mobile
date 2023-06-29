import React, { useState } from "react";
import colors from "../colors";

import { NotificationsData } from "../data/Notifications";

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import CustomText from "../components/CustomText";
import { AntDesign } from "@expo/vector-icons";
import CustomModal from "../components/Modal";
import Button from "../components/Button";

const Item = ({ title, time, message }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
    setCancelled(!cancelled);
  };

  const onCancel = () => {
    setCancelled(true);
    toggleModal();
  };
  return (
    <View style={styles.item}>
      <View style={styles.perItem}>
        <View style={styles.indicatorContainer}>
          <View style={styles.indicator}></View>
        </View>
        <View style={styles.itemData}>
          <View style={styles.itemText}>
            <CustomText style={styles.title} weight="semibold">
              {title}
            </CustomText>
            <CustomText style={styles.message} weight="regular">
              {message}
            </CustomText>
            <CustomText style={styles.time} weight="medium">
              {time}
            </CustomText>
          </View>
          <TouchableOpacity onPress={toggleModal}>
            <AntDesign name="delete" size={24} color={colors.icons} />
          </TouchableOpacity>
          <CustomModal
            visible={modalVisible}
            toggleModal={toggleModal}
            style={styles.modal}
            size="small"
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <TouchableOpacity style={styles.cancel} onPress={onCancel}>
                <AntDesign name="closecircle" size={30} color={colors.accent} />
              </TouchableOpacity>
            </View>
            <View style={styles.del}>
              <Image source={require("../assets/images/del.png")} />
            </View>
            <View style={styles.delete}>
              <CustomText weight="semibold" style={{ fontSize: 16 }}>
                Are you sure you want to delete?
              </CustomText>
            </View>
            <Button title="Delete" onPress={() => alert("item deleted")} />
          </CustomModal>
        </View>
      </View>
    </View>
  );
};
const NotificationsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={NotificationsData}
          renderItem={({ item }) => (
            <Item title={item.title} time={item.time} message={item.message} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  item: {
    width: "100%",
    paddingVertical: 20,
  },
  perItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    paddingVertical: 20,
    borderBottomWidth: 0.2,
    borderBottomColor: colors.space,
  },
  indicatorContainer: {
    flex: 0.1,
    alignItems: "center",
    marginRight: 2,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: colors.primary,
  },
  itemText: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
  },
  itemData: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    color: colors.message,
  },
  message: {
    fontSize: 14,
    color: colors.message,
    marginTop: 10,
  },
  time: {
    marginTop: 10,
    color: colors.subText,
  },
  modal: {
    flexDirection: "column",
  },
  del: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  cancel: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  delete: {
    flex: 1,
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
