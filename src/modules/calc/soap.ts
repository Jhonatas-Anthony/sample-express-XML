import axios from 'axios';

export async function soapRequest(url: string, headers: Record<string, string>, xml: string, timeout: number = 10000): Promise<{ response: { body: any, statusCode: number } }> {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url,
            headers,
            data: xml,
            timeout,
        }).then((response) => {
            resolve({
                response: {
                    body: response.data,
                    statusCode: response.status,
                },
            });
        }).catch((error) => {
            const errorMessage = error.response ? `SOAP fail: ${error.message}` : `SOAP FAIL: ${error.message}`;
            console.log(errorMessage);
            reject(new Error(errorMessage));
        });
    });
}