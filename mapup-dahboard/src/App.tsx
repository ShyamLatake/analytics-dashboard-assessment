import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardPage from "./pages/DashboardPage";
import Analytics from "./pages/Analytics";
import GeographicInsights from "./pages/GeographicInsights";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <DashboardLayout>
          <Routes>
            {/* Define routes for different components */}
            <Route path="/" element={<DashboardPage />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/geographic" element={<GeographicInsights />} />
            {/* Add more routes as needed */}
          </Routes>
        </DashboardLayout>
      </div>
    </Router>
  );
};

export default App;
