
import { NativeWindStyleSheet } from "nativewind";
import { View, TextInput, Text } from "react-native";

import { useEffect, useState } from "react";

const SearchBar = ({onChange, searchValue, found}) => {
    const [timeElapsed, setTimeElapsed] = useState('');

    // Native Wind
    NativeWindStyleSheet.setOutput({
        default: "native",
    });    

    return (
        <View className="flex-row justify-between items-start">

            <View className="
                flex-row 
                items-start
                w-full
                ph:flex-col 
                md:flex-row">
                
                <View
                    className="
                    shadow-sm
                    inline-flex 
                    ph:w-full 
                    sm:w-[480]
                    rounded-md 
                    py-[10] px-5
                    bg-white
                    mt-5
                    ph:mb-0
                    md:mb-10"
                >
                    <TextInput
                        onChangeText={onChange}
                        value={searchValue}
                        className="text-black ph:w-full md:w-auto"
                        style={{outline: 'none'}}
                        placeholder="Cleverer than Levenshtein Distance..."
                        placeholderTextColor="gray"
                    />
                </View>

                <View className="ph:mt-4 ph:mb-4 md:mb-0 md:mt-10 ph:flex-row md:flex-col">
                    <Text className="ph:ml-0 md:ml-6 text-gray-400">Showing {found} results</Text>
                </View>

            </View>
        </View>
    );

}

export default SearchBar;