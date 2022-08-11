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
				description: 'create a contact group',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a contact group',
			},
			{
				name: 'Add Contact',
				value: 'add',
				description: 'Add a contact to a group',
			},
			{
				name: 'Remove Contact',
				value: 'remove_contact',
				description: 'Remove Contact from Group',
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
					'contactGroup',
				],
				operation: [
					'create',
					'get',
					'add',
					'remove_contact',
				],
			},
		},
		required: true,
	},
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'contactGroup',
				],
				operation: [
					'add',
				],
			},
		},
		required: true,
	},
	{
		displayName: 'Contact Group ID',
		name: 'contactGroupId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'contactGroup',
				],
				operation: [
					'add',
					'remove_contact',
				],
			},
		},
		required: true,
	},
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'contactGroup',
				],
				operation: [
					'remove_contact',
				],
			},
		},
	},
] as INodeProperties[];
