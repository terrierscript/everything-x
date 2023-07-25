"use client"
import { Box, Flex, HStack, Input, Spacer, VStack } from "@kuma-ui/core"
import { useMemo, useState } from "react"
import { convertText } from "../lib/map"

export const InputForm = () => {
  const [text, setText] = useState("")
  const crossed = useMemo(() => {
    return convertText(text)
  }, [text])
  return <VStack textAlign={"center"} >
    <Input placeholder="𝕀𝕟𝕡𝕦𝕥 𝕙𝕖𝕣𝕖" textAlign={"center"} fontSize={40} size={40} value={text} onChange={(e) => {
      setText(e.target.value)
    }} />
    <Box fontSize={40}>👇</Box>
    <HStack justify={"center"} width={"100%"} fontSize={40} gap={10} minHeight={"1.2em"}>
      <Box>{crossed.length > 0 ? crossed : "\u00A0"}</Box>
    </HStack>
  </VStack>
}
