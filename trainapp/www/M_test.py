import frappe

def get_context(context):

    room = frappe.get_all('Room',fields="")


    context['XYZ']="xxx"
    context['room']=room
    pass