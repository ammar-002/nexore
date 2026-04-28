import React from 'react';

const WhatsappBusinessIcon = ({ 
  size = 24, 
  color = 'currentColor', 
  strokeWidth = 4, 
  className = '',
  ...props 
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="1 1 46 46"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M24 2.5c-11.885.013-21.51 9.658-21.497 21.543A21.5 21.5 0 0 0 5.15 34.36L3.5 44.5l10.14-1.65c10.41 5.71 23.48 1.901 29.19-8.51s1.902-23.479-8.509-29.19a21.5 21.5 0 0 0-10.32-2.65Z" />
    <path d="M25.544 24a4.75 4.75 0 1 1 0 9.5h-7.838v-19h7.838a4.75 4.75 0 0 1 0 9.5m0 0h-7.838" />
  </svg>
);

export default WhatsappBusinessIcon;