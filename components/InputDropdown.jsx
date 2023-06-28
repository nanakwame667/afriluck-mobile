import React, { useState } from "react";
import { Button, Menu, Provider } from "react-native-paper";

const InputDropdown = ({ label, options, onOptionSelected, id, error }) => {
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(label);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const handleOptionSelected = (option) => {
    setSelectedOption(option.label);
    onOptionSelected(option.value);
    closeMenu();
  };

  const errorStyle = error ? { borderColor: "red", borderWidth: 1 } : null;

  return (
    <Provider>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button onPress={openMenu} style={errorStyle}>
            {selectedOption}
          </Button>
        }
      >
        {options.map((option, index) => (
          <Menu.Item
            key={index}
            onPress={() => handleOptionSelected(option)}
            title={option.label}
          />
        ))}
      </Menu>
    </Provider>
  );
};

export default InputDropdown;
