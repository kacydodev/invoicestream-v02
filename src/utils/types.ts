import { z } from 'zod';

export const themeType = ['light', 'dark'];
export type ThemeType = (typeof themeType)[number];

// export const status = ['draft', 'pending', 'paid'];
// export type StatusType = (typeof status)[number];

export const Status = z.enum(['draft', 'pending', 'paid']);

export const InvoiceFull = z.object({
	id: z.uuid(),
	secondaryId: z.string(),
	createdAt: z.iso.datetime(),
	updateAt: z.optional(z.iso.datetime()),
	description: z.string(),
	paymentTerm: z.optional(z.int()),
	paymentDue: z.optional(z.iso.datetime()),
	status: Status,
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

export const ClientRow = z.object({
	name: z.string(),
});
export const InvoiceRow = z.object({
	id: z.uuid(),
	secondaryId: z.string(),
	description: z.optional(z.string()),
	paymentDue: z.optional(z.iso.datetime()),
	status: Status,
	client: ClientRow,
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

export const InvoiceForm = z.object({
	// id: z.uuid(),
	secondaryId: z.optional(z.string().min(6)),
	// createdAt: z.iso.datetime(),
	// updateAt: z.optional(z.iso.datetime()),
	description: z.optional(z.string().min(3)),
	paymentTerm: z.optional(z.int()),
	paymentDue: z.optional(z.iso.datetime()),
	status: z.optional(Status),
	// client: Client,
	// items: Item,
	// total: z.optional(z.float64()),
});
export const InvoiceFormId = InvoiceForm.keyof();

export type StatusType = z.infer<typeof Status>;
export type InvoiceRowType = z.infer<typeof InvoiceRow>;
export type InvoiceFormType = z.infer<typeof InvoiceForm>;
export type InvoiceFormIdType = z.infer<typeof InvoiceFormId>;
