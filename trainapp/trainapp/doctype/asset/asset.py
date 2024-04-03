# Copyright (c) 2024, zezembly and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Asset(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		asset_name: DF.Data | None
		asset_price: DF.Data | None
		asset_type: DF.Data | None
		location: DF.Link | None
		room: DF.Link | None
	# end: auto-generated types

	pass
