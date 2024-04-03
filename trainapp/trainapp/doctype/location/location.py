# Copyright (c) 2024, zezembly and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Location(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		location_name: DF.Data
		location_type: DF.Literal["1.\u0e2d\u0e32\u0e04\u0e32\u0e23", "2.\u0e20\u0e32\u0e22\u0e19\u0e2d\u0e01\u0e2d\u0e32\u0e04\u0e32\u0e23"]
	# end: auto-generated types

	pass
