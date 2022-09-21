const dateHour = document.querySelector("#dateHour");
try{
  var d = new Date();
  dateHour.innerHTML = `${(new Date()).toLocaleDateString()} ${d.toLocaleTimeString('en-US', { hour12: false })}`;

} catch (e) {
  alert("Browser does not support Locale")
}