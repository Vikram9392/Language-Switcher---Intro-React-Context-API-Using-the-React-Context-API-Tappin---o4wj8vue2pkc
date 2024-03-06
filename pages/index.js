"use client"
import React from 'react';
import { LanguageProvider, useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';

const HomePage = () => {
  const { language } = useLanguage();

  const getTextBasedOnLanguage = () => {
    switch (language) {
      case 'French':
        return 'Bienvenue à Next.js!';
      case 'Spanish':
        return '¡Bienvenido a Next.js!';
      default:
        return 'Welcome to Next.js!';
    }
  };

  return (
    <div>
      <LanguageSwitcher />
      <h1>{getTextBasedOnLanguage()}</h1>
    </div>
  );
};

const Home = () => {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
};

export default Home;
