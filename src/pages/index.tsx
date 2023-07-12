import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  fontSize: "1.4em",
  marginLeft: 0,
  marginRight: 0,
};

const gteStyles = {
  color: "blue",
};

const onRightSideStyles = {
  textAlign: "right",
};

const notes = [
  `Lederen interieur "Nappa" afgewerkt met witte stiksels`,
  `Standkachel`,
  `Dynamische onderstelregeling DCC`,
  `LED Matrix koplampen IQ-light`,
  `LED Achterlichten`,
  `Dynamische knipperlichten voor en achter`,
  `Navigatiesysteem "High"`,
  `Digitale radio ontvangst DAB`,
  `APP Connect`,
  `Head-Up-Display`,
  `Draadloze telefoonoplader`,
  `Climate control (voor en achter gescheiden regelbaar)`,
  `Adaptieve Cruise Control`,
  `Lane Assist`,
  `File ondersteuning`,
  `ergoComfort bestuurdersstoel met 14-voudige verstelling en massagefunctie`,
  `Voorstoelen elektrisch verstelbaar met geheugenfunctie in bestuurdersstoel`,
  `Stoelverwarming voor en achter`,
  `Lederen multifunctioneel stuurwiel met tiptronic`,
  `Parkeersensoren voor en achter`,
  `Automatisch inparkeersysteem`,
  `Achteruitrijcamera incl. 360° camera`,
  `Isofix bevestigingssysteem voor kinderzitjes`,
  `3-deling neerklapbare achterbank met middenarmsteun`,
  `Rolgordijn voor de achterste zijruiten`,
  `Centrale vergrendeling "Keyless-Entry"`,
  `Licht en Regensensor`,
  `Privacy glas achter`,
  `Blanke sierlijsten`,
  `Elektrisch bedienbare achterklep`,
  `Buitenspiegels elektrisch verwarmen inklapbaar`,
  `Alarm klasse III`,
  `Lichtmetalen velgen 17″ "London"`,
  `Dorpellijsten in portieropeningen met metaalinleg`,
  `Verwarmbare ruitensproeiers vóór`,
  `Extra LED waarschuwingslampjes (bij portieren) vóór en achter`,
];

const options = [
  `Airco separaat achter`,
  `Alarmsysteem`,
  `Cruise control adaptief`,
  `Draadloze telefoonlader`,
  `Electronic climate control`,
  `Elektrisch glazen panorama-dak`,
  `File assistent`,
  `Leder-pakket`,
  `Lichtmetalen velgen 17"`,
  `Matrix led koplampen`,
  `Navigatiesysteem full map`,
  `Rijstrooksensor met correctie`,
  `Rondomzicht camera`,
  `Volledig digitaal instrumentenpaneel`,
  `360°-camera (Area View) (KA6)`,
  `Achterbank in delen neerklapbaar`,
  `Achteropkomend verkeer waarschuwing`,
  `Achteruitrijcamera`,
  `Achteruitrijcamera (Rear View) (KA2)`,
  `Adaptief demping systeem`,
  `Adaptieve onderstelregeling (Dynamic Chassis Control) (PDD)`,
  `Airbag(s) hoofd achter`,
  `Airbag(s) hoofd voor`,
  `Airbag(s) knie`,
  `Airbag(s) side achter`,
  `Airbag(s) side voor`,
  `Airbag bestuurder`,
  `Airbag passagier`,
  `Alarm klasse 1 (startblokkering)`,
  `Anti Blokkeer Systeem`,
  `Anti doorSlip Regeling`,
  `Armsteun achter`,
  `Armsteun voor`,
  `Audio installatie`,
  `Autonomous Emergency Braking`,
  `Autotelefoonvoorbereiding met bluetooth`,
  `Bagage-scheidingsnet`,
  `Bagageruimtescheidingsnet (3CX)`,
  `Bandenspanningscontrolesysteem`,
  `Bekleding, leder 'Nappa' afgewerkt met witte stiksels (PL7)`,
  `Bestuurdersstoel inclusief massagefunctie en memory, ergonomisch gevormd en 14-voudig instelbaar (ErgoActive) (PH1)`,
  `Binnenspiegel automatisch dimmend`,
  `Boordcomputer`,
  `Bots herkenning systeem`,
  `bots waarschuwing systeem`,
  `Buitenspiegel(s) automatisch dimmend`,
  `Buitenspiegels elektr. met geheugen`,
  `Buitenspiegels elektrisch inklapbaar`,
  `Buitenspiegels elektrisch verstel- en verwarmbaar`,
  `Buitenspiegels met verlichting`,
  `Chroom delen exterieur`,
  `Comfortstoel(en)`,
  `Connected services`,
  `DAB`,
  `Dakrails`,
  `Elektrisch bedienbare achterklep met sensorsturing`,
  `Elektrische ramen achter`,
  `Elektrische ramen voor`,
  `Elektrisch verstelb. bestuurdersstoel met geheugen`,
  `Elektrisch verstelbare passagiersstoel`,
  `Elektronisch Stabiliteits Programma`,
  `Extra getint glas`,
  `Geluidsimulator`,
  `Grootlichtassistent`,
  `Head-Up-Display (KS2)`,
  `Hill hold functie`,
  `Keyless entry`,
  `Keyless start`,
  `LED achterlichten`,
  `LED dagrijverlichting`,
  `Lederen bekleding`,
  `Lederen stuurwiel`,
  `Lederen versnellingspook`,
  `Lendesteunen (verstelbaar)`,
  `Luxe lederen bekleding`,
  `Multimedia-voorbereiding`,
  `Navigatie, radio- en multimediasysteem 'Discover Pro' (RCB)`,
  `Oplaadmogelijkheid`,
  `Parkeersensor voor en achter`,
  `Regensensor`,
  `Schakelmogelijkheid aan stuurwiel`,
  `Spraakbediening`,
  `Start/stop systeem`,
  `Stoelen-pakket`,
  `Stuurbekrachtiging snelheidsafhankelijk`,
  `Stuur verstelbaar`,
  `Stuurwiel multifunctioneel`,
  `Telefoonintegratie`,
  `Verkeersbord detectie`,
  `Vermoeidheids herkenning`,
  `Vervolgbotsing preventie`,
  `Voorstoel(en) met massagefunctie`,
  `Voorstoelen in hoogte verstelbaar`,
  `Voorstoelen verwarmd`,
  `WiFi voorbereiding`,
  `Zij-airbags achter (PAH)`,
  `Zijruiten achter en achterruit getint, 65% lichtabsorberend (4KF)`,
  `Zonnescherm zijruiten`,
  `Zonwering voor zijruiten achter, handbediend (Variant) (3Y4)`,
  `Zwarte glans (piano)lak interieur afwerking`,
];

