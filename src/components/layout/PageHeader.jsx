import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHeader({ title, subtitle, breadcrumb }) {
  return (
    <section className="page-header" id="pageHeader">
      <div className="page-header-overlay"></div>
      <img
        src="/images/tophero.png"
        alt="Spotless in Minutes Header Banner"
        className="page-header-bg"
      />
      <div className="container page-header-content">
        <h1 className="page-title">{title}</h1>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
        <nav className="breadcrumb-nav">
          <Link to="/">Home</Link>
          <span className="breadcrumb-sep">&gt;</span>
          <span className="breadcrumb-current">{breadcrumb || title}</span>
        </nav>
      </div>
    </section>
  );
}
