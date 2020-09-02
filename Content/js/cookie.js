/** VI KAN KONFIGURER FLG. OPLYSNINGER HER */
let purecookieTitle = "Data bidrager til oplevelsen"; // Titel
let purecookieDesc = "Vores kvalitetsindhold er direkte afhængigt af de data vi kan behandle fra dig. Vi og vores samarbejdspartnere bruger bl.a. data til at skræddersy indhold og reklamer på baggrund af din brug af vores website.<br /><br />Se yderligere info under persondatapolitik.<br /><br />Du kan altid ændre dine indstillinger herunder trække dit samtykke tilbage ved at klikke på link til ”Cookie indstillinger” nederst på siderne. Dine valg anvendes på hele websitet.<br />"; // Beskrivelse
let purecookieAccept = "TILLAD ALLE COOKIES"; // Tekst på knappen
let purecookieReject = "KUN NØDVENDIGE COOKIES"; // Tekst på knappen
let purecookieLink1 = '<a href="privacy.html" target="_blank">Om cookies</a><br /><br />'; // Link til cookiepolitik


/** Vi implementerer vores cookie til vores HTML */
function pureFadeIn(elem, display){
  let el = document.getElementById(elem);
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    let val = parseFloat(el.style.opacity);
    if (!((val += .02) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
};
function pureFadeOut(elem){
  let el = document.getElementById(elem);
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .02) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
};


/** Først opretter vi en funktion, der gemmer besøgende navn i en cookie variabel 
 * Parametrene til funktionen nedenfor er navnet på cookien (name), værdien af ​​cookien (value) og antallet af dage, indtil cookien skal udløbe (days). Funktionen indstiller en cookie ved at tilføje cookiename, cookie-værdien og den udløber streng. */
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString(); 
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
/** Returner en dato som er konverteret til en string ved brug af Universal Coordinated Time (UTC) */

/** Tag cookie name som parameter (name).
Opret en variabel (navn) med teksten, der skal søges efter (name + "=").
Afkode cookie-strengen for at håndtere cookies med specialtegn, f.eks. '$'
Del document.cookie på semikoloner i en matrix kaldet ca (ca = decodedCookie.split (';')).
Loop igennem ca-arrayet (i = 0; i <ca.length; i ++), og læs hver værdi c = ca [i]).
Hvis cookien findes (c.indexOf (name) == 0), skal du returnere værdien på cookien (c.substring (name.length, c.length).
Hvis cookien ikke findes, return null eller "". */

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

function cookieConsent() {
  if (!getCookie('purecookieDismiss')) {
    document.body.innerHTML += '<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieTitle"><a>' + purecookieTitle + '</a></div><div class="cookieDesc"><p>' + purecookieDesc + '</p></div><div class="cookieDesc"><p>' + purecookieLink1 + '</p></div><div class="cookieRejectButton"><a onClick="purecookieDismiss();">' + purecookieReject + '</a></div><div class="cookieButton"><a onClick="purecookieDismiss();">' + purecookieAccept + '</a></div>';
	pureFadeIn("cookieConsentContainer");
  }
}

function purecookieDismiss() {
  setCookie('purecookieDismiss','1',7);
  pureFadeOut("cookieConsentContainer");
  Set-Cookie; flavor=choco; SameSite=None; Secure;
}

window.onload = function() { cookieConsent(); };