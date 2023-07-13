import {
  Box,
  Button,
  Heading,
  HStack,
  VStack,
  Stack,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack
          alignItems={'stretch'}
          w={'full'}
          px={'4'}
          paddingTop={['4', 'none']}
          paddingBottom={['4', 'none']}
        >
          <Heading size="md" textTransform={'uppercase'} textAlign={'center'}>
            Subscribe to get more Updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email Here...."
              borderRadius="none"
              border="none"
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
          paddingTop={['4', 'none']}
          paddingBottom={['4', 'none']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            {' '}
            Video Hub
          </Heading>
          <Text>All rights reserved.</Text>
        </VStack>

        <VStack
          w={'full'}
          paddingTop={['4', 'none']}
          paddingBottom={['4', 'none']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme="white">
            <a target="blank" href="https://youtube.com/@subhradeepsamantray">
              Youtube
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a target="blank" href="https://instagram.com/@subhradeepsamantray">
              Instagram
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a target="blank" href="https://twitter.com/@subhradeepsamantray">
              Twitter
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
