import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import UserCard from './components/UserCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header title="React-Dev-Page" />
      <Welcome message="👋 Welcome, React Developer!" />
      <UserCard
        name="GISUBIZO"
        age={18}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaH7FpGhnLXTc52WEYKCix7gO_oIdoXxuAFA&s"
      />
      <Footer message="© 2025 - All rights reserved." />
    </div>
  );
}

export default App;
