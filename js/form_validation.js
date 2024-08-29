
function checkPassword(password)
{
    if(password.length < 8)return false; 
    var isNum = false;
    var isAlpha = false; 

    for(var i = 0; i < password.length; i++)
    {
        if(isNaN(password[i]))
        {
            isAlpha = true; 
        }
        else
        {
            isNum = true;
        }

        if(isAlpha && isNum)
        {
            return true;
        }
    }
    return false; 
}

function validateForm(event)
{
    event.preventDefault(); 
    console.log("clicked"); 
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var checked = document.getElementById("checked").checked;
    var country = document.getElementById("country").value;

    var alert_uname = document.getElementById("alert_uname"); 
    var alert_email = document.getElementById("alert_email");
    var alert_pass = document.getElementById("alert_pass"); 
    var alert_checked = document.getElementById("alert_checked");
    var alert_country = document.getElementById("alert_country"); 
    var success_message = document.getElementById("success_message");
    let count = 0; 
    if(username == "")
    {
        alert_uname.style.display = "block";
    }
    else
    {
        alert_uname.style.display = "none";
        count++; 
    }
    if(!email.endsWith("@gmail.com"))
    {
        alert_email.style.display = "block"; 
    }
    else
    {
        alert_email.style.display = "none"; 
        count++; 
    }
    if(!checkPassword(password))
    {
        alert_pass.style.display = "block";
    }
    else
    {
        alert_pass.style.display = "none";
        count++; 
    }
    if(!checked)
    {
        alert_checked.style.display = "block"; 
    }
    else
    {
        alert_checked.style.display = "none"; 
        count++; 
    }
    if(country == "empty")
    {
        alert_country.style.display = "block"; 
    }
    else
    {
        alert_country.style.display = "none"; 
        count++; 
    }
    if(count == 5)
    {
        success_message.style.display = "block";
    }
}