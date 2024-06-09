export const handleError = (error) => {
    if (error) {
        alert(error.message);
    }
}

export const parseUserAgent = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    let os = 'Unpopular OS';
    let deviceType = 'Unpopular Device';

    if (userAgent.includes('windows')) {
        os = 'Windows';
    } else if (userAgent.includes('android')) {
        os = 'Android';
    } else if (userAgent.includes('linux')) {
        os = 'Linux';
    } else if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('ipod')) {
        os = 'iOS';
    } else if (userAgent.includes('mac')) {
        os = 'macOS';
    }

    if (userAgent.includes('mobile')) {
        deviceType = 'Mobile';
    } else if (userAgent.includes('tablet')) {
    deviceType = 'Tablet';
    } else {
        deviceType = 'Desktop';
    }

    return `${deviceType} device with ${os} OS`;
}

export const API_KEY = '47917541';
export const SESSION_ID = '1_MX40NzkxNzU0MX5-MTcxNzg3MjAwNjIxN35oeTFsUFg0anhRaDUwVURmbzJudWo4MXV-fn4';
export const TOKEN = 'T1==cGFydG5lcl9pZD00NzkxNzU0MSZzaWc9YmNiNTJkMzI1Mzk1NzUyN2NiNGIxOTIwNzQ4N2M2MTM4NzA0ZTA2NDpzZXNzaW9uX2lkPTFfTVg0ME56a3hOelUwTVg1LU1UY3hOemczTWpBd05qSXhOMzVvZVRGc1VGZzBhbmhSYURVd1ZVUm1iekp1ZFdvNE1YVi1mbjQmY3JlYXRlX3RpbWU9MTcxNzg3MjAyNyZub25jZT0wLjgzMTU5ODAwMjE0MDA0OCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNzIwNDY0MDI2JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9';
