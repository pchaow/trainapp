import frappe

def get_context(context):

    rooms = frappe.get_all("Room",fields='*')


    context['XYZ'] = "AAAAAAA"
    context['rooms'] = rooms
    pass
