import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import ModalEdit from 'features/modalEditContact/ModalEdit';
import DeleteContact from 'features/deleteContact/DeleteContact';

const ContactCard = ({ id, firstName, lastName, email, phone }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <ul>
            <li>
              <strong>First Name:</strong> {firstName}
            </li>
            <li>
              <strong>Last Name:</strong> {lastName}
            </li>
            <li>
              <strong>Email:</strong> {email}
            </li>
            <li>
              <strong>Phone:</strong> {phone}
            </li>
          </ul>
        </div>
      </div>
      <footer className="card-footer">
        <ModalEdit contactInfo={{ id, firstName, lastName, email, phone }}>
          <button className="card-footer-item button is-info is-light">
            <span className="icon">
              <FontAwesomeIcon icon={faEdit} />
            </span>
            <span>Edit</span>
          </button>
        </ModalEdit>
        <DeleteContact contactInfo={{ id, firstName, lastName, email, phone }}>
          <span className="icon">
            <FontAwesomeIcon icon={faTrash} />
          </span>
          <span>Delete</span>
        </DeleteContact>
      </footer>
    </div>
  );
};

export default ContactCard;