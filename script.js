document.getElementById('generate').addEventListener('click', () => {
    const url = document.getElementById('url').value;
    const qrContainer = document.getElementById('qr');
    qrContainer.innerHTML = "";
    QRCode.toCanvas(url, { width: 200 }, function (error, canvas) {
        if (error) console.error(error);
        qrContainer.appendChild(canvas);
    });
});
