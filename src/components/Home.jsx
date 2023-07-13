import {
  Box,
  Container,
  Heading,
  Img,
  Stack,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assests/1.jpg';
import img2 from '../assests/2.jpg';
import img3 from '../assests/3.jpg';
import img4 from '../assests/4.jpg';
import img5 from '../assests/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'solid 2px'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignContent={'center'}
          direction={['column', 'row']}
        >
          <Img src={img5} h={[60, 400]} filter={'hue-rotate(-130ddeg)'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis veniam
            cumque praesentium? Dolor eligendi, illum soluta veritatis facere
            est cupiditate et obcaecati ullam qui magnam vel non sapiente
            libero, maxime saepe accusantium, itaque doloribus voluptas beatae
            odit voluptatem ducimus tempora expedita. Aliquid, fugiat? Vel esse
            deserunt itaque quaerat nesciunt labore, veritatis in nisi a atque,
            minus illo ipsam cupiditate pariatur. Esse doloribus omnis officia
            alias expedita odit ullam tempore dolorum ad non impedit maiores ea
            optio accusamus quidem velit obcaecati tenetur, laborum facilis
            voluptatibus! Commodi esse iure dolor! Doloremque eaque pariatur
            tempora, soluta id nobis ullam ratione labore ipsum voluptates.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showArrows={false}
    showThumbs={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Img src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch the future
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Img src={img2} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Future is gaming
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Img src={img3} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Gaming on console
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Img src={img4} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Night life is cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
