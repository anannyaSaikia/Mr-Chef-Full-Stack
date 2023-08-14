import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Stack,
  Image,
  Center,
  Text,
  Box
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { MdMenuBook } from "react-icons/md";
import { BsCartPlusFill } from "react-icons/bs";
import { GrContactInfo } from "react-icons/gr"
import { TbArrowRoundaboutRight } from "react-icons/tb"
import { BsInstagram, BsFacebook } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"
import logo from "../Signin_Signup/images/w.png"

function MobNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const userName = useSelector((store) => {
    return store.reducerReducer.userDetails.name
  })
  return (
    <>
      <Box h={"60px"} bg={"yellow.400"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} paddingX={"30px"}>
        <Image boxSize={"70px"} src={logo} />
        <GiHamburgerMenu style={{ fontSize: "40px", }} ref={btnRef} onClick={onOpen} />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={"yellow.400"}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Center>
              <Image mb={"-40px"} w={"150px"} src={logo}></Image>
            </Center>
          </DrawerHeader>

          <DrawerBody>
            <Stack align="start" gap={"20px"} >
              {
                userName === undefined
                  ? <Link to="/signup">
                    <Button fontSize={"20px"} leftIcon={<RiAccountPinCircleFill />} colorScheme='black' variant="link">
                      {/* {userName === undefined ? "Login" : `Hi ${userName}`} */}
                      Login
                    </Button>
                  </Link>
                  : <Button fontSize={"20px"} leftIcon={<RiAccountPinCircleFill />} colorScheme='black' variant="link">
                    Hi ${userName}
                  </Button>
              }


              <Link to="/items/menu">
                <Button fontSize={"20px"} leftIcon={<MdMenuBook />} colorScheme='black' variant="link">
                  Menu
                </Button>
              </Link>

              <Link to="/items/cart">
                <Button fontSize={"20px"} leftIcon={<BsCartPlusFill />} colorScheme='black' variant="link">
                  Cart
                </Button>
              </Link>

              <Link to="/items/contact">
                <Button fontSize={"20px"} leftIcon={<GrContactInfo />} colorScheme='black' variant="link">
                  Contact us
                </Button>
              </Link>

              <Link to="/items/about">
                <Button fontSize={"20px"} leftIcon={<TbArrowRoundaboutRight />} colorScheme='black' variant="link">
                  About us
                </Button>
              </Link>

              <Button fontSize={"20px"} leftIcon={<BsInstagram />} colorScheme='black' variant="link">
                Instagram
              </Button>
              <Button fontSize={"20px"} leftIcon={<BsFacebook />} colorScheme='black' variant="link">
                Facebook
              </Button>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Text>Mr Chef</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MobNavbar;
