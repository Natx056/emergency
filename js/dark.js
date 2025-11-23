const html = document.querySelector("html");
const toggleSwitch = document.querySelector("#theme-toggle");
     function toggleSwitchFn(){
       const isDark = event.target.checked === true;
       html.classList.toggle("dark", isDark)
       
}
toggleSwitch?.addEventListener("change",toggleSwitchFn)