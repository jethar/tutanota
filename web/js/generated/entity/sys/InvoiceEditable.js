"use strict";

tutao.provide('tutao.entity.sys.InvoiceEditable');

/**
 * Provides a knockout observable mechanism for a Invoice.
 * @param {tutao.entity.sys.Invoice} invoice The actual Invoice.
 * @constructor
 */
tutao.entity.sys.InvoiceEditable = function(invoice) {
	tutao.util.FunctionUtils.bindPrototypeMethodsToThis(this);
	this._entity = invoice;
	this.date = ko.observable(invoice.getDate());
	this.grandTotal = ko.observable(invoice.getGrandTotal());
	this.number = ko.observable(invoice.getNumber());
	this.paid = ko.observable(invoice.getPaid());
	this.published = ko.observable(invoice.getPublished());
	this.source = ko.observable(invoice.getSource());
	this.vat = ko.observable(invoice.getVat());

	this.lastUpdatedTimestamp = ko.observable(null);

	if (tutao.entity.sys.InvoiceExtension) {
		tutao.entity.sys.InvoiceExtension(this);
	}
};

/**
 * Provides the actual Invoice.
 * @return {tutao.entity.sys.Invoice} The Invoice.
 */
tutao.entity.sys.InvoiceEditable.prototype.getInvoice = function() {
	return this._entity;
};

/**
 * Updates the underlying Invoice with the modified attributes.
 */
tutao.entity.sys.InvoiceEditable.prototype.update = function() {
	this._entity.setDate(this.date());
	this._entity.setGrandTotal(this.grandTotal());
	this._entity.setNumber(this.number());
	this._entity.setPaid(this.paid());
	this._entity.setPublished(this.published());
	this._entity.setSource(this.source());
	this._entity.setVat(this.vat());
	this.lastUpdatedTimestamp(new Date().getTime());
};
