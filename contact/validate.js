function isEmailAddr(email)
{
  	var result = false
  	var theStr = new String(email)
  	var index = theStr.indexOf("@");
  

  	if (index > 0)
  	{
    		var pindex = theStr.indexOf(".",index);
    		if ((pindex > index+1) && (theStr.length > pindex+1))
    		{
			result = true;
		}
  	}
  	return result;
}


function ValidateContact(form)
{

	if (form.email.value.length == 0)
	{
		alert ("Please enter an email address");
		form.email.focus();
		return false;
	}
	
	if (form.email.value.length > 0)
	{
		if (!(isEmailAddr(form.email.value)))
		{
			alert ("The email address is not valid, please re-enter");
			form.email.focus();
			return false;
		}
	}

	if (form.message.value.length == 0)
	{
		alert ("Please enter a message");
		form.message.focus();
		return false;
	}

	if (form.title.value.length > 0)
	{
		location.href = "http://www.janeandrichard.co.uk/contact/thanks.html";
		return false;	
	}
		
	return true;
}
