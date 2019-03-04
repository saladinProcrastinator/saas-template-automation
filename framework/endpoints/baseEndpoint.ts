import * as chai from "chai";
import * as request from "superagent";
import {
    ContentType,
    IContentType,
    String,
} from "../index";
import {HttpResuestsLogger} from "../../loggers/httpRequestsLogger/httpResuestsLogger";

export class BaseEndpoint {

    public static get contentTypeJson(): IContentType {
        return {name: "Content-Type", value: ContentType.APPLICATION_JSON} as IContentType;
    }

    public static get contentTypeWadlXml(): IContentType {
        return {name: "Content-Type", value: ContentType.WADL_XML} as IContentType;
    }

    constructor(public baseUrn: string) {
    }

    public async sendGet(additionalUrn: string = String.Empty,
                         contentType: IContentType = BaseEndpoint.contentTypeJson): Promise<request.Response> {

        const url = process.env.SAAS_TEMPLATE + this.baseUrn + additionalUrn;
        HttpResuestsLogger.LogRequest("GET", url, undefined, contentType);

        return await chai
            .request(process.env.SAAS_TEMPLATE)
            .get(this.baseUrn + additionalUrn)
            .set(contentType.name, contentType.value)
            .send()
            .then((response) => {
                HttpResuestsLogger.LogResponse(response);
                return response;
            });
    }

    public async sendPost(additionalUrn: string = String.Empty,
                          body?: string,
                          contentType: IContentType = BaseEndpoint.contentTypeJson): Promise<request.Response> {

        const url = process.env.SAAS_TEMPLATE + this.baseUrn + additionalUrn;
        HttpResuestsLogger.LogRequest("POST", url, body, contentType);

        return await chai
            .request(process.env.SAAS_TEMPLATE)
            .post(this.baseUrn)
            .set(contentType.name, contentType.value)
            .send(body)
            .then((response) => {
                HttpResuestsLogger.LogResponse(response);
                return response;
            });
    }

    public async sendPut(additionalUrn: string = String.Empty,
                         body?: string,
                         contentType: IContentType = BaseEndpoint.contentTypeJson): Promise<request.Response> {

        const url = process.env.SAAS_TEMPLATE + this.baseUrn + additionalUrn;
        HttpResuestsLogger.LogRequest("PUT", url, body, contentType);

        return await chai
            .request(process.env.SAAS_TEMPLATE)
            .put(this.baseUrn + additionalUrn)
            .set(contentType.name, contentType.value)
            .send(body)
            .then((response) => {
                HttpResuestsLogger.LogResponse(response);
                return response;
            });
    }

    public async sendPatch(additionalUrn: string = String.Empty,
                           body?: string,
                           contentType: IContentType = BaseEndpoint.contentTypeJson): Promise<request.Response> {

        const url = process.env.SAAS_TEMPLATE + this.baseUrn + additionalUrn;
        HttpResuestsLogger.LogRequest("PATCH", url, body, contentType);

        return await chai
            .request(process.env.SAAS_TEMPLATE)
            .patch(this.baseUrn + additionalUrn)
            .set(contentType.name, contentType.value)
            .send(body)
            .then((response) => {
                HttpResuestsLogger.LogResponse(response);
                return response;
            });
    }

    public async sendDelete(additionalUrn: string = String.Empty,
                            contentType: IContentType = BaseEndpoint.contentTypeJson): Promise<request.Response> {

        const url = process.env.SAAS_TEMPLATE + this.baseUrn + additionalUrn;
        HttpResuestsLogger.LogRequest("DELETE", url, undefined, contentType);

        return await chai
            .request(process.env.SAAS_TEMPLATE)
            .delete(this.baseUrn + additionalUrn)
            .set(contentType.name, contentType.value)
            .send()
            .then((response) => {
                HttpResuestsLogger.LogResponse(response);
                return response;
            });
    }

    public async sendOptions(additionalUrn: string = String.Empty,
                             contentType: IContentType = BaseEndpoint.contentTypeJson): Promise<request.Response> {

        const url = process.env.SAAS_TEMPLATE + this.baseUrn + additionalUrn;
        HttpResuestsLogger.LogRequest("OPTIONS", url, undefined, contentType);

        return await chai
            .request(process.env.SAAS_TEMPLATE)
            .options(this.baseUrn + additionalUrn)
            .set(contentType.name, contentType.value)
            .send()
            .then((response) => {
                HttpResuestsLogger.LogResponse(response);
                return response;
            });
    }

    public async sendHead(additionalUrn: string = String.Empty,
                          contentType: IContentType = BaseEndpoint.contentTypeJson): Promise<request.Response> {

        const url = process.env.SAAS_TEMPLATE + this.baseUrn + additionalUrn;
        HttpResuestsLogger.LogRequest("HEAD", url, undefined, contentType);

        return await chai
            .request(process.env.SAAS_TEMPLATE)
            .head(this.baseUrn + additionalUrn)
            .set(contentType.name, contentType.value)
            .send()
            .then((response) => {
                HttpResuestsLogger.LogResponse(response);
                return response;
            });
    }

    public async sendTrace(additionalUrn: string = String.Empty,
                           contentType: IContentType = BaseEndpoint.contentTypeJson): Promise<request.Response> {

        const url = process.env.SAAS_TEMPLATE + this.baseUrn + additionalUrn;
        HttpResuestsLogger.LogRequest("TRACE", url, undefined, contentType);

        return await chai
            .request(process.env.SAAS_TEMPLATE)
            .trace(this.baseUrn + additionalUrn)
            .set(contentType.name, contentType.value)
            .send()
            .then((response) => {
                HttpResuestsLogger.LogResponse(response);
                return response;
            });
    }
}
