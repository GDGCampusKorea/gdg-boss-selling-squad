import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "./stackflow";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack />
    </QueryClientProvider>
  );
}

export default App;
