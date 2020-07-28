import React from 'react'
import { Link } from 'react-router-dom';

function MenuCore() {
  return (
    <div>
      <Link to="/">Dashboard</Link> |{" "}
      <Link to="/country">Country</Link> |{" "}
      <Link to="/estate">Estate</Link> |{" "}
      <Link to="/city">City</Link>
    </div>
  )
}

export default MenuCore;
