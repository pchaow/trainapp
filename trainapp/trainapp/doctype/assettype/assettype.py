# Copyright (c) 2024, zezembly and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class AssetType(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		asset_type: DF.Literal["\u0e27\u0e31\u0e2a\u0e14\u0e38", "\u0e04\u0e23\u0e38\u0e20\u0e31\u0e13\u0e11\u0e4c", "\u0e2d\u0e32\u0e04\u0e32\u0e23\u200b"]
		type_name: DF.Data
	# end: auto-generated types

	pass
