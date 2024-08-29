function openMobileNav()
{
    var mobile_links = document.getElementById("mobile_links"); 
    if(mobile_links.style.display == "block")
    {
        mobile_links.style.display = "none"; 
    }
    else
    {
        mobile_links.style.display = "block"; 
    }
}