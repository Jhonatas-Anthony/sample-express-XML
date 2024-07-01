/* import { MathExpression } from './CalcModel';
import { Request, Response } from 'express'; */
//import axios from "axios";
import { parseStringPromise } from "xml2js";
//import * as soup from 'soap'
//import * as fs from "fs";
/* import { soapRequest } from './soap'

import * as parser from 'fast-xml-parser';

const parserEx = new parser.XMLParser(); */

//const parser = new DOMParser();

export class CalcService {
    private apiUrl = "http://www.dneonline.com/calculator.asmx?wsdl";

    /* async add(a: number, b: number): Promise<number> {
      const headers = {
        "Content-Type": "text/xml; charset=utf-8",
        SOAPAction: "http://tempuri.org/Add",
      };
  
      const xmlRequest = `
                      <?xml version="1.0" encoding="utf-8"?>
                      <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
                          <soap:Body>
                              <Add xmlns="http://tempuri.org/">
                                  <intA>${a}</intA>
                                  <intB>${b}</intB>
                              </Add>
                          </soap:Body>
                      </soap:Envelope>
                  `;
  
      console.log(xmlRequest);
  
      try {
        console.log("1");
        const response = await axios.post(this.apiUrl, xmlRequest, { headers });
        console.log(response.data);
        const result = await parseStringPromise(response.data, {
          explicitArray: false,
        });
        const addResult = result['soap:Envelope']['soap:Body']['AddResponse']['AddResult'];
  
        return parseFloat(addResult);
      } catch (error) {
        console.error("Error calling Add method:", error);
        throw new Error("Failed to call Add method");
      }
    } */

    async add(a: number, b: number) {
        const addUrl = './src/modules/calc/XML/add.xml'

        const headers = {
            "Content-Type": "text/xml; charset=utf-8",
            SOAPAction: "http://tempuri.org/Add",
        };

        const xmlRequestRaw = `
        <?xml version="1.0" encoding="utf-8"?>
        <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
            <soap:Body>
                <Add xmlns="http://tempuri.org/">
                    <intA>${a}</intA>
                    <intB>${b}</intB>
                </Add>
            </soap:Body>
        </soap:Envelope>`;

        const xmlRequestFormated = parseStringPromise(xmlRequestRaw);

        console.log(xmlRequestFormated)

        /* const xml = fs.readFileSync(addUrl, 'utf-8');

        const modifiedXML = xml
            .replace('<intA>intAA</intA>', `<intA>${a}</intA>`)
            .replace('<intB>intBB</intB>', `<intB>${b}</intB>`);

        fs.writeFile(addUrl, modifiedXML, 'utf-8', (err) => {
            if (err) {
                console.error('Erro ao escrever no arquivo:', err);
                return;
            }
            console.log('Arquivo XML modificado com sucesso!');
        }); */

       /*  try {
            const { response } = await soapRequest(this.apiUrl, headers, xml); // Optional timeout parameter(milliseconds)
            const { body } = response;
            const parsedResponse = parserEx.parse(body); // parse body xml
            const addResult = parsedResponse['soap:Envelope']['soap:Body']['AddResponse']['AddResult'];
            return addResult
        } catch (err: any) {
            console.error(err);
        } */

    }
}
