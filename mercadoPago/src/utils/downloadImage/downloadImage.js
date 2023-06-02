import html2canvas from 'html2canvas';

export const handleImageFromElement = async (
    element,
    imageName,
    format,
    download
) => {
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL(format);
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
        link.href = data;
        link.download = imageName;

        document.body.appendChild(link);
        if (download) {
            link.click();
        } else {
            const blob = dataURLtoBlob(data);
            const filesArray = [
                new File([blob], imageName, { type: blob.type, lastModified: Date.now() }),
            ]
            const shareData = {
                title: imageName,
                files: filesArray,
            }
            if (navigator.canShare && navigator.canShare(shareData)) {
                navigator.share(shareData).then(() => {
                    console.log('Thanks for sharing!');
                })
                    .catch(console.error);
            }
        }
        document.body.removeChild(link);
    } else {
        window.open(data);
    }
};
function dataURLtoBlob(data) {
    const parts = data.split(';base64,');
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
}