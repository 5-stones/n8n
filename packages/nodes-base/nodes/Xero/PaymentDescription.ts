import {
	INodeProperties,
 } from 'n8n-workflow';

export const paymentOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'payment',
				],
			},
		},
		options: [
			{
				name: 'Create Batch',
				value: 'createBatch',
				description: 'create a payment batch',
			},
		],
		default: 'createBatch',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const paymentFields = [

/* -------------------------------------------------------------------------- */
/*                                payment:createBatch                              */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'Organization ID',
		name: 'organizationId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getTenants',
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'payment',
				],
				operation: [
					'createBatch',
				],
			},
		},
		required: true,
	},
	{
		displayName: 'Reference',
		name: 'reference',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'payment',
				],
				operation: [
					'createBatch',
				],
			},
		},
		required: true,
	},
	{
		displayName: 'Account',
		name: 'account',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getAccountCodes',
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'payment',
				],
				operation: [
					'createBatch',
				],
			},
		},
		required: true,
	},
	{
		displayName: 'Payments',
		name: 'payments',
		type: 'json',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'payment',
				],
				operation: [
					'createBatch',
				],
			},
		},
		required: true,
	},
] as INodeProperties[];
