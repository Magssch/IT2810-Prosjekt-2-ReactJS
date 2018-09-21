# it2810-webutvikling-h18-prosjekt-2-gruppe--46

- Dette prosjektet bygger en nettside som tillater brukeren å velge mellom tre ulike kategorier innen lyd, bilde og tekst. Basert på brukerens kombinasjon vil nettsiden vise fire ulike "gallerier", hver med unikt bilde, lyd og tekst. Prosjektet er skrevet i React og tar i bruk AJAX for innlasting av bilder og tekst. 

- Gruppen består av Viktor Solberg, Magnus Schjølberg og Åsmund Haugse. Prosjektet er prosjekt 2 i IT2810, webutvikling.
#

## Design og layout
- Vi har valgt en designløsning som gir mye av siden til galleriet. Ved å la brukeren skjule og vise sidemenyen gir vi mer av viewet til galleriet, og vi fikk en enklere oppgave med å style til mobil. Vi vurderte å ha fanene våre på venstresiden av utstillingen(og ikke ovenfor), men lot være fordi vi synes det ble renere med å ha fanene ovenfor. Vi vurderte også å ha sidemenyen synlig alltid på 
- Vi valgte å gi brukeren en ferdig generert utstilling fordi vi opplever at det gir en bedre opplevelse av vårt galleri. Det gir også brukeren innhold med en gang, og innhold er spennende. 
- For mediafilene fant vi gratis SVG-bilder og valgte noen vi synes var fine. Teksten er tilfeldige sitater og lydfilene vi spiller er fine lyder som lå tilgjengelig gratis på nett.

#

## Bruk av teknologi
#### React
- For å starte prosjektet vårt brukte vi _create-react-app_. Det gjorde det enkelt å få en filstruktur og riktig dependencies. Det sparte oss også for mye styr med å sette opp et riktig miljø for prosjektet vårt. Siden ingen av oss hadde brukt React før ble løsningen vår noe knotete, men vi har forsøkt å ha mest mulig av _states_ i App.js, og heller props i komponentene. 
### ES6
- Vi har implementert alle komponentene våre med class, og etter beste evne med en hensiktsmessig komponentstruktur. Komponentstrukturen er noe uheldig til tider. Det skyldes at vi ikke kjente til hva som var best practice da vi startet på prosjektet, og vi ikke så at vi lagde en noe knotete struktur til tider.
### Ajax
- For å hente innhold brukte vi biblioteket _axios_ på SVG-elementene og tekst-filene. Vi valgte dette fordi noen av oss kjente til det fra før, og fordi ingen hadde brukt fetch-apiet eller andre alternativer. Endring av tekst var enkelt, siden axios fungerer fint med JSON-formatet. For SVG-bildene brukte vi den småskumle dangerouslySetInnerHTML. Vi har dog ikke implementert noe "forsvar" mot f.eks. <Script> tags her, men kjenner til "faren" ved dangerouslySetInnerHTML.
### Responsive Web Design
- fkdjks
#
## Samarbeid, bruk av Git, koding, leveranse
 - Alle på gruppen var kompiser før vi satte i gang(Vi er fortsatt kompiser), så samarbeidet i gruppen har vært veldig bra fra start til slutt. Vi har forventet oppmøte og resultater av alle, og det har vært sunt for vår arbeidsprosess. Vi har spurt hverandre om ting vi er usikre på, og har både lært av hverandre og hjulpet hverandre med å lære helt nye ting.
 - Ved prosjektstart var vi gjennom en prosess hvor vi prøvde å skissere nettsidens layout og oppsett, samt hvilke komponenter vi skulle bruke. Fra dette laget vi issues, men vi har også laget mange nye issues underveis etterhvert som problemstillinger og nytt arbeid har oppstått. Fordeling av issues har gått bra, og vi har jobbet med issues vi interesserer oss for gjennom hele prosjektet. '
 - To av tre gruppemedlemmer hadde kjennskap til git fra tidligere emner, men det har ikke vært noe problem å lære sistemann bruk av git. 
## Testing
- 
Kilder:
- https://www.w3schools.com/howto/howto_css_custom_checkbox.asp
- https://alligator.io/react/tabs-component/
SVG:

https://lovesvg.com/free-svg-cut-files/

Tekst:

https://www.goodreads.com/quotes/

Lyd:

https://freesound.org