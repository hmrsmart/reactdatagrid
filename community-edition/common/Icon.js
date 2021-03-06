/**
 * Copyright © INOVUA TRADING.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
const icons = {
    // back
    back: (React.createElement("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" })),
    // forward
    forward: (React.createElement("path", { d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" })),
    // refresh
    refresh: (React.createElement("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" })),
    // zoom back
    zoomBack: [
        React.createElement("path", { key: 'frame', d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
        React.createElement("path", { key: 'plus', d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" }),
    ],
    fullScreen: [
        React.createElement("path", { key: 'outsideSquares', d: "M0 0h24v24H0z", fill: "none" }),
        React.createElement("path", { key: 'outsideCorners', d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" }),
    ],
    exitFullScreen: [
        React.createElement("path", { key: 'insideSquares', d: "M0 0h24v24H0z", fill: "none" }),
        React.createElement("path", { key: 'outsideCorners', d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" }),
    ],
    close: [
        React.createElement("path", { key: 'closeIcon', d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }),
        React.createElement("path", { key: 'closeButton', d: "M0 0h24v24H0z", fill: "none" }),
    ],
    // save
    save: (React.createElement("path", { d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" })),
    'close-regular': {
        component: (React.createElement("g", null,
            React.createElement("g", { transform: "translate(49.000000, 49.000000)" },
                React.createElement("rect", { transform: "translate(151.000000, 151.434283) rotate(-45.000000) translate(-151.000000, -151.434283) ", x: "133", y: "-44", width: "36", height: "390.868566" }),
                React.createElement("rect", { transform: "translate(151.000000, 151.434283) rotate(45.000000) translate(-151.000000, -151.434283) ", x: "133", y: "-44", width: "36", height: "390.868566" })))),
        viewBox: '0 0 400 400',
    },
    leads: {
        component: (React.createElement("g", { stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
            React.createElement("g", { transform: "translate(-80.000000, -183.000000)", fillRule: "nonzero" },
                React.createElement("g", { transform: "translate(15.000000, 170.000000)" },
                    React.createElement("g", { transform: "translate(65.000000, 17.000000)" },
                        React.createElement("g", null,
                            React.createElement("path", { d: "M19.1166667,15.6521739 L7.75,15.6521739 C6.89543333,15.6521739 6.2,14.949913 6.2,14.0869565 C6.2,14.0368696 6.21136667,12.8452174 7.1548,11.6713043 C7.6973,10.9972174 8.43716667,10.4629565 9.35373333,10.0831304 C10.4604333,9.624 11.8337333,9.39234783 13.4333333,9.39234783 C15.0329333,9.39234783 16.4052,9.62504348 17.5129333,10.0831304 C18.4295,10.4629565 19.1693667,10.9972174 19.7118667,11.6713043 C20.6563333,12.8452174 20.6666667,14.0368696 20.6666667,14.0869565 C20.6666667,14.949913 19.9712333,15.6521739 19.1166667,15.6521739 Z M7.23333333,14.090087 C7.23436667,14.3770435 7.46583333,14.6086957 7.75,14.6086957 L19.1166667,14.6086957 C19.4008333,14.6086957 19.6323,14.376 19.6333333,14.090087 C19.6323,14.0535652 19.6002667,13.1561739 18.8697,12.2806957 C17.8632333,11.0733913 15.9836,10.4358261 13.4333333,10.4358261 C10.8830667,10.4358261 9.00343333,11.0744348 7.99696667,12.2806957 C7.2664,13.1572174 7.23436667,14.0535652 7.23333333,14.090087 Z" }),
                            React.createElement("path", { d: "M13.4333333,8.34782609 C11.1538,8.34782609 9.3,6.47582609 9.3,4.17391304 C9.3,1.872 11.1538,0 13.4333333,0 C15.7128667,0 17.5666667,1.872 17.5666667,4.17391304 C17.5666667,6.47582609 15.7128667,8.34782609 13.4333333,8.34782609 Z M13.4333333,1.04347826 C11.7242,1.04347826 10.3333333,2.448 10.3333333,4.17391304 C10.3333333,5.89982609 11.7242,7.30434783 13.4333333,7.30434783 C15.1424667,7.30434783 16.5333333,5.89982609 16.5333333,4.17391304 C16.5333333,2.448 15.1424667,1.04347826 13.4333333,1.04347826 Z" }),
                            React.createElement("path", { d: "M4.65,15.6521739 L1.55,15.6521739 C0.695433333,15.6521739 0,14.949913 0,14.0869565 C0,14.0483478 0.00826666667,13.1196522 0.6851,12.2086957 C1.0757,11.6817391 1.6089,11.2653913 2.2692,10.9690435 C3.05866667,10.6142609 4.03413333,10.4347826 5.1677,10.4347826 C5.35266667,10.4347826 5.53556667,10.44 5.71226667,10.4493913 C5.99746667,10.4650435 6.2155,10.7102609 6.20103333,10.9982609 C6.18656667,11.2862609 5.9427,11.5074783 5.6575,11.4918261 C5.4994,11.4834783 5.3351,11.4793043 5.16873333,11.4793043 C1.14493333,11.4793043 1.0385,13.9617391 1.0354,14.0911304 C1.03643333,14.3770435 1.2679,14.6097391 1.55206667,14.6097391 L4.65206667,14.6097391 C4.93726667,14.6097391 5.16873333,14.8434783 5.16873333,15.1314783 C5.16873333,15.4194783 4.93726667,15.6532174 4.65206667,15.6532174 L4.65,15.6521739 Z" }),
                            React.createElement("path", { d: "M5.16666667,9.39130435 C3.45753333,9.39130435 2.06666667,7.98678261 2.06666667,6.26086957 C2.06666667,4.53495652 3.45753333,3.13043478 5.16666667,3.13043478 C6.8758,3.13043478 8.26666667,4.53495652 8.26666667,6.26086957 C8.26666667,7.98678261 6.8758,9.39130435 5.16666667,9.39130435 Z M5.16666667,4.17391304 C4.0269,4.17391304 3.1,5.10991304 3.1,6.26086957 C3.1,7.41182609 4.0269,8.34782609 5.16666667,8.34782609 C6.30643333,8.34782609 7.23333333,7.41182609 7.23333333,6.26086957 C7.23333333,5.10991304 6.30643333,4.17391304 5.16666667,4.17391304 Z" }))))))),
    },
    'resize-regular': {
        component: (React.createElement("g", { transform: "translate(0.000000, -10.000000)" },
            React.createElement("polygon", { transform: "translate(319.028800, 100.804257) rotate(45.000000) translate(-319.028800, -100.804257) ", points: "319.0288 56.9400268 417.723317 144.668486 220.334283 144.668486" }),
            React.createElement("polygon", { transform: "translate(100.804257, 319.028800) rotate(225.000000) translate(-100.804257, -319.028800) ", points: "100.804257 275.16457 199.498774 362.893029 2.10973956 362.893029" }),
            React.createElement("rect", { transform: "translate(216.424915, 203.265646) rotate(45.000000) translate(-216.424915, -203.265646) ", x: "196.686011", y: "59.6102934", width: "39.4778068", height: "287.310705" }))),
        viewBox: '0 0 400 400',
    },
    restore: {
        component: (React.createElement("g", { transform: "translate(2.000000, 2.000000)" },
            React.createElement("polygon", { transform: "translate(6.000000, 5.978022) rotate(45.000000) translate(-6.000000, -5.978022) ", points: "5.56043956 -2.02549434 6.43956044 -2.02549434 6.43956044 4.80212161 6 5.97802198 6.43956044 6.92599193 6.43956044 13.9815383 5.56043956 13.9815383 5.56043956 6.84405952 6 5.97802198 5.56043956 5.14443388" }),
            React.createElement("polygon", { transform: "translate(7.249401, 4.743907) rotate(-135.000000) translate(-7.249401, -4.743907) ", points: "7.24940139 2.98566512 11.2054453 6.50214864 3.29335743 6.50214864" }),
            React.createElement("polygon", { transform: "translate(4.743907, 7.249401) rotate(45.000000) translate(-4.743907, -7.249401) ", points: "4.74390688 5.49115963 8.69995084 9.00764315 0.787862925 9.00764315" }))),
        viewBox: '0 0 16 16',
    },
    minimize: {
        component: (React.createElement("rect", { transform: "translate(0, -20)", x: "60", y: "318", width: "280", height: "36" })),
        viewBox: '0 0 400 400',
    },
    expand: {
        component: React.createElement("rect", { x: "60", y: "46.359375", width: "280", height: "36" }),
        viewBox: '0 0 400 400',
    },
    'pin-up': {
        component: (React.createElement("g", { transform: "translate(94.000000, 46.000000)" },
            React.createElement("rect", { x: "90", y: "160", width: "36", height: "148" }),
            React.createElement("rect", { transform: "translate(105.500000, 160.000000) rotate(90.000000) translate(-105.500000, -160.000000) ", x: "87.5", y: "54.5", width: "36", height: "211" }),
            React.createElement("path", { d: "M43,0 L169,0 L169,148 L43,148 L43,0 Z M79,36 L79,145 L106,145 L106,36 L79,36 Z" }))),
        viewBox: '0 0 400 400',
    },
    'pin-down': {
        component: (React.createElement("g", { transform: "translate(199.500000, 200.000000) rotate(90.000000) translate(-199.500000, -200.000000) translate(94.000000, 46.000000)" },
            React.createElement("rect", { x: "90", y: "160", width: "36", height: "148" }),
            React.createElement("rect", { transform: "translate(105.500000, 160.000000) rotate(90.000000) translate(-105.500000, -160.000000) ", x: "87.5", y: "54.5", width: "36", height: "211" }),
            React.createElement("path", { d: "M43,0 L169,0 L169,148 L43,148 L43,0 Z M79,36 L79,145 L106,145 L106,36 L79,36 Z" }))),
        viewBox: '0 0 400 400',
    },
    print: {
        component: (React.createElement("g", { transform: "translate(49.000000, 50.000000)" },
            React.createElement("path", { d: "M231,99 L251,99 L251,0 L69,0 L69,99 L89,99 L89,20.1114925 L231,20.1114925 L231,99 Z" }),
            React.createElement("path", { d: "M69,209.959999 L69,229.962121 L0,229.962121 L0,113.991104 C0,105.711746 6.71525269,99 14.9908423,99 L303.009158,99 C311.288371,99 318,105.71983 318,113.991104 L318,229.962121 L250.714286,229.962121 L250.714286,209.959999 L298,209.959999 L298,133.994706 C298,125.725445 291.28618,119 283.004264,119 L34.9957363,119 C26.7170743,119 20,125.713359 20,133.994706 L20,209.959999 L69,209.959999 Z" }),
            React.createElement("path", { d: "M69,172 L250.714286,172 L250.714286,294.083333 L69,294.083333 L69,172 Z M89,192 L89,274.080002 L230.710007,274.080002 L230.710007,192 L89,192 Z" }),
            React.createElement("ellipse", { cx: "50.728223", cy: "143.757576", rx: "17.728223", ry: "17.7575758" }))),
        viewBox: '0 0 400 400',
    },
    pin: {
        component: (React.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
            React.createElement("g", { transform: "translate(-48.000000, -12.000000)", fill: "#495E85" },
                React.createElement("g", { transform: "translate(48.000000, 12.000000)" },
                    React.createElement("rect", { x: "6.583333335", y: "4.375", width: "7.83333333", height: "8.125" }),
                    React.createElement("rect", { x: "4.916666665", y: "12.5", width: "11.16666667", height: "2.0825" }),
                    React.createElement("rect", { x: "9.666666665", y: "14.5825", width: "1.66666667", height: "5.79" }))))),
    },
    collapse: {
        component: (React.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
            React.createElement("g", { transform: "translate(-19.000000, -16.000000)", fill: "#495E85" },
                React.createElement("rect", { x: "21", y: "19.5", width: "19", height: "2" })))),
    },
};
const Icon = ({ type = 'back', size = 23, viewBox = '0 0 24 24', ...rest }) => {
    // because different icons have different vieBoxes
    const icon = icons[type];
    const actialViewBox = icon.viewBox ? icon.viewBox : viewBox;
    return (React.createElement("svg", { height: size, viewBox: actialViewBox, width: size, ...rest }, icon.component || icon));
};
export default Icon;
