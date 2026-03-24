import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProfessorPage from "./pages/ProfessorPage";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProfessorPage />
    </QueryClientProvider>
  );
}
