import {
  Container,
  Heading,
  VStack,
  Input,
  Button,
  Text,
  Avatar,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>VIDEO HUB</Heading>
          <Avatar alignSelf={'center'} boxsize={'32'}></Avatar>
          <Input
            placeholder={'Name'}
            type={'Name'}
            required
            focusColorBorder={'purple.500'}
          ></Input>
          <Input
            placeholder={'Email'}
            type={'email'}
            required
            focusColorBorder={'purple.500'}
          ></Input>
          <Input
            placeholder={'password'}
            type={'password'}
            required
            focusColorBorder={'purple.500'}
          ></Input>
          <Button colorScheme="purple" type="submit">
            Sign Up
          </Button>
          <Text textAlign="right">
            Already User?{' '}
            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to={'/login'}>Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
