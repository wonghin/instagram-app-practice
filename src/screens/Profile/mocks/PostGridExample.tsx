import { Badge, Box, Divider, HStack, Pressable, Spacer, VStack, Text, Flex } from 'native-base'
import React, { useEffect } from 'react'
import { useNumberOfPostStore } from '../../../hooks/useNumberofPostStore'
import { postStyle, windowWidth } from '../../../styles/constants'

interface Props {
    numOfCol: number
}

const ImageExample = (props: Props) => {
    return (
        <>
            {
                props.numOfCol === 3
                &&
                <HStack space={postStyle.postGap} w={windowWidth}>
                    <Divider orientation="vertical" bg={'white'} w={0.1} />
                    <Pressable>
                        {/* pass the isPressed to <Box> */}
                        {({ isPressed }) => {
                            return <Box h={postStyle.imageBlockSize} w={postStyle.imageBlockSize} bg={isPressed ? 'red.500' : postStyle.imageColor}></Box>
                        }}
                    </Pressable>
                    <Pressable>
                        {/* pass the isPressed to <Box> */}
                        {({ isPressed }) => {
                            return <Box h={postStyle.imageBlockSize} w={postStyle.imageBlockSize} bg={isPressed ? 'red.500' : postStyle.imageColor}></Box>
                        }}
                    </Pressable>
                    <Pressable>
                        {/* pass the isPressed to <Box> */}
                        {({ isPressed }) => {
                            return <Box h={postStyle.imageBlockSize} w={postStyle.imageBlockSize} bg={isPressed ? 'red.500' : postStyle.imageColor}></Box>
                        }}
                    </Pressable>



                </HStack>
            }
            {

                props.numOfCol === 2
                &&
                <HStack space={postStyle.postGap}>
                    <Divider orientation="vertical" bg={'white'} />
                    <Pressable>
                        {/* pass the isPressed to <Box> */}
                        {({ isPressed }) => {
                            return <Box h={postStyle.imageBlockSize * 3 / 2} w={postStyle.imageBlockSize * 3 / 2} bg={isPressed ? 'red.500' : postStyle.imageColor}></Box>
                        }}
                    </Pressable>
                    <Box h={postStyle.imageBlockSize * 3 / 2} w={postStyle.imageBlockSize * 3 / 2} bg={postStyle.imageColor}></Box>
                </HStack>
            }

            {

                props.numOfCol === 1
                &&
                <HStack space={postStyle.postGap}>
                    <Divider orientation="vertical" bg={'white'} />
                    <Pressable>
                        {/* pass the isPressed to <Box> */}
                        {({ isPressed }) => {
                            return <Box h={postStyle.imageBlockSize * 3} w={postStyle.imageBlockSize * 3} bg={isPressed ? 'red.500' : postStyle.imageColor}></Box>
                        }}
                    </Pressable>
                </HStack>
            }

        </>

    )
}

function Example() {
    return <Box alignItems="center">
        <Pressable maxW="96">
            {({
                isHovered,
                isFocused,
                isPressed
            }) => {
                return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"}
                    style={{
                        transform: [{
                            scale: isPressed ? 0.96 : 1
                        }]
                    }}
                    p="5" rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300">
                    <HStack alignItems="center">
                        <Badge colorScheme="darkBlue" _text={{
                            color: "white"
                        }} variant="solid" rounded="4">
                            Business
                        </Badge>
                        <Spacer />
                        <Text fontSize={10} color="coolGray.800">
                            1 month ago
                        </Text>
                    </HStack>
                    <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                        Marketing License
                    </Text>
                    <Text mt="2" fontSize="sm" color="coolGray.700">
                        Unlock powerfull time-saving tools for creating email delivery
                        and collecting marketing data
                    </Text>
                    <Flex>
                        {isFocused ? <Text mt="2" fontSize={12} fontWeight="medium" textDecorationLine="underline" color="darkBlue.600" alignSelf="flex-start">
                            Read More
                        </Text> : <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                            Read More
                        </Text>}
                    </Flex>
                </Box>;
            }}
        </Pressable>
    </Box>;
}


export const PostGridExample = (props: Props) => {
    const updateHeight = useNumberOfPostStore(state => state.updateHeight)

    const number = 10

    useEffect(() => {
        updateHeight(number * props.numOfCol, props.numOfCol)

    }, [])

    return (
        <VStack space={postStyle.postGap}>
            {Array.from(Array(number)).map((_, index) => {
                return (
                    <ImageExample key={index} numOfCol={props.numOfCol} />
                )
            })}
        </VStack>
    )
}
