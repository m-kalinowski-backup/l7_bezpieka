from django import forms
from .models import Transfer


class TransferValidationForm(forms.ModelForm):
	class Meta:
		model = Transfer
		fields = ['title', 'content','value','account']
