from django.shortcuts import render,redirect
from .forms import SignupForm


# Create your views here.


# def login(request):

#     return render(request, 'index.html')

def registration(request):
    if request.method == 'POST':
        form = SignupForm(request.POST)

        if form.is_valid():
            form.save()
            return redirect('/login/')
    else:
        form = SignupForm()

    form = SignupForm()

    return render(request, 'registration.html',{
        'form' : form
    })

