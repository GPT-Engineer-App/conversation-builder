import { Box, Button, Divider, Flex, IconButton, Input, InputGroup, InputRightElement, Text, VStack } from "@chakra-ui/react";
import { FaMicrophone } from "react-icons/fa";

const Index = () => {
  return (
    <Flex height="100vh">
      <Box width="208px" borderRight="1px solid gray" padding="20px">
        <VStack spacing={4} align="stretch">
          <Text fontSize="2xl" fontWeight="bold">Acumen</Text>
          <Button colorScheme="blue">新建对话</Button>
          <Divider />
          <VStack divider={<Divider borderColor="gray.200" />} spacing={4}>
            <Text>标题1 2024-04-15 19:19:04</Text>
            <Text>标题2 2024-04-16 19:19:04</Text>
            <Text>标题3 2024-04-17 19:19:04</Text>
            <Text>标题4 2024-04-18 19:19:04</Text>
          </VStack>
        </VStack>
      </Box>
      <Flex flex="1" flexDirection="column" justifyContent="space-between" p="20px">
        <VStack spacing={4} align="stretch">
          <Flex>
            <Box p="2" bg="gray.100" borderRadius="md">
              <Text fontSize="sm">比亚迪有几个型号</Text>
            </Box>
            <Box p="2" bg="blue.100" borderRadius="md" marginLeft="auto">
              <Text fontSize="sm">比亚迪有3个型号</Text>
            </Box>
          </Flex>
        </VStack>
        <Flex align="center">
          <IconButton aria-label="Microphone" icon={<FaMicrophone />} />
          <InputGroup size="md">
            <Input pr="4.5rem" placeholder="输入消息..." />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm">
                发送
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Index;