const content = (script) =>
  `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Signature Pad demo</title>
  <meta name="description" content="Signature Pad - HTML5 canvas based smooth signature drawing using variable width spline interpolation.">

  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">

  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">

  <style>
    body {
      font-family: Helvetica, Sans-Serif;
      display: flex;
    }

    body,
    html {
      width: 100%;
      height: 100%;
      margin: 0;
      overflow: hidden;
      user-select: none;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .rotated-true {
      transform: rotate(90deg);
      transform-origin: bottom left;

      display: flex;
      flex: 1;

      position: absolute;
      top: -100vw;
      left: 0;

      height: 100vw;
      width: 100vh;
    }

    .rotated-false {
      width: 100%;
      height: 100%;
      display: flex;
      flex: 1;
    }

    .m-signature-pad {
      display: flex;
      flex: 1;
      flex-direction: column;

      font-size: 10px;
      border: 1px solid #e8e8e8;
      background-color: #fff;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27),
        0 0 40px rgba(0, 0, 0, 0.08) inset;
    }

    .m-signature-pad--body {
      display: flex;
      flex: 1;
      border: 1px solid #f4f4f4;
    }

    .m-signature-pad--body canvas {
      flex: 1;
      border-radius: 4px;
      margin: 32px;
      border: 1px solid rgba(0, 0, 0, 0.08);
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
    }

    .m-signature-pad--footer {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
    }

    @media (max-width: 400px) {
      .m-signature-pad--footer {
        padding: 10px 20px;
      }
    }

    .m-signature-pad--footer .description {
      color: #999;
      text-align: center;
      font-size: 1.2em;
      flex: 1;
    }

    .m-signature-pad--footer .button {
      background-color: #3f99f7;
      background-color: <%buttonColor%>;
      height: 32px;
      padding: 0 20px;
      line-height: 32px;
      text-align: center;
      color: #fff;
      border: 1px solid transparent;
      border-radius: 4px;
      outline: none;
      box-shadow: none;
    }

    .m-signature-pad--footer .button.clear {
    }

    .m-signature-pad--footer .button.save {
    }

    <%style%>
  </style>
</head>
<body onselectstart="return false">
<div class="rotated-<%orientation%>">
    <div id="signature-pad" class="m-signature-pad">
      <div class="m-signature-pad--body">
        <canvas></canvas>
      </div>
      <div class="m-signature-pad--footer">
        <button type="button" class="button clear" data-action="clear"><%clear%></button>
        <div class="description"><%description%></div>
        <button type="button" class="button save" data-action="save"><%confirm%></button>
      </div>
    </div>
  </div>

  <script>
    ${script}
  </script>
</body>
</html>`;

export default content;
