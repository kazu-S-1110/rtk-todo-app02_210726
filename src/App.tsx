import { Flex } from '@chakra-ui/react';
import Header from './components/Header';
import TaskForm from './features/task/TaskForm';
import TaskList from './features/task/TaskList';

const App = () => {
  return (
    <>
      <Flex align="center" bg="#54DEFD" h="100vh" justifyContent="center">
        <Flex
          w="70vw"
          h="70vh"
          bg="#FFFBFA"
          borderRadius="16px"
          p={8}
          direction="column"
        >
          <Header />
          <TaskForm />
          <TaskList />
        </Flex>
      </Flex>
    </>
  );
};

export default App;
