// Copyright (c) 2024, zezembly and contributors
// For license information, please see license.txt

frappe.ui.form.on("Room", {
	refresh(frm) {
        console.log(frm)

        frm.set_query('location',function(){
            return {
                "filters" : {
                    'location_type' : '1.อาคาร'
                }
            }
        })

	},
});
