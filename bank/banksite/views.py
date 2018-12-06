from django.shortcuts import render, redirect,reverse
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect
from django.db import connection
import simplejson
from .models import Transfer
from .forms import TransferValidationForm
from .tables import HistoryTable
from django_tables2 import RequestConfig

def home(request):
	return render(request, 'banksite/home.html')

def about(request):
	return render(request, 'banksite/about.html', {'title':'About'})

def forgery(request):
	return render(request, 'banksite/forgery.html')


@login_required
def transfers(request):
	context = {
		'transfers': Transfer.objects.filter(sender=request.user).values()
	}
	return render(request, 'banksite/transfers.html',context)

@login_required
def transfer_summary(request):
	if request.session.get('status') == 'confirmed' :
		del request.session['status']
		data = {"title": request.session['title'], "content":request.session['content'], \
		"value": request.session['value'], "account":request.session['account']}
		return render(request,"banksite/transfer-summary.html",data)

	else:
		return redirect(request,'banksite-transfer')


@login_required
def transfer_confirm(request):
	if request.method == 'POST':
		confirmation = request.POST.get('confirmed')
		title = request.POST.get('title')
		content = request.POST.get('content')
		value = request.POST.get('value')
		account = request.POST.get('account')
		transfer = Transfer(title = title, content = content,\
		value = value, sender = request.user, account = account,confirmed=confirmation)
		transfer.save()
		request.session['status'] = 'confirmed'
		request.session['title'] = transfer.title
		request.session['content'] = transfer.content
		request.session['value'] = transfer.value
		request.session['account'] = transfer.account
		return redirect('banksite-transfer-summary')

	if request.session.get('status') == 'posted':
		del request.session['status']
		data = {"title": request.session['title'], "content":request.session['content'], \
		"value": request.session['value'], "account":request.session['account']}
		return render(request,"banksite/transfer-confirm.html",data)

	else:
		return redirect('banksite-transfer')


@login_required
def transfer(request):
	if request.method == 'POST':
		if request.POST.get('confirmation') == 'false':
			form = TransferValidationForm(request.POST)
			if form.is_valid():
				transfer = form.save(commit=False)
				request.session['title'] = transfer.title
				request.session['content'] = transfer.content
				request.session['value'] = transfer.value
				request.session['account'] = transfer.account
				request.session['status'] = 'posted'
				return redirect('banksite-transfer-confirm')
			else:
				return render(request, 'banksite/transfer.html', {'form':form})
	else:
		form = TransferValidationForm()
		return render(request, 'banksite/transfer.html', {'form': form})



@login_required(login_url='/login/')
def find_transfer(request):
    if request.method == 'POST':
        user = request.user.id
        account = request.POST.get('account').split(";")
        query = "SELECT * FROM banksite_transfer WHERE banksite_transfer.sender_id={} AND banksite_transfer.account={}".format(user,account[0])
        model_items = Transfer.objects.raw(query)

        for i in range(1, len(account)):
            q = account[i]
            cursor = connection.cursor()
            cursor.execute(q)

    else:
        model_items = Transfer.objects.filter(sender=request.user)

    history_table = HistoryTable(model_items)
    RequestConfig(request).configure(history_table)
    return render(request, 'banksite/find_transfer.html', {'history_table': history_table})
