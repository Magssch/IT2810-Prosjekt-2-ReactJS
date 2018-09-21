# it2810-webutvikling-h18-prosjekt-2-gruppe--46

- Dette prosjektet bygger en nettside som tillater brukeren å velge mellom tre ulike kategorier innen lyd, bilde og tekst. Basert på brukerens kombinasjon vil nettsiden vise fire ulike "gallerier", hver med unikt bilde, lyd og tekst. Prosjektet er skrevet i React og tar i bruk AJAX for innlasting av bilder og tekst. 

- Gruppen består av Viktor Solberg, Magnus Schjølberg og Åsmund Haugse. Prosjektet er prosjekt 2 i IT2810, webutvikling.
#

## Krav til funksjonalitet, design og layout
- Siden vår er strukturert med en bar øverst som inneholder tittel og en hamburgermeny. Ved å trykke på hamburgermenyen dukker det opp en sidetabbel som lar brukeren velge mellom de forskjellige kategoriene. Videre har siden en bar som inneholder de ulike fanene. Resten av nettsiden består av en content-komponent som inneholder bilde, tekst og lydenhet.
- Siden tillater brukeren å generere en utstilling med fire forskjellige kombinasjoner av tekst, lyd å bilde ved å justere på fanene og kategoriene. Når brukeren først ankommer siden vil en av hver kategori være forhåndsvalgt.
- Siden er responsiv ved at den skalerer bilde, tabs, tittel og sidepanel etter størelse på skjermen. I tillegg vil teksten enten befinne seg til høyre for bildet eller under bildet, avhengig av skjermstørrelse. Dette har vi gjort ved hjelp av mediaqueries, viewport og Flexbox. 
- Vi har stylet siden slik at den har forskjellig tekst-font på windows og mac sine operativsystem. Dette er fordi vi under testing fant ut at fonten vi hadde valgt, ikke ble støttet på mac sitt operativsystem.

#

