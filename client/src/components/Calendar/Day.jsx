import React, {useState} from 'react';
import Modal from './Modal';

const Day = ({ d, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <td className={className}>
      <div onClick={() => setIsOpen(true)}>{d}</div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>{`todays day is ${d}`}</Modal>
    </td>
  );
};

export default Day;
