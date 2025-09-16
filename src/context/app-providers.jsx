import { AuthProvider } from "./auth-context";
import { DataProvider } from "./data-context";

export function AppProviders({ children }) {
  return (
    <DataProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </DataProvider>
  );
}