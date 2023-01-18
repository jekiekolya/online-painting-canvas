import { observer } from 'mobx-react-lite';
import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import canvasState from 'store/canvasState';
import toolState from 'store/toolState';
import Brush from 'tools/Brush';
import '../styles/canvas.scss';

const Canvas = observer(function Canvas() {
  const canvasRef = useRef();

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current);
    toolState.setTool(new Brush(canvasRef.current));
  }, []);

  return (
    <div className="canvas">
      <canvas ref={canvasRef} width={800} height={500}></canvas>
    </div>
  );
});

export default Canvas;
