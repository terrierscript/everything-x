import { Box, Flex, HStack, Heading, Input, Text, VStack } from "@kuma-ui/core"
import { InputForm } from "../components/InputForm"

export default function Page() {
  return <VStack alignItems={"center"} justify={"center"} width="100%" height={"100vh"}>
    <HStack textAlign="center" gap={10} py={20}>
      <Box fontSize={45}>𝔼𝕧𝕖𝕣𝕪𝕥𝕙𝕚𝕟𝕘</Box>
      <Box fontWeight={"bold"} fontSize={50}>𝕏</Box>
    </HStack>
    <InputForm />
  </VStack>
}