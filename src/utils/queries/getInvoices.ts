import { supabase } from '../supabaseClient';

type StatusType = 'paid' | 'pending' | 'draft';

export async function getInvoices() {
	const { data: invoices } = await supabase
		.from('invoices_v02')
		.select(
			`
    id, status, invoice_id, payment_due, total,
    customer: customers_v02 (name), 
    invoice_items: invoice_line_items_v02 (quantity, products: products_v02 (product_prices: product_prices_v02 (price, currency)))
    `
		)
		.throwOnError();
	return invoices;
}

export async function getInvoicesByStatus(status: StatusType) {
	return supabase
		.from('invoices_v02')
		.select(
			`
    status, invoice_id,
    customer: customers_v02 (name), 
    invoice_items: invoice_line_items_v02 (quantity, products: products_v02 (product_prices: product_prices_v02 (price, currency)))
    `
		)
		.eq('status', status);
}
