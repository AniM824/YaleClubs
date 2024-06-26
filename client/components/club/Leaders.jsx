import axios from 'axios';
import { useEffect, useState } from 'react';
import { NativeWindStyleSheet } from 'nativewind';
import { FlatList, Image, Text, View } from 'react-native';
import EmptySVG from '../../assets/empty';
import {API_KEY} from "../../api/yalies";

const Leaders = ({ leaders }) => {
  const [leaderData, setLeaderData] = useState([]);
  NativeWindStyleSheet.setOutput({
    default: 'native',
  });

  useEffect(() => {
    const fetchLeaderData = async () => {
      const fetchedData = [];

      for (const leader of leaders) {
        console.log(leader);
        try {
          const response = await axios.post(
            'https://yalies.io/api/people',
            { query: leader },
            {
              headers: {
                  Authorization: `Bearer ${API_KEY}`, // Assuming you have the API key stored in your environment variable
              },
            }
          );
          const userData = response.data[0];
          if (userData) {
            fetchedData.push({
              id: userData.netid,
              email: userData.email,
              image: userData.image || null,
            });
          }
        } catch (error) {
          console.error('Error fetching leader data:', error);
        }
      }

      setLeaderData(fetchedData);
    };

    fetchLeaderData();
  }, [leaders]);

  const displayLeader = (leader) => {
    return (
      <View className="mr-2 px-3 py-2 border-[1px] bg-white border-gray-100 rounded-md flex-row">
        <View className="bg-gray-100 h-10 w-10 mr-3 items-center justify-center rounded-md">
          {leader?.image ? (
            <Image className="h-full w-full rounded-md" source={{ uri: leader?.image }} />
          ) : (
            <EmptySVG />
          )}
        </View>
        <View className="flex-col justify-center">
          <Text className="text-[15px] font-semibold">{leader?.id}</Text>
          <Text>{leader?.email}</Text>
        </View>
      </View>
    );
  };

  return (
    <View className="mt-8">
      <Text className="font-bold text-2xl mb-3">Leaders</Text>
      <FlatList
        data={leaderData}
        horizontal={true}
        scrollEnabled={true}
        renderItem={({ item }) => displayLeader(item)}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Leaders;
