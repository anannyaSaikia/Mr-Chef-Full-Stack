import React from 'react';
import { Box, Text, /* Flex, Spacer, ChakraProvider,extendTheme, , Icon*/ Image, Button, Container } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsCartPlusFill, BsInstagram, BsFacebook } from "react-icons/bs";
import logo from "../Signin_Signup/images/w.png";
/* import { useSelector } from 'react-redux'; */

/* import { Navigate } from 'react-router-dom'; */

const Navbar = () => {
  /* const [flag, setFlag] = useState(false); */

  const token = localStorage.getItem("token");

  /* const userName = useSelector((store) => {
    return store.reducerReducer.userDetails.name
  }) */

  const handleLogout = () => {
    localStorage.removeItem("token");
    /* setFlag(false); */
    /* <Navigate  replace={true}/> */
    /* console.log("clicked") */
  }

  /* useEffect(()=>{
    const token = localStorage.getItem("token");
    if(token) setFlag(true);
    else setFlag(false);
  }, []) */

  return (
    <Box h={"85px"} backgroundColor={"yellow.400"}>
      <Link to="/items">
        <Image borderRadius='full' boxSize={"100px"} src={logo} />
      </Link>
      <Container display={"flex"} justifyContent={"center"} gap={"40px"} mt="-70px">
        <Link to="/items/menu">
          <Text fontWeight={"bold"} cursor={"pointer"} fontSize="20px">Menu</Text>
        </Link>

        <Link to="/items/contact">
          <Text fontWeight={"bold"} cursor={"pointer"} fontSize="20px">Contact</Text>
        </Link>

        <Link to="/items/about">
          <Text fontWeight={"bold"} cursor={"pointer"} fontSize="20px">About</Text>
        </Link>

        <BsInstagram style={{ fontSize: "30px", cursor: "pointer" }} />
        <BsFacebook style={{ fontSize: "30px", cursor: "pointer" }} />
      </Container>
      <Box display={"flex"} justifyContent={"end"} gap={"20px"} mt="-75px" p="40px">
        <Link to="/login">
          <Button onClick={handleLogout} color={"black"} /* colorScheme='black' */ variant='solid'>
            {/* {userName === undefined ? "Login" : `Hi ${userName}`} */}
            {/* {
            flag ? "Logout" : "Login/SignUp"
          } */}

          {token ? "Logout" : "Login"}
          </Button>
        </Link>
        <Link to="/items/cart">
          <BsCartPlusFill style={{ fontSize: "30px", cursor: "pointer" }} />
        </Link>
      </Box>
    </Box>
  )
};

export default Navbar;