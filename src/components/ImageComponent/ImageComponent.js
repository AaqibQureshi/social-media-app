import React from 'react';
import FastImage from "react-native-fast-image";
import {Image} from "react-native";

const ImageComponent = ({
                            resizeMode = 'contain',
                            source,
                            style,
                            tintColor,
                            ...rest
                        }) => {
    return (
        <Image
            {...rest}
            source={source}
            resizeMode={resizeMode}
            style={style}
            tintColor={tintColor || style?.tintColor}
        />
    );
};


export default ImageComponent;