
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const EmptySVG = ({h = 25, w = 22}) => {
    return (
        <Svg width={`${w}`} height={`${h}`} viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M0.537407 6.47932L8.28098 0.287195C8.51406 0.100814 8.79802 0 9.08992 0H23.6536C24.9077 0 25.4782 1.66084 24.5179 2.51646L17.5686 8.70858C17.3265 8.92429 17.0204 9.04255 16.7042 9.04255H1.34635C0.0567108 9.04255 -0.492357 7.30277 0.537407 6.47932Z" fill="white"/>
            <Path d="M0.537407 12.7115L8.28098 6.15516C8.51406 5.95782 8.79802 5.85107 9.08992 5.85107H23.6536C24.9077 5.85107 25.4782 7.60961 24.5179 8.51556L17.5686 15.0719C17.3265 15.3003 17.0204 15.4255 16.7042 15.4255H1.34635C0.0567108 15.4255 -0.492357 13.5834 0.537407 12.7115Z" fill="white"/>
            <Path d="M0.537407 18.7134L8.28098 12.5213C8.51406 12.3349 8.79802 12.2341 9.08992 12.2341H23.6536C24.9077 12.2341 25.4782 13.8949 24.5179 14.7505L17.5686 20.9426C17.3265 21.1584 17.0204 21.2766 16.7042 21.2766H1.34635C0.0567108 21.2766 -0.492357 19.5368 0.537407 18.7134Z" fill="white"/>
        </Svg>
    );
}

export default EmptySVG;
