"use client"
import { Box, Button, Flex, HStack, Input, Spacer, VStack } from "@kuma-ui/core"
import { useMemo, useState } from "react"
import { convertText } from "../lib/map"

export const InputForm = () => {
  const [text, setText] = useState("")
  const crossed = useMemo(() => {
    return convertText(text)
  }, [text])

  return <VStack textAlign={"center"} >
    <Input borderRadius={40} border="#ccc solid 1px"
      color="#333"
      px={8} placeholder="𝕀𝕟𝕡𝕦𝕥 𝕙𝕖𝕣𝕖" textAlign={"center"} fontSize={40} size={40} value={text} onChange={(e) => {
        setText(e.target.value)
      }} />
    <Box fontSize={40}>👇👇👇</Box>
    <HStack justify={"center"} width={"100%"} fontSize={60} gap={10} minHeight={"1.2em"}>
      <Box>{crossed.length > 0 ? crossed : "\u00A0"}</Box>
    </HStack>
    <Button p={8} bg="teal" color="white" borderRadius={6}
      onClick={() => {
        navigator.clipboard.writeText(crossed)
      }}>Copy</Button>
  </VStack>
}
