import { useState } from 'react';
import { 
  Flex, 
  Image, 
  Text, 
  InputGroup, 
  Input, 
  InputRightElement,
  FormControl,
  FormErrorMessage 
} from '@chakra-ui/react'
import { ChevronRightIcon, WarningIcon } from '@chakra-ui/icons'
import { Logo, MyHeading } from './components';

function App() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const checkInput = () => {
    if(email.length && String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )) {
      setError(false)
    } else {
      setError(true)
    }
  }
 
  return (
    <Flex 
      bgImage={{ xl: '/images/bg-pattern-desktop.svg' }} 
      flexDirection={{base: 'column', xl: 'row-reverse'}}
      justifyContent={{base: 'space-between'}}
      alignItems='center'
      h='100vh'
      gap={{ base: '8', xl: '20' }}
      py={{base: '40px', xl: '0px'}}
    >
      <Logo display={{xl: 'none'}}/>
      <picture>
        <source media='(min-width: 1280px)' srcSet='/images/hero-desktop.jpg' />
        <Image 
          src='/images/hero-mobile.jpg' 
          alt='a woman in an orange shirt'
          h={{xl: '100vh'}} 
          w={{ base: '100vw', xl: 'auto'}} 
          alignSelf='self-end'
        />
      </picture>
      <Flex 
        flexDirection='column'
        justifyContent='space-between'
        alignItems='flex-start'
        h={{xl: '100vh'}}
        py={{xl: '40px'}}
        pl='200px'
        maxW={{xl: '45%' }}
        gap={{ base:'8', xl: '4' }}
      >
        <Logo display={{ base: 'none', xl: 'flex' }} />
        <Flex 
          flexDirection='column'
          textAlign={{base: 'center', xl: 'left'}}
        >
          <MyHeading 
            sx={{ fontWeight: '300', letterSpacing: '0.1em', color: 'hsl(0, 36%, 70%)' }}
          >
            We're
          </MyHeading>
          <MyHeading
            sx={{ fontWeight: '500', letterSpacing: '0.2em' }}
          >
            coming
          </MyHeading>
          <MyHeading
            sx={{ fontWeight: '500', letterSpacing: '0.2em' }}
          >
            soon
          </MyHeading>
        </Flex>
        <Text
          fontSize='16px'
          sx={{ color: 'hsl(0, 36%, 70%)', textAlign: 'center' }}
        >
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our launch deals.
        </Text>
        <FormControl isInvalid={error}>
          <InputGroup
            size='lg'
            sx={{ color: 'hsl(0, 36%, 70%)', borderColor: 'hsl(0, 36%, 70%)' }}
            paddingBottom={error ? 'initial' : '14px'}
          >
            <Input 
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size='lg'
              borderRadius='5em'
              placeholder='Email Address' 
              _placeholder={{ color: 'hsl(0, 36%, 70%)' }}
              data-testid='input'
            />
            <InputRightElement w='100px'>
              {error && <WarningIcon 
                position='absolute' 
                color='red'
                right='120px' 
              />}
              <Flex
                bg='linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))'
                borderRadius='5em'
                w='100%'
                h='100%'
                alignItems='center'
                justifyContent='center'
                _hover={{
                  bg: 'hsl(0, 86%, 86%)',
                  boxShadow: '-10px 10px 10px'
                }}
              >
                <ChevronRightIcon 
                  color='white'
                  boxSize='2em'
                  onClick={() => checkInput()}
                  data-testid='button'
                />
              </Flex>
            </InputRightElement>
          </InputGroup>
            <FormErrorMessage data-testid='error-message'>Please provide a valid email</FormErrorMessage>
        </FormControl>
      </Flex>
    </Flex>
  );
}

export default App;
