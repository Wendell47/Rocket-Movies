
import { Container } from './styles';
import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';


// eslint-disable-next-line react/prop-types
export function MenuMobile({ menuIsVisible, setMenuIsVisible, children,...rest }) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    <Container isVisible={menuIsVisible}>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)}
      {...rest}

      />
    {children}
    </Container>
  )
}