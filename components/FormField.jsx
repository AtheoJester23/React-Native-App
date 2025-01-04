import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
  const [showPassword, setShowPassword] = useState(false)
  const [isFocused, setIsFocused] = useState(false);


  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-gray-100 text-base font-pmedium" >{title}</Text>

      <View className={`w-full border-2 h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row ${ isFocused ? "border-secondary" : "border-black-200" }`}>
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
          onFocus={()=>{
            setIsFocused(true);
          }}
          onBlur={()=>{
            setIsFocused(false);
          }}
        />

        {title === 'Password' && (
          <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
            <Image source={!showPassword ? icons.eye : icons.eyeHide} className="w-7 h-7"
              resizeMode='contain'
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField