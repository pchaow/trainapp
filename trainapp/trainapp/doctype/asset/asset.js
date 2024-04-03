// Copyright (c) 2024, zezembly and contributors
// For license information, please see license.txt

frappe.ui.form.on("Asset", {
	refresh(frm) {

        if (!frm.doc.location){
            frm.toggle_display("room",false)
        }
	},
    async validate (frm) {
        console.log(frm)
        let location = frm.doc.location
        let locationDoc = await frappe.db.get_doc("Location",location)
        console.log(locationDoc)

    },
    async location(frm) {
        // console.log(frm)
        let location = frm.doc.location
        let locationDoc = await frappe.db.get_doc("Location",location)
        console.log(locationDoc)
        hide_show_room_by_location(frm,locationDoc)
        // เช็คว่าค่าเดิมยังใช้ได้หรือไม่
        if(frm.doc.room){
            let roomDoc = await frappe.db.get_doc("Room",frm.doc.room)
            if (roomDoc.location != location){
                frm.set_value("room",null)
            }

        }
    }
});

function hide_show_room_by_location(frm,locationDoc){
    let isOutside = locationDoc.location_type == "2.ภายนอกอาคาร"
    if (isOutside){
        //hide room
        frm.toggle_display("room",false)
        frm.toggle_reqd('room',false)
        frm.set_value("room",null)
    }else {
        //show room
        frm.toggle_reqd('room',true)
        frm.toggle_display("room",true)
        frm.set_query("room",()=>{
            return {
                filters : {
                    "location" : frm.doc.location
                }
            }
        })
    }
}