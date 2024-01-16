import React from "react";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  Input,
  Link,
  Text,
  useColorModeValue,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
} from "@chakra-ui/react";
// Assets
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Shape from "../../Assets/shape.png";
import Dr from "../../Assets/project-name.png";
import Heart from "../../Assets/heart.png";
import plus from "../../Assets/plus.png";
import msg from "../../Assets/msg.png";
import Safety from "../../Assets/safety.png"
import alkemlogo from "../../Assets/Alkemlogo.png";

import { FaArrowCircleRight } from "react-icons/fa";
import axios from "axios";


function Login({showAlert}) {
  // Chakra color mode
  const textColor = useColorModeValue("gray.500", "white");
  const titleColor = useColorModeValue("gray.700", "blue.500");
  const navigate = useNavigate();
  const url = `http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/web/get_sign_up`;
  const urlLogin = `http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/web/get_login`;

  const [inputValS, setInputValS] = useState({
    name: "",
    username: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  });
  const [passwordMatch, setPasswordMatch] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValS({ ...inputValS, [name]: value });
  };
  const toVerifyPassword = () => {
    if (inputValS.password === inputValS.confirm_password) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
      console.log("false");
    }
  }
  const nameRegex = /^[A-Za-z]+$/;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValS.name === "") {
      showAlert("please enter the name, danger");
    } else if (!nameRegex.test(inputValS.name)) {
      showAlert("Name can only contain alphabetic characters , danger");
    } else if (inputValS.username === "") {
      showAlert("please enter the username , danger");
    } else if (inputValS.email === "") {
      showAlert("please enter the email , danger");
    } else if (inputValS.phone_number === "") {
      showAlert("please enter the phone_number , danger");
    } else if (inputValS.password === "") {
      showAlert("please enter the password , danger");
    } else if (inputValS.confirm_password === "") {
      showAlert("please enter the confirm_password , danger");
    } else {
      await axios
        .post(
          url,
          {
            email: inputValS.email,
            name: inputValS.name,
            username: inputValS.username,
            phone_number: inputValS.phone_number,
            password: inputValS.password,
            confirm_password: inputValS.confirm_password,
          },
          { headers: { "Access-Control-Allow-Origin": "*" } }
        )
        .then((res) => {
          // console.log(res.status)
          if (res.status === 200) {
            showAlert("Email already exists! , danger");
          } else {
          showAlert("Registration Successful, success");
          }
        })
        .catch((error) => {
          showAlert("Registration failed:", error);
        });
    }
  };

  const [inputValL, setInputValL] = useState({
    email: "",
    password: "",
  });
  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setInputValL({ ...inputValL, [name]: value });
  };
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    if (inputValL.email === "") {
      showAlert("please enter the email, danger");
    } else if (inputValL.password === "") {
      showAlert("please enter the password, danger");
    } else {
      await axios
        .post(
          urlLogin,
          {
            email: inputValL.email,
            password: inputValL.password,
          },
          { headers: { "Access-Control-Allow-Origin": "*" } }
        )
        .then((res) => {
        showAlert("Login Successful ,success");
          const token = {
            Loginid: res.data.Loginid,
            accessToken: res.data.token,
            adminData: res.data.adminData
          };
          const data = localStorage.setItem("token", JSON.stringify(token));
          setTimeout(() => {
           navigate("/admin/dashboard");
          }, 2000);

          // console.log(res)
        })
        .catch((error) => {
          if (error.response.status === 401) {
            showAlert("Invalid email address, danger");
          } else {
            showAlert("Invalid Password ,danger");
          }
        });
    }
  };
  const currentTab = useRef();
  const currentLoginTab = useRef();
  const handleClickS = () => {
    currentTab.current.click();
  };
  const handleClickL = () => {
    currentLoginTab.current.click();
  };
  const [isDivVisible, setDivVisibility] = useState('none');
  const [isDivAnimate, setDivAnimate] = useState('block');
  const openForm = () => {
    setDivVisibility('block')
    setDivAnimate('none')
  }

  const [animation, setAnimation] = useState({
    animations: '',
    scale: '1',
    showLoginAni: ''
  })
  const showLogin = (e) => {

    setAnimation({
      animations: 'loginAnimationSlide 1.5s ease-in-out forwards',
      scale: '1',
      showLoginAni: 'showLogin 1s ease-in-out 0.5s forwards'
    })
    
    setDivAnimate('none')

    console.log(e.currentTarget.parentElement)
    e.currentTarget.parentElement.style.display = 'none';
    // document.getElementsByClassName('arrow-icon').style.display = "none";
  }
  // width: 26%;
  // margin: 4px 11px;
  return (

    <Flex>
      <Flex direction="column" alignItems={{ lg: 'center' }} width='18rem'>
        <Image
          src={alkemlogo}
          // w='35%'
          // m='20px 0px'
          w={{ base: '26%', sm: '26%', md: '26%', lg: '35%' }}
          m={{ base: '4px 11px', sm: '4px 11px', md: '4px 10px', lg: '20px 0px' }}
        />
      </Flex>
      <Flex direction="row" w={{ base: '0px', sm: '0px', md: '0px', lg: '50rem' }} height='100vh' alignItems='center' justifyContent='flex-end'>
        <Image
          // w='50%'
          height='auto'
          width='26rem'
          src={Dr}
        />
      </Flex>
      <Flex direction="column" w={{ base: '0px', sm: '0px', md: '60%', lg: '50%' }} position='absolute'
       opacity={{ base: '0', sm: '0', md: '0', lg: '1' }}  right='1%' top='5%' animation={animation.animations}>
        <Flex>

          <Image
            height='auto'
            width='42rem'
            src={Shape}
          />
          <div className="elem">
            <Image
              w={{ base: "100%", md: "100%", lg: "70%" }}
              // margin={{ lg: '40px 0px;', md: '38px 51px;', sm:  '38px 51px;' }}
              src={Heart}
              backgroundSize="cover"
              bgPosition="center"
              bgRepeat="no-repeat"
            />
          </div>
          <div className="elem1">
            <Image
              w={{ base: "100%", md: "100%", lg: "70%" }}
              // margin={{ lg: '40px 0px;', md: '38px 51px;', sm:  '38px 51px;' }}
              src={plus}
              backgroundSize="cover"
              bgPosition="center"
              bgRepeat="no-repeat"
            />
          </div>
          <div className="elem2">
            <Image
              w={{ base: "100%", md: "100%", lg: "70%" }}
              // margin={{ lg: '40px 0px;', md: '38px 51px;', sm:  '38px 51px;' }}
              src={msg}
              backgroundSize="cover"
              bgPosition="center"
              bgRepeat="no-repeat"
            />
          </div>
          <div className="elem3">
            <Image
              w={{ base: "100%", md: "100%", lg: "70%" }}
              // margin={{ lg: '40px 0px;', md: '38px 51px;', sm:  '38px 51px;' }}
              src={Safety}
              backgroundSize="cover"
              bgPosition="center"
              bgRepeat="no-repeat"
            />
          </div>
        </Flex>
      </Flex>
      <Flex direction="column" w={{ base: '120%', sm: '120%', md: '100%', lg: '100%' }}  >
        <Box w={{ base: "155%",sm: '155%', md: "100%", lg: "50%" }} backgroundColor="#4d79ff"
          borderRadius="30px"
          margin='3rem auto' opacity={{ base: '1', sm: '1', md: '1', lg: '0' }} 
          transform={{lg:'translate(-50%, 0px)',md:'translate(-15%, 0px)',sm:'translate(-41%, 0px)',base:'translate(-41%, 0px)' }}
          animation={animation.showLoginAni}
          >
          <Tabs>
            <TabList>
              <Tab className="tabbutton" _focus='none' _active='none' color='#fff' fontWeight='600' fontSize={{base:'15px',sm:'15px',md:'15px',lg:'20px'}} id="signup" ref={currentLoginTab}>
                Sign Up
              </Tab>
              <Tab className="tabbutton" _focus='none' _active='none' color='#fff' fontWeight='600' fontSize={{base:'15px',sm:'15px',md:'15px',lg:'20px'}} id="login" ref={currentTab}>
                Log In
              </Tab>
            </TabList>
            <Box
              backgroundColor="#fff"
              marginTop="2px"
              borderRadius="30px"
              height="501px"
              padding={6}
              w={{ base: "100%", md: "100%", lg: "100%" }}
            >
              <TabPanels>
                <TabPanel>
                  <Box>
                    <form onSubmit={handleSubmit}>
                      <Flex direction="row ">
                        <FormControl>
                          <Input
                            variant="auth"
                            my={2}
                            fontSize="sm"
                            border="2px solid #4d79ff5b !important"
                            ms="0px"
                            backgroundColor="#4d7aff0a"
                            mr={{ base: "0px", md: "0px", lg: "3px" }}
                            size="lg"
                            w={{ base: "100%", md: "100%", lg: "47%" }}
                            type="text"
                            placeholder="name"
                            name="name"
                            id="name"
                            value={inputValS.name}
                            onChange={handleChange}

                          />
                          <Input
                            variant="auth"
                            border="2px solid #4d79ff5b !important"
                            fontSize="sm"
                            backgroundColor="#4d7aff0a"
                            ml={{ base: "0px", md: "0px", lg: "4px" }}
                            my={2}
                            size="lg"
                            w={{ base: "100%", md: "100%", lg: "49%" }}
                            type="text"
                            placeholder="user name"
                            name="username"
                            id="username"
                            value={inputValS.username}
                            onChange={handleChange}

                          />
                        </FormControl>
                      </Flex>
                      <Box>
                        <FormControl>
                          <Input
                            variant="auth"
                            fontSize="sm"
                            width="100%"
                            backgroundColor="#4d7aff0a"
                            border="2px solid #4d79ff5b !important"
                            my={2}
                            size="lg"
                            placeholder="email address"
                            type="email"
                            value={inputValS.email}
                            name="email"
                            id="email"
                            onChange={handleChange}

                          />

                          <Input
                            variant="auth"
                            fontSize="sm"
                            my={2}
                            border="2px solid #4d79ff5b !important"
                            backgroundColor="#4d7aff0a"
                            width="100%"
                            size="lg"
                            type="number"
                            name="phone_number"
                            id="phone_number"
                            placeholder="mobile number"
                            value={inputValS.phone_number}
                            onChange={handleChange}

                            min="1111111111"
                            max="9999999999"
                          />

                          <Input
                            variant="auth"
                            backgroundColor="#4d7aff0a"
                            border="2px solid #4d79ff5b !important"
                            fontSize="sm"
                            width="100%"
                            size="lg"
                            my={2}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password"
                            value={inputValS.password}
                            onChange={handleChange}
                            onBlurCapture={toVerifyPassword}

                          />
                          <Input
                            variant="auth"
                            backgroundColor="#4d7aff0a"
                            border="2px solid #4d79ff5b !important"
                            fontSize="sm"
                            width="100%"
                            my={2}
                            size="lg"
                            id="confirm_password"
                            type="password"
                            name="confirm_password"
                            placeholder="confirm password"
                            value={inputValS.confirm_password}
                            onChange={handleChange}
                            onBlurCapture={toVerifyPassword}

                          />

                          {(inputValS.password || inputValS.confirm_password) && (passwordMatch ? (
                            <Text color="green" fontSize="small">passwords match!</Text>
                          ) : (
                            <Text color="red" fontSize="small">Passwords do not match.</Text>
                          ))}
                          <Flex textAlign="Center" justifyContent="center">
                            <Button
                              type="submit"
                              fontSize="medium"
                              variant="dark"
                              fontWeight="bold"
                              my={2}
                              w="50%"
                              h="45"
                              backgroundColor="#4d79ff"
                              className="login-btn"
                            // onClick={() =>navigate("/admin/dashboard")}
                            >
                              SIGN UP
                            </Button>
                          </Flex>
                        </FormControl>
                      </Box>
                    </form>
                  </Box>
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    maxW="100%"
                    mt="18px"
                  >
                    <Text
                      color={{ lg: textColor, md: textColor, sm: "Black" }}
                      fontWeight="smalll"
                      fontSize="14px"
                    >
                      Already have an account?
                      <Link
                        color={titleColor}
                        ms="5px"
                        // href="#tabs-449--tab-1"
                        fontWeight="bold"
                        onClick={handleClickS}
                      >
                        Log In
                      </Link>
                    </Text>
                  </Flex>
                </TabPanel>

                <TabPanel>
                  <form onSubmit={handleSubmitLogin}>
                    <FormControl>
                      <Input
                        variant="auth"
                        border="2px solid #4d79ff5b !important"
                        fontSize="sm"
                        backgroundColor="#4d7aff0a"
                        ml={{ base: "0px", md: "0px", lg: "0px" }}
                        my={2}
                        mb="24px"
                        size="lg"
                        w={{ base: "100%", md: "100%", lg: "100%" }}
                        placeholder="email address"
                        type="email"
                        value={inputValL.email}
                        name="email"
                        id="emaill"
                        onChange={handleChangeLogin}

                      />
                      <Input
                        variant="auth"
                        border="2px solid #4d79ff5b !important"
                        fontSize="sm"
                        backgroundColor="#4d7aff0a"
                        ml={{ base: "0px", md: "0px", lg: "0px" }}
                        my={2}
                        size="lg"
                        mb="24px"
                        w={{ base: "100%", md: "100%", lg: "100%" }}
                        type="password"
                        name="password"
                        id="passwordl"
                        placeholder="password"
                        value={inputValL.password}
                        onChange={handleChangeLogin}


                      />

                      <Flex textAlign="Center" justifyContent="center">
                        <Button
                          type="submit"
                          fontSize="medium"
                          variant="dark"
                          fontWeight="bold"
                          my={2}
                          w="50%"
                          h="45"
                          backgroundColor="#4d79ff"
                          className="login-btn"
                        >
                          Log In
                        </Button>
                      </Flex>
                    </FormControl>
                    <Flex
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      maxW="100%"
                      mt="18px"
                    >
                      <Text
                        color={{ lg: textColor, md: textColor, sm: "Black" }}
                        fontWeight="smalll"
                        fontSize="14px"
                      >
                        Already have an account?
                        <Link
                          color={titleColor}
                          as="span"
                          ms="5px"
                          href="#"
                          fontWeight="bold"
                          onClick={handleClickL}
                        >
                          Sign up
                        </Link>
                      </Text>
                    </Flex>
                  </form>
                </TabPanel>
              </TabPanels>
            </Box>
          </Tabs>
        </Box>
       
        <div className="parent-div"> 
        <FaArrowCircleRight className='arrow-icon' fontSize='38px' onClick={showLogin} />
        </div>
      </Flex>
    </Flex>
  );
}

export default Login;
