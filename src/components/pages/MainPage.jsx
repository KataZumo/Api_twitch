import React from 'react';

export default function MainPage({ streams }) {
  console.log(streams);
  return streams.map((el, i, e, r) => (

    <div className="card" key={i}>
      <div className="card" style={{ width: '18rem' }}>
        <img src={
          `${el.thumbnail_url
            .replace("{width}", "1280")
            .replace("{height}", "720")}`
          } className="card-img-top" alt="logo" key={i} />
        <div className="card-body">
          <h5 className="card-title" key={e}>{`${el.title}`} </h5>
          <p className="card-text" key={r}>{`${el.game_name}`} </p>
        </div>
      </div>
    </div>
  ));
}
