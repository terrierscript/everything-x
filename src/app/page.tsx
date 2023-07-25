import { Box, Flex, HStack, Heading, Input, Text, VStack } from "@kuma-ui/core"
import { InputForm } from "../components/InputForm"

export default function Page() {
  return <VStack alignItems={"center"} justify={"center"}
    px={20}
    width="100%"
    height={"100vh"}>
    <HStack textAlign="center" gap={10} p={10}>
      <Box fontSize={"10vmin"}>𝔼𝕧𝕖𝕣𝕪𝕥𝕙𝕚𝕟𝕘</Box>
      <Box fontSize={"10vmin"} fontWeight={"bold"}>𝕏</Box>
    </HStack>
    <InputForm />
  </VStack>
}