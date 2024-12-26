import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'


const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="w-16 h-16 flex items-center justify-center gap-2" style={{flexDirection: 'column'}}>
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`text-xs mt-1 ${focused ? 'font-psemibold' : 'font-pregular'}`} style={{fontSize: 9, color: color}}>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#FFA001',
                tabBarInactiveTintColor: '#CDCDE0',
                tabBarStyle:{
                    backgroundColor: '#161622',
                    borderTopWidth: 1,
                    borderTopColor: '#232533',
                    height: 120,
                    paddingTop: 20, // Adds space below icons for centering
                }
            }}
        >
            <Tabs.Screen
                name='home'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={require('../../assets/icons/home.png')}
                            color={color}
                            name="Home"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='create'
                options={{
                    title: 'Create',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.plus}
                            color={color}
                            name="Create"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='bookmark'
                options={{
                    title: 'Bookmark',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.bookmark}
                            color={color}
                            name="Bookmark"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.profile}
                            color={color}
                            name="Profile"
                            focused={focused}
                        />
                    )
                }}
            />
        </Tabs>
    </>
  )
}

export default TabsLayout