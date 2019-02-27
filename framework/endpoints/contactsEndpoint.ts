import * as request from "superagent";
import {IContactInfoModel} from "../models";
import {BaseEndpoint} from "./baseEndpoint";

export class ContactsEndpoint extends BaseEndpoint {
    constructor() {
        const uniformResourceName = "/api/v1/contacts";
        super(uniformResourceName);
    }

    public async getContactByItsInfo(contactInfo: IContactInfoModel): Promise<request.Response> {
        super.additionalUrn = this.getUrnByContactInfo(contactInfo);
        return await this.sendGet();
    }

    private getUrnByContactInfo(contactInfo: IContactInfoModel): string {
        // building url using parameters name and values
        let paramsUrl = "";
        for (const contactProperty in contactInfo) {
            const dividingSign = this.getDividingSign(paramsUrl);
            const contactUrlPart = `${dividingSign}${contactProperty.toLowerCase()}=${contactInfo[contactProperty]}`;
            paramsUrl += contactUrlPart;
        }

        return paramsUrl;
    }

    private getDividingSign(paramsUrl: string): string {
        return paramsUrl === ""
            ? "?"
            : "&";
    }
}