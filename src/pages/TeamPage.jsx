import React from 'react';
import '../css/team.css';

const TeamPage = () => {
  return (
    <div className='body_cards'>
      <div className="container_cards">
        <div className="card">
          <div className="cover_card">
            <img src="" alt="Foto" />
          </div>
          <h2>ALAN CUEZZO</h2>
          <p>
            FOUNDER
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="card">
          <div className="cover_card">
            <img src="https://trello.com/1/cards/65282156c55357190413c8af/attachments/6537290405c6c596ddbcf104/previews/6537290505c6c596ddbcf1fb/download/1692390073755.jpg" alt="Foto" />
          </div>
          <h2>EMILIA PIGINI</h2>
          <p>
            CO-FOUNDER
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="card">
          <div className="cover_card">
            <img src="" alt="Foto" />
          </div>
          <h2>AUGUSTO GROSSO</h2>
          <p>
            CO-FOUNDER.
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
