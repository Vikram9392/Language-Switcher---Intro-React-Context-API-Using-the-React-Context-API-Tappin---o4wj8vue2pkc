"use client"
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
  };

  return (
    <select value={language} onChange={handleLanguageChange}>
      <option value="English">English</option>
      <option value="French">French</option>
      <option value="Spanish">Spanish</option>
    </select>
  );
};

export default LanguageSwitcher;
