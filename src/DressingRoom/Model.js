import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useSelector } from 'react-redux';

export default function Model() {
    const { selectedClothes } = useSelector((state) => state.DressingRoomReducer);
    const springs = useSpring({
        from: { scale: 1, opacity: 0.4 },
        to: { scale: 0.5, opacity: 1 },
        config: { duration: 500 },
        reset: true
    });
    const spring = useSpring({
        from: { scale: 1, opacity: 0.4 },
        to: { scale: 0.15, opacity: 1 },
        config: { duration: 500 },
        reset: true
    });
    const renderModel = () => {
        return selectedClothes.map((item)=> {
            if(item.type==='hairstyle'){
                return <animated.div
                key={item.id}
                className={item.type}
                style={{
                    backgroundImage: `url(${item.imgSrc_png})`,
                    transform: spring.scale.to((s) => `scale(${s})`),
                    opacity: spring.opacity,
                }}
            />
            }
            else {
                return <animated.div
                key={item.id}
                className={item.type}
                style={{
                    backgroundImage: `url(${item.imgSrc_png})`,
                    transform: springs.scale.to((s) => `scale(${s})`),
                    opacity: springs.opacity,
                }}
            />
            }
        }) 
    };


    return (
        <div className="contain">
            <div className="body" />
            <div className="model" />

            <div>{renderModel()}</div>
        </div>
    );
}

