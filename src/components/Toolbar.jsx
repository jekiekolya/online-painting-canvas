import React from 'react';
import canvasState from 'store/canvasState';
import toolState from 'store/toolState';
import Brush from '../tools/Brush';

import '../styles/toolbar.scss';

export default function Toolbar() {
  return (
    <div
      className="toolbar"
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <div style={{ display: 'flex', gap: '16px' }}>
        <button
          className="toolbar__btn brush"
          onClick={() => {
            toolState.setTool(new Brush(canvasState.canvas));
          }}
        ></button>
        <button className="toolbar__btn rect"></button>
        <button className="toolbar__btn circle"></button>
        <button className="toolbar__btn eraser"></button>
        <button className="toolbar__btn line"></button>
        <input type="color" />
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <button className="toolbar__btn undo"></button>
        <button className="toolbar__btn redo"></button>
        <button className="toolbar__btn save"></button>
      </div>
    </div>
  );
}
