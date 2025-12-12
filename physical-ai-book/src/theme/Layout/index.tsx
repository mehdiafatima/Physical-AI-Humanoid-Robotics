import React from 'react';
import Layout from '@theme-original/Layout';
import type LayoutType from '@theme/Layout';
import ChatbotWidget from '@site/src/components/ChatbotWidget';

export default function LayoutWrapper(props: typeof LayoutType) {
  return (
    <>
      <Layout {...props} />
      {/* Global Floating Chatbot */}
      <ChatbotWidget />
    </>
  );
}
