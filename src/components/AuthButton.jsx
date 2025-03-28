import { Button, Link, useDisclosure } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import AuthModal from './AuthModal';

const AuthButton = () => {
  const { isOpen, onClose } = useDisclosure();
  const location = useLocation();
  const isActive = location.pathname === '/signin';

  return (
    <>
      <Link 
        as={RouterLink} 
        to="/signin" 
        variant="underline" 
        color={isActive ? '#4CAF50' : 'black'}
        fontFamily="Neue Machina"
        fontWeight="medium"
      >
        Вхід
      </Link>
      <AuthModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default AuthButton; 