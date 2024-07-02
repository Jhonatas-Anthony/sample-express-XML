import { parseStringPromise } from 'xml2js';
import soapRequest from 'easy-soap-request';

export class CalcService {
  private apiUrl = "http://www.dneonline.com/calculator.asmx";

  async add(intA: number, intB: number) {
    const sampleHeaders = {
      'user-agent': 'sampleTest',
      'Content-Type': 'text/xml;charset=UTF-8',
      soapAction: 'http://tempuri.org/Add',
    };
    const soapEnvelope = `
          <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
            <soap:Body>
              <Add xmlns="http://tempuri.org/">
                <intA>${intA}</intA>
                <intB>${intB}</intB>
              </Add>
            </soap:Body>
          </soap:Envelope>
        `;
        
    const { response } = await soapRequest({ url: this.apiUrl, headers: sampleHeaders, xml: soapEnvelope });

    const { body } = response;
    const parsed = await parseStringPromise(body);
    const result = parsed['soap:Envelope']['soap:Body'][0]['AddResponse'][0]['AddResult'][0];
    const formatedResult = parseFloat(result)

    return formatedResult;
  }

  async subtract(intA: number, intB: number) {
    const sampleHeaders = {
      'user-agent': 'sampleTest',
      'Content-Type': 'text/xml;charset=UTF-8',
      soapAction: 'http://tempuri.org/Subtract',
    };
    const soapEnvelope = `
          <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
            <soap:Body>
              <Subtract xmlns="http://tempuri.org/">
                <intA>${intA}</intA>
                <intB>${intB}</intB>
              </Subtract>
            </soap:Body>
          </soap:Envelope>
        `;

    const { response } = await soapRequest({ url: this.apiUrl, headers: sampleHeaders, xml: soapEnvelope });

    const { body } = response;
    const parsed = await parseStringPromise(body);

    const result = parsed['soap:Envelope']['soap:Body'][0]['SubtractResponse'][0]['SubtractResult'][0];
    const formatedResult = parseFloat(result)

    return formatedResult;
  }
}
