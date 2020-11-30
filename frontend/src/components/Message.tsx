import React from "react";

interface MessageProps {
  variant: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Message: React.FC<MessageProps> = ({ variant, children, onClose }) => {
  return (
    <div id="message" className={`notification ${variant}`}>
      <button className="delete" onClick={onClose}></button>
      {children}
    </div>
  );
};

export default Message;
