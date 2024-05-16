document.getElementById("change-theme").addEventListener("click", changeTheme);

function changeTheme()
{
  var checkbox = document.getElementById('change-theme');
  if (checkbox.checked == true)
  {
        console.log("theme : blue" + ` and it's boolean value is = ${checkbox.checked}`);
        document.querySelector("h1").children[0].style.color = "rgb(12, 151, 174)";
        document.getElementsByClassName("personal-info-padder")[0].children[0].children[0].style.color = "rgb(12, 151, 174)";
        document.getElementsByClassName("personal-column")[0].children[0].style.color = "rgb(12, 151, 174)";
        document.getElementsByClassName("top-banner")[0].children[0].parentElement.classList.add("bluebanner");
        document.getElementsByClassName("top-banner")[0].children[0].parentElement.classList.remove("orangebanner");
        document.getElementsByClassName("top-banner")[0].children[0].parentElement.classList.remove("bluebanner");
        document.getElementsByClassName("social-media")[0].children[0].children[0].style.color = "rgb(12, 151, 174)";
        document.getElementsByClassName("social-media")[0].children[1].children[0].style.color = "rgb(12, 151, 174)";
        document.getElementsByClassName("social-media")[0].children[2].children[0].style.color = "rgb(12, 151, 174)";
        document.getElementById("self-img").src = "shamsherkc.jpeg";
        document.getElementsByClassName("footer-section")[0].style.backgroundColor = "rgb(12, 151, 174)";
        document.getElementsByClassName("footer-section")[0].style.transition = "0.5s";
        


  } else

    {
        console.log("theme : orange" + ` and it's boolean value is = ${checkbox.checked}`);
        document.querySelector("h1").children[0].style.color = "rgb(187, 105, 18)";
        document.getElementsByClassName("personal-info-padder")[0].children[0].children[0].style.color = "rgb(187, 105, 18)";
        document.getElementsByClassName("personal-column")[0].children[0].style.color = "rgb(187, 105, 18)";
        document.getElementsByClassName("top-banner")[0].children[0].parentElement.classList.add("orangebanner");
        document.getElementsByClassName("top-banner")[0].children[0].parentElement.classList.remove("bluebanner");
        document.getElementsByClassName("social-media")[0].children[0].children[0].style.color = "rgb(187, 105, 18)";
        document.getElementsByClassName("social-media")[0].children[1].children[0].style.color = "rgb(187, 105, 18)";
        document.getElementsByClassName("social-media")[0].children[2].children[0].style.color = "rgb(187, 105, 18)";
        document.getElementById("self-img").src = "selfimg.png";
        document.getElementsByClassName("footer-section")[0].style.backgroundColor = "rgb(187, 105, 18)";
        document.getElementsByClassName("footer-section")[0].style.transition = "0.5s";
        document.getElementById('self-img').style.transition = "0.5s";
       
    }
}











