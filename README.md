This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and 
[Create React apps using typescript with no build configuration](https://github.com/wmonk/create-react-app-typescript).

```sh
$ create-react-app acquisition-jsonschema-form-test --scripts-version=react-scripts-ts
```

# Untersuchung der Library react-jsonschema-form im Hinblick auf Einsatzmöglichleit bei der akquise-app.

[A React component for building Web forms from JSON Schema](https://github.com/mozilla-services/react-jsonschema-form)

## Motivation

(siehe https://github.com/netzakzent/akquise-app/issues/888)

Das Akquise-Tool Frontend ist aktuell noch ein Mix aus Symfony Twig Templates und riot.js, welches demnächst komplett auf eine Single Page App mittels react umgestellt werden soll.

Dabei sollen Layout und Funktionalität möglichst erhalten bleiben.

Dabei stellt das Akquise-Formular den schwierigsten Teil dar. 
"Hinterlegt ist ein komplexes Regelwerk, verbunden mit einem sehr dynamischen Multi-Step-Formular. ...Server und Client verwenden ein JSON Schema um die gleichen Validierungsregeln zu verwenden."

Für die Realisierung stehen mehrere Alternativen zur Verfügung, wobei eine davon die Verwendung von [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form) ist.

Diese Library ist im Hinblick auf Einsatzmöglichkeiten zu untersuchen.

## Eigenschaften

Die Library `react-jsonschema-form` (Version 1.0.0) erlaubt den automatischen Aufbau eines Formulars über ein JSON Schema (aktuell Version 6) und die Validierung mittels [Ajv: Another JSON Schema Validator](https://github.com/epoberezkin/ajv).

Dabei werden über die Schemainformation (Feldnamen, -typen, Struktur) Oberflächenelemente mit Labeln in einem Formular erzeugt, über die die entsprechenden Daten angezeigt und geändert werden können. Es existieren eine Reihe von Standard-Widgets für die Anzeige/Pflege von Datenfelder wie Textfeld, Checkbox, Dropdown, usw.

Da über das JSON Schema nur rudimentäre Informationen zum Aufbau des Formulars zu Verfügung stehen wurde ein sog. `uiSchema` definiert, wodurch weitgehende Aspekte der Visualisierung gesteuert werden können. Dies betrifft beispielsweise
  * explizite Auswahl des Anzeige Widgets (z.B. `ui:widget: "radio"` für boolsches Feld statt checkbox) 
  * Anzeige eines sprechenden Namens statt des internen Feldnamens (z.B. `Vorname` für `first_name`)
* `readonly/disabled`-Steuerung

Existierende Formulardaten können über eine Property `formData` an das Formular angebunden werden.

Die Library ist stark mit [bootstrap](https://getbootstrap.com/) gekoppelt.

## Anpassungsmöglichkeiten

Custom fileds, custom widgets ... TODO

## Validierung

Die Validierung kann 
 * auf Feldebene direkt bei Eingabe oder
 * beim Abschicken des Formulars 
 
 erfolgen. Dabei ist zu beachten, dass die Standard-Validierung auf Feldebene sofort bei jeder Eingabe greift und nicht erst z.B. beim Verlassen des Feldes.


 ## Demo-Anwendung

 Anmerkung: statt `yarn` kann auch `npm` direkt verwendet werden.

 * Build: `yarn install`
 * Test: `yarn start`

### Beschreibung

 In der Anwendung wurde diverse Konfigurationen umgesetzt. Einige ohne direkten Bezug auf akquise-app und einige mit direktem Bezug auf einige Formulare von akquise-app.

 * src/test
   * BasicTestForm
   * DynanicForm
   * GroupingForm
   * NestedForm
 * src/akquise
   * component-test (Test mit custom components und semantic ui)
   * coop-negotioation
   * recipient
   * supervisor

## Bewertung im Hinblick auf Einsatz bei der `akquise-app`

### Vorteile

* flexibel, mächtig (uiSchema, alternative Widgets, Steuerung der Visualisierung)
* anpassbar (custom CSS classNames, field templates, custom widgets)
* custom error messages (error list template, error list display)
* schema definitions
* schema: property dependencies
  * z.B. required-Steuerung eines Felds, sobald ein anderes Feld einen Wert erhält 
* schema: schema dependencies
  * conditional: Feld wird angezeigt, sobald ein anderes Feld einen Wert erhält
  * dynamic: Felder werden angezeigt in Abhängigkeit von Werten eines anderen Felds (`oneOf`)
* Multi-Step-Formular kann simuliert werden (Teilschemas, Teildaten)

### Nachteile

* stark mit [bootstrap](https://getbootstrap.com/) gekoppelt; andere Styling Library kann nicht einfach verwendet werden
* Fehlerbehandlung / Anzeige
  * Validierung direkt auf Feldebene direkt bei Eingabe, nicht erst beim Verlassen des Felds
  * Anzeige auch bei initialer Darstellung ohne Eingabe ("pristine" Status nicht berücksichtigt)
* custom widgets müssen erstellt werden (z.B. für die Pflege von multi-select Listen), da Standardwidgets nicht ausreichen

## Zusammenfassung

Falls `bootstrap` als CSS-Library nicht verwendet werden kann, scheidet `react-jsonschema-form` praktisch aus. Es gibt Issues zu dem Thema und Pullrequests, die aber nicht weiter bearbeitet wurden.

Feldvalidierung ist wie aktuell implementiert nicht Stand der Technik (einige Issues beziehen siech auf die Problematik) und nicht wie bei `akquise-app`.

Layout, das stark von dem Schema abweicht (z.B. coop negotiation: customer -> segment) praktisch nicht möglich.


## Mögliche Alternativen

* Implementierung über React-Komponenten als SPA und direkte Umsetzung der Regeln in
  javascript/typescript in den Container-Komponenten 
* react-jsonschema-form dediziert nachbauen (eher nicht)
  * React-Konponenten für Pflege/Anzeige der individuellen Felder (Input, Checkbox, ...)
  * Form-Komponente mit dynamischem Aufbau über Schema


## Fragen

* Coop negotiation: unklar Rollenverteilung zwischen Json und Schema
  * z.B. customer:
    * keine Daten im Json
    * mögliche Ausprägungen im Schema
  * Erwartung: immer Daten im Json (wenn vorhanden), passend zum Schema

* was passiert beim (zwischen-) Speichern? (Auswertung von Json im Server)


## Support für protractor

* Packages installieren
```sh
$ yarn add --dev protractor
$ yarn add --dev jasmine-core jasmine-spec-reporter
$ yarn add --dev karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter
$ yarn add --dev ts-node
```

* in package.json ergänzen:

```json
...
"scripts": {
...
  "e2e": "node --inspect-brk bin/protractor protractor.conf.js",
  "webdriver": "webdriver-manager update"
```

* Konflikt mit @types/jasmine beheben
```sh
$ yarn remove @types/jest
```

* folgende Files/Verzeichnisse in tsconfig.json ausschließen:
```js
"exclude": [
  ...
  "e2e",
  "./protractor.conf.js"
]
``` 
* protractor.conf.js ergänzen

* Tests durchführen

```sh
$ yarn webdriver    # webdriver manager download/aktualisiern
$ yarn e2e          # e2e Tests starten
```
