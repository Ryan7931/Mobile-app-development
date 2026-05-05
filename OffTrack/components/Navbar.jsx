import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Navbar({ active }) {
    return(
        <View style={Styles.container}>
            <TouchableOpacity onPress={() => router.push('/home')}>
                <Ionicons name="home-outline" size={24} color="#000" />
            </TouchableOpacity>

            <TouchableOpacity>
                <Ionicons name="search-outline" size={24} color="#000" />
            </TouchableOpacity>

            <TouchableOpacity>
                <Ionicons name="add-outline" size={24} color="#000" />
            </TouchableOpacity>

            <TouchableOpacity>
                <Ionicons name="notifications-outline" size={24} color="#000" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/profile')}>
                <Ionicons name="person-outline" size={24} color="#000" />
            </TouchableOpacity>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 12,
        borderTopWidth: 1,
        borderColor: '#eee',
    }
})