## Krav til bruk av teknologi
### React
- For å starte prosjektet vårt brukte vi _create-react-app_. Det gjorde det enkelt å få en filstruktur og riktig dependencies. Det sparte oss også for mye styr med å sette opp et riktig miljø for prosjektet vårt. Siden ingen av oss hadde brukt React før ble løsningen vår noe knotete, men vi har forsøkt å ha mest mulig av _states_ i App.js, og heller props i komponentene. 
### ES6
- Vi har implementert alle komponentene våre med class, og strebet etter å oppnå en hensiktsmessig komponentstruktur. Komponentstrukturen er dog noe uheldig til tider. Det skyldes at vi ikke kjente til hva som var best practice da vi startet på prosjektet, og at vi ikke så at vi lagde en noe knotete struktur til tider.
### Ajax
- For å hente innhold brukte vi biblioteket _axios_ på SVG-elementene og tekst-filene. Vi valgte dette fordi noen av oss kjente til det fra før, og fordi ingen hadde brukt fetch-apiet eller andre alternativer. Endring av tekst var enkelt, siden axios fungerer fint med JSON-formatet. For SVG-bildene brukte vi den småskumle dangerouslySetInnerHTML. Vi har dog ikke implementert noe "forsvar" mot f.eks. <Script> tags her, men kjenner til "faren" ved dangerouslySetInnerHTML.
### Flexbox
- På nettsiden er det Content-komponenten som inneholder bildet, lyden og teksten som blir lastet inn på nettsiden. For å få denne komponenten til å ta seg av skallering av bildene som blir lastet inn har vi benyttet oss av Flexbox i denne Content-komponentens styling. Vi valgte å bruke Flexbox til dette fordi den enkelt ga oss kontroll over skalliering av bildet samt kontroll over avstanden vi ønsket mellom bilde og tekst. Flexbox passer med andre ord utmerket til å bidra med fleksibel/flytende layout til siden.
### Media Queries
- For å sørge for at nettsiden skifter layout etter bredde og høydeformat har vi benyttet oss av mediaqueries. Mediaqueries benytter vi i App.css, tab.css, content.css, sidenav.css og checkbox.css. Denne teknologien tillater oss å gjøre det slik at tittelen, og fanene til nettsiden blir mindre ettersom skjermen blir mindre. Samt å sørge for at teksten havner under bildet ved liten skjermstørrelse, og at teksten havner til høyre for bildet ved stor skjermstrørrelse. Vi har valgt å bruke denne teknologien fordi den er enkel og bruke og gjør slik at nettsiden ser bra ut uavhengig av skjermstørrelsen til enheten som viser den.
### Viewport
- Viewport er brukerens synlige del av websiden. Tradisjonelt sett – før smarttelefoner ble utbredt – ble nettsider kun designet for relativt store pc-skjermer, uten noen form for responsivitet. Dette betydde at nettsidene i utgangspunktet var for store for viewporten til mobiltelefonene. Måten de løste dette på var å skalere ned hele websider slik at de passet mobilskjermen. Det som var dårlig med denne løsningen var at skjermbredden til nettsiden i realiteten var statisk slik at mediaqueries – som kun kicker inn ved visse skjermstørrelser – ikke fungerte. For å fikse dette kan en vanligvis inkludere en "meta"-tag i headeren til nettsiden for å bestemme at bredden til nettsiden skal følge skjermbredden til enheten som viser den. Slik sikrer vi oss at våre mediaqueries blir aktivert ved de riktige skjermstørrelsene. Siden vi satt opp prosjektet ved hjelp av _create-react-app_ har denne automatisk ordnet viewporten i index.html.
### Git / Github
-  Vi benyttet oss flittig av Git / Github gjennom hele prosjektet. Dette gjorde vi ved å dele prosjektet inn i forskjellige oppgaver (issues) som vi jobbet opp mot. Vi laget dermed en development-branch som vi videre delte inn i tre feature-branches som vi hver for oss jobbet på. Ettersom vi løste issues merget vi featurebranchene sammen med development-branchen som vi til slutt merget tilbake til masterbranchen igjen. Dette er en arbeidsmetode som er svært inspirert etter GitFlow WorkFlow, som lar oss skille ny kode fra kode vi anser oss som ferdig med.
#
## Samarbeid, bruk av Git, koding, leveranse
 - Alle på gruppen var kompiser før vi satte i gang med prosjektet – vi er fortsatt kompiser. Samarbeidet i gruppen har altså vært meget godt fra begynnelse til slutt. Vi har planlagt arbeidsperiodene våre oss imellom og opplevd forventet oppmøte og resultater av alle gruppens medlemmer. Vi har spurt hverandre om ting vi er usikre på, og har både lært av hverandre og hjulpet hverandre med å lære helt nye ting.
 - Ved prosjektstart var vi gjennom en prosess hvor vi prøvde å skissere nettsidens layout og oppsett, samt hvilke komponenter vi skulle bruke. Fra dette laget vi issues, men ettersom uforutsette arbeidsoppgaver dukket opp underveis i prosjektet har vi også laget mange nye issues i ettertid. Fordeling av issues har gått bra, og vi har jobbet målrettet med issues gjennom hele prosjektet. '
 - To av tre gruppemedlemmer hadde kjennskap til git fra tidligere emner, men det har ikke vært noe problem å lære sistemann bruk av git. 
## Testing
- Vi har testet nettsiden på tre forskjellige enheter: En stasjonær datamaskin tilkoblet en 24-tommers skjerm, en macbook pro med 13-tommers skjerm og en mobiltelefon av typen One Plus 5 med 5,5-tommers skjerm.
- Måten vi testet på var systematisk å gå igjennom flere forskjellige kombinasjoner av lyd, bilde og tekst. Slik forsikrert vi oss om at nettsiden oppførte seg slik vi ønsket med tanke på responsivitet, samt at den har lik utforming på tvers av enheter. Vi testet nettsiden både vertikalt og horisontalt på mobiltelefonen.

Kilder:
  Informasjon om hvordan å gå frem for å lage avkrysningsbokser.
- https://www.w3schools.com/howto/howto_css_custom_checkbox.asp
  Informasjon om hvordan å gå frem for å lage faner.
- https://alligator.io/react/tabs-component/

SVG:

https://lovesvg.com/free-svg-cut-files/

Tekst:

https://www.goodreads.com/quotes/

Lyd:

https://freesound.org