import React from "react";

interface MessageProps {
  variant: string;
  children: React.ReactNode;
}

const Message: React.FC<MessageProps> = ({ variant, children }) => {
  return (
    <div id="message" className={`notification ${variant}`}>
      <button className="delete"></button>
      {children}
    </div>
  );
};

export default Message;
