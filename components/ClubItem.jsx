import { NativeWindStyleSheet } from 'nativewind';

NativeWindStyleSheet.setOutput({
    default: "native",
});

import { useState } from 'react';
import { FlatList, Image, Pressable, Text, View} from 'react-native';
import { useRouter } from 'expo-router';


const ClubItem = ({ item }) => {
    const [saved, setSaved] = useState(false);
    const navigation = useRouter();
    let categories = [];


    if (item.category !== null) {
        categories = item.category.split(/[\/,]/).slice(0, 2).map((category, index) => ({
            id: index,
            name: category.trim(),
        }));
    }

    if (categories.length === 0) {
        categories = [{ id: 0, name: "All Categories" }];
    }
    
    return (
        // In Progress
        <Pressable key={item.id} className="relative" onPress={() => navigation.push(`/club/${item.id}`)}>
            <View className="rounded-md shadow-sm w-full p-5 py-6 flex-row bg-white">
                <View className='w-full flex-col flex-shrink overflow-hidden'>
                    <Text numberOfLines={2} className="font-bold text-[24px] mt-2 w-[80%]">{item.name}</Text>
                    <FlatList
                        className="flex-row"
                        data={categories}
                        keyExtractor={(category) => category.id.toString()}
                        renderItem={({ item: category }) => (
                            <View className="bg-gray-100 mt-3 mr-2 py-1 px-2 rounded-md" key={category.id}>
                                <Text>{category.name}</Text>
                            </View>
                        )}
                    />

                    { item.mission && (
                        <Text numberOfLines={7} className="pr-4 mt-3 leading-[20px]">{item.mission}</Text>
                    )}

                    { item.website && (
                        <Text numberOfLines={1} className="mt-4 text-sky-500">{item.website}</Text>
                    )}
    
                </View>
                <View className='relative flex-col items-end'>
                    <Image source={{uri: item.logo}} className="h-20 w-20 rounded-full"/>
                </View>
            </View>
        </Pressable>
    );
}

export default ClubItem;