import React from 'react';

export default class MiniHeader extends React.Component {
  render() {
    return (
      <header className='Header'>
        <nav className="navbar navbar-expand-sm bg-light" style={{backgroundColor: '#001b33',color: '#3b97ff',opacity: '0.90',minHeight:'20px',height:'40px'}}>
  <a className="navbar-brand" href="#">DOWNLOAD</a>
  <div>
  


<ul className="nav navbar-nav navbar-right" style={{fontSize:'12px'}}>
  <li className="nav-item">
    <a className="nav-link" href="/buyticket" style={{marginTop:'2px',marginBottom:'2px'}}>Buy Ticket</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="">Kiny</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="">Eng</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="">Fre</a>
  </li>
 
   
    </ul>
  </div>

</nav>
        
      </header>
    );
  }
}
