import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import CoursePage from './Pages/CoursePage';
import ProfilePage from './Pages/ProfilePage';
import DashboardPage from './Pages/DashboardPage';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout'; // We'll create this next
import './App.css';

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                
                {/* Routes that require the user to be logged in */}
                <Route 
                    path="/*" 
                    element={
                        <ProtectedRoute>
                            <Layout> {/* The layout includes the header */}
                                <Routes>
                                    <Route path="/home" element={<HomePage />} />
                                    <Route path="/course/:courseId" element={<CoursePage />} />
                                    <Route path="/profile" element={<ProfilePage />} />
                                    <Route path="/dashboard" element={<DashboardPage />} />
                                </Routes>
                            </Layout>
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </AuthProvider>
    );
}

export default App;