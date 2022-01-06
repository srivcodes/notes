import React from 'react';
import logo from '../../images/logo.png';
import { useLabel } from '../../ContextProviders/LabelContext';

export function Header() {
  const { selectedLabel } = useLabel();

  return (
    <div className="header">
      {selectedLabel === '' ? (
        <div className="home-heading">
          <img className="logo" src={logo} alt="Logo" />
          <span className="label-heading">Sticky | post-it notes made digital</span>
        </div>
      ) : (
        <div className="label-heading">{selectedLabel}</div>
      )}
    </div>
  );
}
