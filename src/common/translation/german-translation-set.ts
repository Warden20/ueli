import { TranslationSet } from "./translation-set";

// tslint:disable:object-literal-sort-keys for better readability
export const germanTranslationSet: TranslationSet = {
    trayIconShow: "Öffnen",
    trayIconSettings: "Einstellungen",
    trayIconQuit: "Beenden",

    noSearchResultsFoundDescription: "",
    noSearchResultsFoundTitle: "Keine Suchergebnisse gefunden",

    ueliCommandClearCaches: "Caches löschen",
    ueliCommandClearCachesDescription: "Löscht alle Zwischenspeicher von allen Plugins",
    ueliCommandEditSettingsFile: "Einstellungsdatei bearbeiten",
    ueliCommandEditSettingsFileDescription: "Bearbeite die Einstellungsdatei in deinem Standardtexteditor",
    ueliCommandExit: "Beenden",
    ueliCommandExitDescription: "Ueli beenden",
    ueliCommandOpenSettings: "Einstellungen",
    ueliCommandOpenSettingsDescription: "Einstellungen bearbeiten",
    ueliCommandRefreshIndexes: "Indexe aktualisieren",
    ueliCommandRefreshIndexesDescription: "Alle Indexe von allen Plugins aktualisieren",
    ueliCommandReload: "Neu laden",
    ueliCommandReloadDescription: "Ueli neu laden",

    generalErrorTitle: "Es ist ein Fehler aufgetreten",
    generalErrorDescription: "Überprüfe den Log für mehr Details",

    successfullyRefreshedIndexes: "Erfolgreich alle Indexe aktualisiert",
    successfullyClearedCaches: "Erfolgreich alle Zwischenspeicher gelöscht",
    successfullyUpdatedconfig: "Erfolgreich Einstellungen aktualisiert",
    successfullyClearedCachesBeforeExit: "Erfolgreich alle Zwischenspeicher vor dem Beenden gelöscht",

    // settings
    generalSettingsMenuSection: "Allgemein",
    pluginSettingsMenuSection: "Plugins",

    generalSettings: "Allgemein",
    generalSettingsLanguage: "Sprache",
    generalSettingsAutostartApp: "App bei Systemstart starten",
    generalSettingsShowTrayIcon: "Symbol im Systemtray anzeigen",
    generalSettingsClearCachesOnExit: "Zwischenspeicher beim Beenden löschen",
    generalSettingsHotKey: "Hot Key",
    generalSettingsRescanIntervalEnabled: "Periodischer Rescan aktiviert",
    generalSettingsRescanInterval: "Rescan Intervall (in Sekunden)",
    generalSettingsShowAlwaysOnPrimaryDisplay: "Immer auf primärem Bildschirm anzeigen",
    generalSettingsExportSettings: "Aktuelle Einstellungen exportieren",
    generalSettingsSuccessfullyExportedSettings: "Erfolgreich Einstellungen exportiert",
    generalSettingsImportSettings: "Einstellungen importieren",
    generalSettingsImportFileFilterJsonFiles: "JSON Dateien",
    generalSettingsImportErrorInvalidConfig: "Einstellungsimport fehlgeschlagen: Dateiinhalt scheint ungültig zu sein",
    generalSettingsResetAllSettings: "Alle Einstellungen auf Standard zurücksetzen",

    appearanceSettings: "Erscheinungsbild",
    appearanceSettingsWindowWidth: "Fensterbreite (in Pixel)",
    appearanceSettingsMaxSearchResultsPerPage: "Max Suchergebnisse (pro Seite)",
    appearanceSettingsSearchResultHeight: "Suchergebnishöhe (in Pixel)",
    appearanceSettingsSmoothScrolling: "Weiches Scrollen",
    appearanceSettingsUserInputHeight: "Eingabefeld (in Pixel)",
    appearanceSettingsShowDescriptionOnAllSearchResults: "Beschreibung bei allen Suchresultaten anzeigen",

    colorThemeSettings: "Farbschema",
    colorthemeUserInputBackgroundColor: "Suchfeld Hintergrundfarbe",
    colorThemeUserInputTextColor: "Suchfeld Textfarbe",
    colorThemeSearchResultsBackgroundColor: "Suchergebnisse Hintergrundfarbe",
    colorThemeSearchResultsItemActiveBackgroundColor: "Aktives Suchergebnis Hintergrundfarbe",
    colorThemeSearchResultsItemActiveTextColor: "Aktives Suchergebnis Textfarbe",
    colorThemeSearchResutlsItemNameTextColor: "Suchergebnis Name Textfarbe",
    colorThemeSearchResultsItemDescriptionTextColor: "Suchergebnis Beschreibung Textfarbe",
    colorThemeScrollbarForegroundColor: "Scrollbar Vordergrundfarbe",
    colorThemeScrollbarBackgroundColor: "Scrollbar Hintergrundfarbe",

    colorPicker: "Farbwähler",

    applicationSearchSettings: "Programmsuche",
    applicationSearchSettingsDescription: `Dieses Plugin sucht nach Programmen auf deinem Computer. Du kannst Ordner definieren, wo nach Applikationen gesucht werden soll und anhand welcher Dateiendung ein Programm erkennt werden soll.`,
    applicationSearchSettingsApplicationFolders: "Programmverzeichnisse",
    applicationSearchSettingsApplicationFolder: "Programmverzeichnis",
    applicationSearchSettingsFolderPath: "Ordnerpfad",
    applicationSearchSettingsRemoveAction: "Entfernen",
    applicationSearchSettingsAddApplicationFolder: "Programmverzeichnis hinzufügen",
    applicationSearchSettingsApplicationFileExtensions: "Programmdateierweiterung",
    applicationSearchSettingsApplicationFileExtension: "Erweiterung",
    applicationSearchSettingsAddApplicationFileExtension: "Erweiterung hinzufügen",
    applicationSearchSettingsInvalidFileExtensionErrorMessage: `"{{value}}" ist keine gültige Dateierweiterung`,
    applicationSearchSettingsNotAFolderErrorMessage: `"{{value}}" ist kein Ordner`,
    applicationSearchSettingsDoesNotExistErrorMessage: `"{{value}}" existiert nicht`,
    applicationSearchSettingsFolderValidationError: `Während der Validierung von "{{value}}" ist ein Fehler aufgetreten`,

    searchEngineSettings: "Suchmaschine",
    searchEngineSettingsDescription: `Die Suchmaschine wird für vorindexierte Inhalte benutzt, z.B. Programme, Shortcuts und Betriebssystembefehle und -einstellungen.`,
    searchEngineSettingsFuzzyness: "Fuzzyness",
    searchEngineSettingsFuzzynessDescription: "0 = strikt, 1 = fuzzy",
    searchEngineSettingsStrict: "Strikt",
    searchEngineSettingsFuzzy: "Fuzzy",
    searchEngineSettingsMaxSearchResults: "Maximale Suchergebnisse",

    shortcutSettings: "Shorcuts",
    shortcutSettingsDescription: `Dieses Plugin erlaubt es dir Dateien und Webseiten schnell zu öffnen indem du eigene Shorctus erstellst.`,
    shortcutSettingsShortcut: "Shortcuts",
    shortcutSettingsTableType: "Typ",
    shortcutSettingsTableName: "Name",
    shortcutSettingsTableExecutionArgument: "Ausführungs argument",
    shortcutSettingsTableDescription: "Beschreibung",
    shortcutSettingsTableTags: "Tags",
    shortcutSettingsTableIcon: "Icon",
    shortcutSettingsTableEdit: "Bearbeiten",
    shortcutSettingsTableDelete: "Löschen",
    shortcutSettingsAddShortcut: "Shortcut hinzufügen",
    shortcutSettingsEditModalImageUrl: "Bild URL",
    shortcutSettingsEditModalSvgString: "SVG Zeichenkette",
    shortcutSettingsEditModalGoogleWebsite: "Google Webseite",
    shortcutSettingsEditModalDownloadsFolder: "Downloads Ordner",
    shortcutSettingsEditModalFilePath: "Dateipfad",
    shortcutSettingsInvalidShortcutErrorMessage: "Ungültiger Shortcut",
    shortcutSettingsTagPlaceholder: "Füge einen Tag hinzu und drücke Enter",
    shortcutSettingsTypeUrl: "URL",
    shortcutSettingsTypeFilePath: "Dateipfad",

    translationSettingsTranslation: "Übersetzung",
    translationSettingsDescription: `Dieses Plugin erlaubt es dir schnell Wörter und kurze Sätze zu übersetzen. Es benutzt eine inoffizielle API (https://github.com/imankulov/linguee-api) für Linguee (https://github.com/imankulov/linguee-api) und kann daher instabil sein.`,
    translationSettingsDebounceDelay: "Debounce Verzögerung (in Millisekunden)",
    translationSettingsMinSearchTermLength: "Minimum Suchbegrifflänge",
    translationSettingsPrefix: "Präfix",
    translationSettingsSourceLanguage: "Quellsprache",
    translationSettingsTargetLanguage: "Zielsprache",

    everythingSearch: "Everything Suche",
    everythingSearchSettingDescription: `Dieses Plugin erlaubt es dir lokale Dateien und Ordner mit Everthing search zu finden. Du musst "Everything" und "Everything Command-line Interface" von https://www.voidtools.com/downloads/ installieren. Nachdem beides installiert ist musst du den Dateipfad zu 'es.exe' unten angeben.`,
    everythingSearchPathToBinary: `Dateipfad zu "es.exe"`,
    everythingSearchPrefix: "Präfix",
    everythingSearchMaxSearchResults: "Maximale Suchergebnisse",
    everythingSearchPathToBinaryFilterName: "Ausführbare Dateien",

    mdfindSearch: "mdfind Suche",
    mdfindSettingsDescription: "Dieses Plugin erlaubt es dir mithilfe der nativen macOS-Suche Dateien und Ordner in deinem lokalen Dateisystem zu finden.",
    mdfindSearchDebounceDelay: "Debounce Verzögerung (in Millisekunden)",
    mdfindSearchPrefix: "Präfix",
    mdfindSearchMaxSearchResults: "Maximale Suchergebnisse",

    websearch: "Websuche",
    websearchSettingDescription: `Dieses Plugin erlaubt es dir schnell das Internet mit deiner Lieblings-Websuchmaschine zu durchsuchen, indem du deine eigenen Websuchamschinen erstellst.`,
    websearchEngines: "Websuchmaschinen",
    websearchEditingModalTitleAdd: "Websuchmaschine hinzufügen",
    websearchEditingModalTitleEdit: "Websuchmaschine bearbeiten",
    websearchName: "Name",
    websearchPrefix: "Präfix",
    websearchUrl: "URL",
    websearchIcon: "Icon",
    websearchPriority: "Priorität",
    websearchIsFallback: "Fallback",
    websearchEncodeSearchTerm: "Suchbegriff kodieren",
    websearchInvalidWebsearchEngine: "Ungültige Websuchmaschine",
    websearchDescription: `Suche auf {{websearch_engine}} nach "{{search_term}}"`,

    fileBrowser: "Dateibrowser",
    fileBrowserSettingsDescription: `Dieses Plugin erlaubt es dir dein lokales Dateisystem zu durchsuchen. Um zu starten musst du einen validen absoluten Dateipfad angeben.`,
    fileBrowserSettingsMaxSearchResults: "Maximale Suchergebnisse",
    fileBrowserOptionsShowHiddenFiles: "Versteckte Dateien anzeigen",
    fileBrowserOptionsBlackList: "Blacklist",
    fileBrowserOptionsBlackListPlaceholder: "Datei- oder Ordnername",

    operatingSystemCommands: "Betriebssystembefehle",
    operatingSystemCommandsSettingsDescription: `Betriebssystembefehle sind simple Befehle um das Betriebssystem zu steuern, z.B. Herunterfahren, Neustart.`,

    macOsShutdown: "Ausschalten",
    macOsShutdownDescription: "Computer ausschalten",
    macOsRestart: "Neustart",
    macOsRestartDescription: "Computer neu starten",
    macOsLogout: "Abmelden",
    macOsLogoutDescription: "Aktuellen Benutzer abmelden",
    macOsLock: "Sperren",
    macOsLockDescription: "Computer sperren",

    windowsShutdown: "Herunterfahren",
    windowsShutdownDescription: "Computer herunterfahren",
    windowsRestart: "Neu starten",
    windowsRestartDescription: "Computer neu starten",
    windowsSignout: "Abmelden",
    windowsSignoutDescription: "Aktuellen Benutzer abmelden",
    windowsLock: "Sperren",
    windowsLockDescription: "Computer sperren",

    calcuator: "Rechner",
    calculatorCopyToClipboard: "Drücke Enter um in die Zwischenablage zu kopieren",
    calculatorDescription: "Dieses Plugin erlaubt es dir schnell einfache Rechnungen zu machen.",
    calculatorPrecision: "Präzision",

    cancel: "Abbrechen",
    save: "Speichern",
    add: "Hinzufügen",
    remove: "Entfernen",
    edit: "Bearbeiten",
    forExample: "Zum Beispiel",
    iconType: "Icontyp",
};
