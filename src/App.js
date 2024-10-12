import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "components/Common/ProtectedRoute";
import LoginPage from "./pages/Login/login";
import DashboardPage from "./pages/Dashboard/dashboard";
import NotFoundPage from "pages/NotFound/404";
import MainLayout from "./layout/MainLayout";

const queryClient = new QueryClient();

const App = () => (
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <Router>
        <MainLayout>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <ProtectedRoute path="/dashboard" component={DashboardPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </MainLayout>
      </Router>
    </QueryClientProvider>
  </AuthProvider>
);

export default App;
