import {
	INodeProperties,
 } from 'n8n-workflow';

export const contactGroupOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'contactGroup',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'create a contact',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a contact',
			},
		],
		default: 'create',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const contactGroupFields = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'contactGroup',
				],
				operation: [
					'create',
					'get',
				],
			},
		},
		required: true,
	},
] as INodeProperties[];