const alt = "Volkswagen Passat Variant GTE 1.4 TSI DSG PHEV – te koop";

const staticPhotos = [
  <StaticImage
    src="../images/photos/IMG_1294.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1296.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1300.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1302.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1305.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1307.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1308.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1311.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1312.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1313.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1315.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1316.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1317.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1319.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1320.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1321.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1325.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1326.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1328.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1330.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1332.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1334.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1335.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1336.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1337.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1340.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1341.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1344.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1345.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1346.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1348.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1349.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1350.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1351.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1352.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1353.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1354.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1355.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1357.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1359.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1360.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1361.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1363.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1364.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1365.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1366.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1367.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1368.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1369.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1370.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1371.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1373.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1374.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1375.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1376.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1377.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1378.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1379.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1380.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1381.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1382.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1383.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1384.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1386.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1388.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1389.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1390.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1395.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1401.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1402.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1404.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1406.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1409.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1413.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1419.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1420.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1422.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1423.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1424.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1425.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1426.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1428.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1429.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1430.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1431.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1432.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1434.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1435.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1436.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1438.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1439.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
  <StaticImage
    src="../images/photos/IMG_1440.jpeg"
    alt={alt}
    layout="fullWidth"
  ></StaticImage>,
];

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1>
        <i>Te Koop</i> \\
      </h1>
      <h1>
        <span style={gteStyles}>Volkswagen Passat Variant GTE </span>
        1.4 TSI DSG PHEV
      </h1>
      <h2>
        2021 &ndash; Plugin-Hybrid &ndash; Leer &ndash; Pano &ndash; LED &ndash;
        360° Camera
      </h2>
      <p>
        <q>
          Ik verkoop mijn Passat GTE omdat mijn vrouw en ik er niet tevreden mee
          zijn, vooral na het bezitten van een Mercedes. Dus moet nu weg.
        </q>
        <p style={onRightSideStyles}>
          // 13 Juli 2023, Aleksandr{" "}
          <a href="mailto:aleksandrvin@gmail.com">aleksandrvin@gmail.com</a>
        </p>
        <p style={onRightSideStyles}>
          // scroll naar beneden voor <a href="#photos">foto's</a>
        </p>
      </p>
      <p>
        <StaticImage
          src="../images/photos/IMG_1344.jpeg"
          alt="Sideview"
          layout="fullWidth"
        />
      </p>
      <h3>50266 km</h3>
      <p style={onRightSideStyles}>
        // Aleksandr{" "}
        <a href="mailto:aleksandrvin@gmail.com">aleksandrvin@gmail.com</a>
      </p>
      <p style={onRightSideStyles}>
        // scroll naar beneden voor <a href="#photos">foto's</a>
      </p>
      <p>
        <h3>Uitgevoerd met o.a.:</h3>
        <ul>
          {notes.map((n) => (
            <li>{n}</li>
          ))}
        </ul>
      </p>
      <p style={onRightSideStyles}>
        // Aleksandr{" "}
        <a href="mailto:aleksandrvin@gmail.com">aleksandrvin@gmail.com</a>
      </p>
      <p style={onRightSideStyles}>
        // scroll naar beneden voor <a href="#photos">foto's</a>
      </p>
      <p>
        <h3>Opties:</h3>
        <ul>
          {options.map((o) => (
            <li>{o}</li>
          ))}
        </ul>
      </p>
      <h2>Foto's</h2>
      <div id="photos">
        {staticPhotos.map((sp) => (
          <p>{sp}</p>
        ))}
      </div>
    </main>
  );
};

export const Head = () => (
  <>
    <title>Volkswagen Passat Variant GTE 1.4 TSI DSG PHEV Te Koop</title>
    <meta
      name="description"
      content="Ik verkoop mijn plugin-hybrid auto van 2021: Volkswagen Passat Variant GTE 1.4 TSI DSG PHEV"
    />
  </>
);

export default IndexPage;
