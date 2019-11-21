import React from 'react';
import Kursus from './state/State';
import Materi from './props/Prop';
import './props/style.css';

function App() {
  return (
    <div className="wraperapp">
      <Kursus/>
      <h2 className="container">NEWS</h2>
      <hr/>
      <div className="container">
        <div className="row events_box_mobheigh">
          <div className="col-xs-12 col-sm-6">
            <Materi img={require('./logo/gambar1.jpg')}/>
          </div>
          <div className="col-xs-12 col-sm-6">
            <Materi img={require('./logo/gambar1.jpg')}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
