import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

import HeaderCore from '../components/HeaderCore';
import ContentCore from '../components/ContentCore';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function CorePage() {
  return (
    <Router>
      <HeaderCore />
      <ContentCore />
    </Router>
  )
}

export default CorePage;
