
import React, { useState } from 'react';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { SubjectView } from './components/SubjectView';
import { ChatView } from './components/ChatView';
import { ProfileView } from './components/ProfileView';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import type { Subject, User } from './types';
import { View } from './types';
import { SUBJECTS } from './constants';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState<View>(View.DASHBOARD);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  
  const defaultUser: User = { 
    name: 'Aluno Dedicado', 
    email: 'aluno@vestibular.com',
    ra: '12345678-9',
    phone: '(11) 98765-4321'
  };
  
  // Make user stateful
  const [user, setUser] = useState<User>(defaultUser);

  const handleLogin = (email: string) => {
    // In a real app, you'd find the user by email from a list of users.
    // For this mock, we'll just log in with the default user data.
    console.log(`Login attempt for ${email}`);
    setUser(defaultUser);
    setIsAuthenticated(true);
    setCurrentView(View.DASHBOARD);
  };

  const handleRegister = (name: string, email: string) => {
    const newUser: User = {
        name,
        email,
        ra: '', // Can be filled later in profile
        phone: '', // Can be filled later in profile
    };
    // In a real app, you'd save this user to a database.
    // For this mock, we set the new user as the current user and log them in.
    setUser(newUser);
    setIsAuthenticated(true);
    setCurrentView(View.DASHBOARD);
  };

  const handleUpdateUser = (updatedUser: User) => {
    setUser(updatedUser);
    // Here you would typically make an API call to save the user data
  };

  const handleDeleteAccount = () => {
    // Here you would typically make an API call to delete the user account
    console.log("Account deleted.");
    setIsAuthenticated(false);
    setUser({ name: '', email: '' }); // Clear user data
    setCurrentView(View.LOGIN); // Go back to login
  };

  const handleSelectSubject = (subject: Subject) => {
    setSelectedSubject(subject);
    setCurrentView(View.SUBJECT);
  };

  const handleBackToDashboard = () => {
    setSelectedSubject(null);
    setCurrentView(View.DASHBOARD);
  };
  
  const navigateToChat = () => {
    setCurrentView(View.CHAT);
  }

  const renderContent = () => {
    switch (currentView) {
      case View.DASHBOARD:
        return <Dashboard user={user} onSelectSubject={handleSelectSubject} />;
      case View.SUBJECT:
        return selectedSubject ? <SubjectView subject={selectedSubject} onAskAI={navigateToChat} /> : <Dashboard user={user} onSelectSubject={handleSelectSubject} />;
      case View.CHAT:
        return <ChatView />;
      case View.PROFILE:
        // Render the new ProfileView component
        return <ProfileView user={user} onUpdateUser={handleUpdateUser} onDeleteAccount={handleDeleteAccount} />;
      default:
        return <Dashboard user={user} onSelectSubject={handleSelectSubject} />;
    }
  };
  
  const getHeaderTitle = () => {
    switch(currentView) {
      case View.DASHBOARD:
        return 'Vestibu-Lar School';
      case View.SUBJECT:
        return selectedSubject?.name || 'Matéria';
      case View.CHAT:
        return 'Vestibul.IA Tutor';
      case View.PROFILE:
        return 'Meu Perfil';
      default:
        return 'Vestibu-Lar School';
    }
  }

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} onRegister={handleRegister} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/30 to-gray-900 text-white font-sans">
      <div className="max-w-md mx-auto h-screen flex flex-col">
        <Header 
          title={getHeaderTitle()}
          showBackButton={currentView === View.SUBJECT}
          onBack={handleBackToDashboard}
          subject={selectedSubject}
        />
        <main className="flex-1 overflow-y-auto pb-16">
          {renderContent()}
        </main>
        <BottomNav currentView={currentView} setView={setCurrentView} />
      </div>
    </div>
  );
};

export default App;
