import { Box, Button, Center } from "@chakra-ui/react";
/* import OTPInput from "otp-input-react" */
import { Image, center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
function Loading() {

    const [done, setdone] = useState()
    useEffect(() => {
        setdone(true)
    })

    return <>
        <Center h={"100vh"} bg="#011029">
            <Image width="70%" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/e33acd165456287.640c99de4ca3e.gif" />
        </Center>
    </>
}

export default Loading;
