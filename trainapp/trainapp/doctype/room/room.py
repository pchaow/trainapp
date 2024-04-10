# Copyright (c) 2024, zezembly and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Room(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		location: DF.Link
		room_name: DF.SmallText
	# end: auto-generated types

	pass


@frappe.whitelist()
def create_room():
	room = frappe.form_dict['room'] if 'room' in frappe.form_dict else None
	if room :
		room['doctype'] = "Room"
		doc = frappe.get_doc(room)
		doc.save()
		return doc
	
	frappe.response['http_status_code'] = 400
	return "room is missing"


@frappe.whitelist()
def get_rooms():
	keyword = frappe.form_dict['keyword'] if 'keyword' in frappe.form_dict else ''
	result = frappe.db.sql("""
		select * from `tabRoom` where room_name like %(keyword)s
						""",{ 'keyword' : f'%{keyword}%'},as_dict=True)
	return result

@frappe.whitelist(
		#allow_guest=True
		)
def chaow() :
	errors = {}
	hasError = False
	id = None
	if 'id' in frappe.form_dict :
		id = frappe.form_dict['id']
	else :
		errors['id'] = "ID is missing"
		hasError = True

	if hasError == False :
		frappe.response['id'] = id
		frappe.response['pet'] = {
			'chaow' : { 'pet' : 'cat'}
		}

		return {
			"name" : "chaow",
			"age" : 19
		}
	else :
		frappe.response['http_status_code'] = 400
		frappe.response['hasError'] = hasError
		frappe.response['errors'] = errors
		return "ERROR"