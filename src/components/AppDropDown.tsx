import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native'
import { colors } from '../constant/color'
import { AppInput } from './AppInput'
import { ErrorMsg } from './ErrorMsg'
import { DropDownIcon } from '../asset/icons/icons'
import { h } from '../constant/dimension'

type Props = {
  label: string
  value: string
  options: string[]
  placeholder?: string
  onSelect: (val: string) => void
  error?: string
}

export const AppDropdown = ({
  label,
  value,
  options,
  placeholder,
  onSelect,
  error,
}: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <View>
      <TouchableOpacity activeOpacity={0.8} onPress={() => setOpen(!open)}>
        <AppInput
          label={label}
          placeholder={placeholder}
          value={value}
          editable={false}
          isBorder={false}
          backgroundColor={colors.lightGrey}
          rightIcon={<View style={styles.arrow}><DropDownIcon/></View>}
        />
      </TouchableOpacity>

      {open && (
        <View style={styles.dropdown}>
          <FlatList
            data={options}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => {
                  onSelect(item)
                  setOpen(false)
                }}>
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      {error ? <ErrorMsg msg={error} /> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: colors.white,
    borderRadius: 8,
    marginTop: 5,
    borderWidth: 1,
    borderColor: colors.borderColor,
    overflow: 'hidden',
  },
  option: {
    padding: 8,
    // borderBottomWidth: 0.9,
    borderColor: colors.borderColor,
  },
  optionText: {
    color: colors.textColor,
  },
  arrow: {
    fontSize: 16,
    color: colors.Grey,
    paddingRight: 6,
    marginTop:h(1)
  },
})
