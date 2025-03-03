import {
	OptionsWithUri,
 } from 'request';

import {
	IExecuteFunctions,
	IExecuteSingleFunctions,
	ILoadOptionsFunctions,
} from 'n8n-core';

import {
	IDataObject, NodeApiError,
} from 'n8n-workflow';

export async function xeroApiRequest(this: IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, method: string, resource: string, body: any = {}, qs: IDataObject = {}, uri?: string, headers: IDataObject = {}): Promise<any> { // tslint:disable-line:no-any
	// when this function is called in loops with multiple items, deleting the organizationId from the body
	// causes authentication errors, but keeping it in the body causes errors when creating a contact (or other such one-off requests).
	// this ensures the organizationId is preserved, and also kept out of the body of the request
	const { organizationId, ...bodyCopy } = body;

	const options: OptionsWithUri = {
		headers: {
			'Content-Type': 'application/json',
		},
		method,
		body: bodyCopy,
		qs,
		uri: uri || `https://api.xero.com/api.xro/2.0${resource}`,
		json: true,
	};
	try {
		if (body.organizationId) {
			options.headers = { ...options.headers, 'Xero-tenant-id': body.organizationId };
		}
		if (Object.keys(headers).length !== 0) {
			options.headers = Object.assign({}, options.headers, headers);
		}
		if (Object.keys(bodyCopy).length === 0) {
			delete options.body;
		}
		//@ts-ignore
		return await this.helpers.requestOAuth2.call(this, 'xeroOAuth2Api', options);
	} catch (error) {
		throw new NodeApiError(this.getNode(), error);
	}
}

export async function xeroApiRequestAllItems(this: IExecuteFunctions | ILoadOptionsFunctions, propertyName: string ,method: string, endpoint: string, body: any = {}, query: IDataObject = {}): Promise<any> { // tslint:disable-line:no-any

	const returnData: IDataObject[] = [];

	let responseData;
	query.page = 1;

	do {
		responseData = await xeroApiRequest.call(this, method, endpoint, body, query);
		query.page++;
		returnData.push.apply(returnData, responseData[propertyName]);
	} while (
		responseData[propertyName].length !== 0
	);

	return returnData;
}
