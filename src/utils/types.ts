import { z } from 'zod';
import type { SetURLSearchParams } from 'react-router';

export const themeType = ['light', 'dark'];
export type ThemeType = (typeof themeType)[number];

export const status = ['draft', 'pending', 'paid'];
export type StatusType = (typeof status)[number];

export interface DashboardPropsInterface {
	params?: URLSearchParams;
	setParams: SetURLSearchParams;
}

const statusZod = z.enum(['draft', 'pending', 'paid']);

export const InvoiceFull = z.object({
	id: z.uuid(),
	secondaryId: z.string(),
	createdAt: z.iso.datetime(),
	updateAt: z.optional(z.iso.datetime()),
	description: z.string(),
	paymentTerm: z.optional(z.int()),
	paymentDue: z.optional(z.iso.datetime()),
	status: statusZod,
	client: {
		id: z.uuid(),
		name: z.string(),
		email: z.email(),
		addres: z.string(),
	},
	items: {
		id: z.uuid(),
		title: z.string(),
		quantity: z.int32(),
		price: z.float32(),
	},
	total: z.optional(z.float64()),
});
export const Invoice = z.object({
	secondaryId: z.string(),
	description: z.optional(z.string()),
	paymentDue: z.optional(z.iso.datetime()),
	status: statusZod,
	client: { name: z.string() },
	total: z.optional(z.float64()),
});
export const Client = z.object({
	id: z.uuid(),
	name: z.string(),
	email: z.email(),
	addres: z.string(),
});
export const Item = z.object({
	id: z.uuid(),
	title: z.string(),
	quantity: z.int32(),
	price: z.float32(),
});
