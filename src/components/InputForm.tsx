"use client"
import { Box, Button, Flex, HStack, Input, Spacer, VStack } from "@kuma-ui/core"
import { useMemo, useState } from "react"
import { convertText } from "../lib/map"
import { ChakraProvider, useToast } from "@chakra-ui/react"

export const InputForm = () => {
  const [text, setText] = useState("")
  const crossed = useMemo(() => {
    return convertText(text)
  }, [text])
  const toast = useToast()

  return <ChakraProvider>
    <VStack textAlign={"center"} gap={8} alignItems={"center"}>
      <Input borderRadius={40} border="#ccc solid 1px"
        color="#333"
        px={8} placeholder="𝕀𝕟𝕡𝕦𝕥 𝕙𝕖𝕣𝕖" textAlign={"center"} fontSize={"4vw"}
        maxWidth="90vw"
        size={40}
        value={text} onChange={(e) => {
          setText(e.target.value)
        }} />
      <Box fontSize={40}>👇👇👇</Box>
      <HStack justify={"center"} maxWidth={"100%"}
        gap={10} minHeight={"1.2em"}
      >
        <Box fontSize={"5vw"} >{crossed.length > 0 ? crossed : "\u00A0"}</Box>
      </HStack>
      <Button p={8} bg="teal" maxWidth={"80vw"} width={300} color="white" borderRadius={6}
        onClick={() => {
          navigator.clipboard.writeText(crossed)
          toast({
            title: "Copied!",
            colorScheme: "teal"
          })
        }}>Copy</Button>
    </VStack>
  </ChakraProvider>
}
