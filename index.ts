main();

function main() {
  const canvas: HTMLCanvasElement | null = document.querySelector("#gl-canvas");
  if (canvas === null) {
    console.error("gl-canvas not found");
    return;
  }

  const gl = canvas.getContext("webgl");
  if (gl === null) {
    console.error("Unable to initialize WebGL"); 
    return;
  }

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
}
