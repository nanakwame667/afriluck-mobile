import React, { useState } from "react";
import { Button, Menu, Provider } from "react-native-paper";

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  label: string;
  options: Option[];
  onOptionSelected: (option: string) => void;
  id: string;
  error?: boolean;
}

const InputDropdown: React.FC<DropdownProps> = ({
  label,
  options,
  onOptionSelected,
  id,
  error,
}) => {
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(label);

  const openMenu = (): void => setVisible(true);

  const closeMenu = (): void => setVisible(false);

  const handleOptionSelected = (option: Option): void => {
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
