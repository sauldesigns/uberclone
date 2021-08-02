import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useDispatch} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {setDestination, setOrigin} from '../slices/navSlice';
import {GOOGLE_MAPS_APIKEY} from '@env';
import {useNavigation} from '@react-navigation/core';
const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Good Morning, Saul</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <GooglePlacesAutocomplete
                    styles={toInputBoxStyles}
                    onPress={(data, details = null) => {
                        if (!details) {
                            dispatch(setDestination(null));
                        } else {
                            dispatch(
                                setDestination({
                                    location: details.geometry.location,
                                    description: data.description,
                                }),
                            );
                        }

                        navigation.navigate('RideOptionsCard');
                    }}
                    returnKeyType={'search'}
                    fetchDetails={true}
                    query={{key: GOOGLE_MAPS_APIKEY, language: 'en'}}
                    minLength={2}
                    enablePoweredByContainer={false}
                    placeholder="Where To?"
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={800}
                />
            </View>
        </SafeAreaView>
    );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: '#DDDDDF',
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});
