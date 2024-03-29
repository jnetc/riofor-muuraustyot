import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useState } from 'react';

import { request, query } from 'lib/datocms';
// Hooks
import { Store } from '@Hooks/useStore';
import { ContactsContext } from '@Hooks/useContacts';
import { DetailsContext } from '@Hooks/useDetails';
// Components
import { extraCSS } from '@Helpers/critical';
import Navigation from '@Components/navigation';
import Main from '@Components/main';

import { DataType } from '@Types';

const Services = dynamic(() => import('@Components/services'));
const Projects = dynamic(() => import('@Components/projects'));
const About = dynamic(() => import('@Components/about'));
const Footer = dynamic(() => import('@Components/footer'));
const GoToTopButton = dynamic(() => import('@Components/go-to-top/GoToTopButton'));
import { Details } from '@Components/projects/details/Details';
import { Contacts } from '@Components/main/contacts';

const Home: NextPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [details, openDetails] = useState({ active: false });
  const [contacts, openContacts] = useState({ active: false });

  if (!data) {
    return <main>Sorry! This page not found.</main>;
  }
  const seo = data as DataType;

  return (
    <Store.Provider value={{ data }}>
      <Head>
        <title>{seo._site.globalSeo.fallbackSeo.title}</title>
        <meta name="description" content={seo._site.globalSeo.fallbackSeo.description} />
        <style dangerouslySetInnerHTML={{ __html: extraCSS }} />
      </Head>
      <Navigation />
      <main>
        <ContactsContext.Provider value={{ contacts, openContacts }}>
          <Main />
          <Contacts />
        </ContactsContext.Provider>

        <DetailsContext.Provider value={{ details, openDetails }}>
          <Projects />
          <Details />
        </DetailsContext.Provider>

        <Services />
        <About />
      </main>
      <Footer />
      <GoToTopButton />
    </Store.Provider>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async context => {
  const data = await request({ query, variables: { locale: context.locale } });
  console.log(data);

  return {
    props: {
      data,
    },
  };
};

// const data = {
//   home: {
//     title: 'etsitkö muurareitä?',
//     phone: '+358405815359',
//     email: 'rioformuuraustyotoy@gmail.com',
//     address: 'Mäenrinne 14, 02160 Espoo',
//     person: 'Maria Stefanidou',
//     description:
//       'Olemme perustaneet itsemme alan ammattilaisiksi ja meillä on laaja kokemus muurauksen rakentamisesta.',
//   },
//   project: {
//     projects: [
//       {
//         area: '8200',
//         address: 'Hansakartano 4, 02780 Espoo',
//         cloudLink:
//           'https://drive.google.com/drive/folders/1q2sX5fWtPmIcd0ZspAJVUs6dZV7573Nd?usp=sharing',
//         completed: true,
//         contractor: 'YIT-yhtyma',
//         googleMap: 'https://goo.gl/maps/aJYE9r3dup1vdqDf6',
//         id: '9702367',
//         jobType: 'muuraus, rappaus',
//         projectDescription:
//           '**Peruskorjattaviin** opetustiloihin sijoittuvat Metropolian elokuva- ja tv-, esitys- ja teatteritekniikan, viestinnän ja XR-designin opetustilat sekä Helsinki XR Center.\n\nOpetustilat koostuvat muun muassa luentosaleista, studioista ja muista tiloista. Lisäksi rakennetaan kahvilatilat *keittiöineen*.',
//         projectName: 'Blominmäen jätevedenpuhdistamo',
//         projectNumber: '5173',
//         releaseDate: '10/2021',
//         projectImage: {
//           url: 'https://www.datocms-assets.com/66399/1649496477-rsz_sunpark_the_modern_house_1-scaled-e1578586109705.webp',
//         },
//       },
//       {
//         area: '5000',
//         address: 'Vanha-nurmikkontie 8, Vantaa',
//         cloudLink:
//           'https://drive.google.com/drive/folders/1q2sX5fWtPmIcd0ZspAJVUs6dZV7573Nd?usp=sharing',
//         completed: false,
//         contractor: 'SRV Yhtiot',
//         googleMap: 'https://goo.gl/maps/AHdK3LDaayYDJNcg6',
//         id: '0002438',
//         jobType: 'muuraus',
//         projectDescription:
//           'Meluavimmat työvaiheet, kuten raskaiden betonirakenteiden purkutyöt pyritään ajoittamaan kunkin muutosalueen lähimpien toimijoiden aukioloaikojen ulkopuolelle. \n\nRakennus- ja purkutyöt tulevat kuitenkin aiheuttamaan meluhaittaa kiinteistössä työskenteleville ja asioiville. Sisäiset ja ulkoiset liikennejärjestelyt ja työmaan aitaus vaikuttavat kiinteistön ja Hämeentien katualueen kulkureitteihin. \n\nPyydämme kaikkia noudattamaan paikalla olevia opasteita.',
//         projectName: 'Keskussairaalan H-rakennus',
//         projectNumber: '4-15173',
//         releaseDate: '05/2022',
//         projectImage: {
//           url: 'https://www.datocms-assets.com/66399/1649499071-5e96ddf888405.webp',
//         },
//       },
//       {
//         area: '12-78800',
//         address: 'Hansakartano 4, 02780 Espoo',
//         cloudLink:
//           'https://drive.google.com/drive/folders/1q2sX5fWtPmIcd0ZspAJVUs6dZV7573Nd?usp=sharing',
//         completed: true,
//         contractor: 'YIT-yhtyma',
//         googleMap: 'https://goo.gl/maps/aJYE9r3dup1vdqDf6',
//         id: '1202378',
//         jobType: 'muuraus, rappaus',
//         projectDescription:
//           '**Peruskorjattaviin** opetustiloihin sijoittuvat Metropolian elokuva- ja tv-, esitys- ja teatteritekniikan, viestinnän ja XR-designin opetustilat sekä Helsinki XR Center.\n\nOpetustilat koostuvat muun muassa luentosaleista, studioista ja muista tiloista. Lisäksi rakennetaan kahvilatilat *keittiöineen*.',
//         projectName: 'Blominmäen jätevedenpuhdistamo',
//         projectNumber: '4878697',
//         releaseDate: '5/2020',
//         projectImage: {
//           url: 'https://www.datocms-assets.com/66399/1649496477-rsz_sunpark_the_modern_house_1-scaled-e1578586109705.webp',
//         },
//       },
//       {
//         area: '5791-12',
//         address: 'Vanha-nurmikkontie 8, Vantaa',
//         cloudLink: 'https://www.google.com/',
//         completed: false,
//         contractor: 'Skanska',
//         googleMap: 'https://goo.gl/maps/AHdK3LDaayYDJNcg6',
//         id: '9472440',
//         jobType: 'muuraus',
//         projectDescription:
//           'Meluavimmat työvaiheet, kuten raskaiden betonirakenteiden purkutyöt pyritään ajoittamaan kunkin muutosalueen lähimpien toimijoiden aukioloaikojen ulkopuolelle. \n\nRakennus- ja purkutyöt tulevat kuitenkin aiheuttamaan meluhaittaa kiinteistössä työskenteleville ja asioiville. Sisäiset ja ulkoiset liikennejärjestelyt ja työmaan aitaus vaikuttavat kiinteistön ja Hämeentien katualueen kulkureitteihin. \n\nPyydämme kaikkia noudattamaan paikalla olevia opasteita.',
//         projectName: 'Keskussairaalan H-rakennus',
//         projectNumber: '4-15173',
//         releaseDate: '1/2023',
//         projectImage: {
//           url: 'https://www.datocms-assets.com/66399/1649499071-5e96ddf888405.webp',
//         },
//       },
//       {
//         area: '478200',
//         address: 'Hansakartano 4, 02780 Espoo',
//         cloudLink: 'http://localhost:8000/#yhteystiedot',
//         completed: true,
//         contractor: 'YIT-yhtyma',
//         googleMap: 'https://goo.gl/maps/aJYE9r3dup1vdqDf6',
//         id: '5782301',
//         jobType: 'muuraus, rappaus',
//         projectDescription:
//           '**Peruskorjattaviin** opetustiloihin sijoittuvat Metropolian elokuva- ja tv-, esitys- ja teatteritekniikan, viestinnän ja XR-designin opetustilat sekä Helsinki XR Center.\n\nOpetustilat koostuvat muun muassa luentosaleista, studioista ja muista tiloista. Lisäksi rakennetaan kahvilatilat *keittiöineen*.',
//         projectName: 'Blominmäen jätevedenpuhdistamo',
//         projectNumber: '5173-45',
//         releaseDate: '12/2020',
//         projectImage: {
//           url: 'https://www.datocms-assets.com/66399/1649496477-rsz_sunpark_the_modern_house_1-scaled-e1578586109705.webp',
//         },
//       },
//       {
//         area: '145057',
//         address: 'Vanha-nurmikkontie 8, Vantaa',
//         cloudLink:
//           'https://drive.google.com/drive/folders/1KuQVWT3B7f4s-npnmUoZZ5AGPa4V6_a9?usp=sharing',
//         completed: false,
//         contractor: 'SRV Yhtiot',
//         googleMap: 'https://goo.gl/maps/AHdK3LDaayYDJNcg6',
//         id: '4524838',
//         jobType: 'muuraus',
//         projectDescription:
//           'Meluavimmat työvaiheet, kuten raskaiden betonirakenteiden purkutyöt pyritään ajoittamaan kunkin muutosalueen lähimpien toimijoiden aukioloaikojen ulkopuolelle. \n\nRakennus- ja purkutyöt tulevat kuitenkin aiheuttamaan meluhaittaa kiinteistössä työskenteleville ja asioiville. Sisäiset ja ulkoiset liikennejärjestelyt ja työmaan aitaus vaikuttavat kiinteistön ja Hämeentien katualueen kulkureitteihin. \n\nPyydämme kaikkia noudattamaan paikalla olevia opasteita.',
//         projectName: 'Keskussairaalan H-rakennus',
//         projectNumber: '149-173',
//         releaseDate: '04/2024',
//         projectImage: {
//           url: 'https://www.datocms-assets.com/66399/1649499071-5e96ddf888405.webp',
//         },
//       },
//       {
//         area: '788254',
//         address: 'Hansakartano 4, 02780 Espoo',
//         cloudLink: 'http://localhost:8000/#yhteystiedot',
//         completed: true,
//         contractor: 'YIT-yhtyma',
//         googleMap: 'https://goo.gl/maps/aJYE9r3dup1vdqDf6',
//         id: '4597367',
//         jobType: 'muuraus, rappaus',
//         projectDescription:
//           '**Peruskorjattaviin** opetustiloihin sijoittuvat Metropolian elokuva- ja tv-, esitys- ja teatteritekniikan, viestinnän ja XR-designin opetustilat sekä Helsinki XR Center.\n\nOpetustilat koostuvat muun muassa luentosaleista, studioista ja muista tiloista. Lisäksi rakennetaan kahvilatilat *keittiöineen*.',
//         projectName: 'Blominmäen jätevedenpuhdistamo',
//         projectNumber: '1273-47',
//         releaseDate: '11/2019',
//         projectImage: {
//           url: 'https://www.datocms-assets.com/66399/1649496477-rsz_sunpark_the_modern_house_1-scaled-e1578586109705.webp',
//         },
//       },
//       {
//         area: '4578-7841',
//         address: 'Vanha-nurmikkontie 8, Vantaa',
//         cloudLink: 'https://www.google.com/',
//         completed: true,
//         contractor: 'Mehilainen',
//         googleMap: 'https://goo.gl/maps/AHdK3LDaayYDJNcg6',
//         id: '5648739',
//         jobType: 'muuraus',
//         projectDescription:
//           'Meluavimmat työvaiheet, kuten raskaiden betonirakenteiden purkutyöt pyritään ajoittamaan kunkin muutosalueen lähimpien toimijoiden aukioloaikojen ulkopuolelle. \n\nRakennus- ja purkutyöt tulevat kuitenkin aiheuttamaan meluhaittaa kiinteistössä työskenteleville ja asioiville. Sisäiset ja ulkoiset liikennejärjestelyt ja työmaan aitaus vaikuttavat kiinteistön ja Hämeentien katualueen kulkureitteihin. \n\nPyydämme kaikkia noudattamaan paikalla olevia opasteita.',
//         projectName: 'Keskussairaalan H-rakennus',
//         projectNumber: '45-7873',
//         releaseDate: '07/2022',
//         projectImage: {
//           url: 'https://www.datocms-assets.com/66399/1649499071-5e96ddf888405.webp',
//         },
//       },
//     ],
//   },
//   service: {
//     title: 'muuraus palvelut',
//     description:
//       'Riofor työskentelee tälläkin hetkellä erinäisten projektien kimpussa. Alla näet listan kaikista työn alla olevista kohteista. Eri kokoiset ja eri väriset tiilet sekä laastit avaavat mahdollisuuden monimuotoisiin julkisivuihin ja eri ladontakuviot mahdollistavat näyttävätkin yksityiskohdat, joilla voidaan korostaa rakenteellista arkkitehtuuria tai tyylisuuntaa.',
//     serviceCard: [
//       {
//         id: '4502440',
//         cardTitle: 'Julkisivumuuraus',
//         cardDescription:
//           'Tiili on maailman eniten käytetty julkisivujen materiaali. Tiilimuuraus on oikein toteutettuna näyttävä, kestävä ja lähes huoltovapaa ulkoseinärakenne. \n\nMuuratut julkisivut ovat kokonaiskustannuksellisesti koko rakennuksen elinkaaren aikana erittäin kilpailukykyisiä oikein tehtyinä.',
//         icon: 'building',
//       },
//       {
//         id: '4502441',
//         cardTitle: 'Väliseinämuuraukset',
//         cardDescription:
//           'Tiili on maailman eniten käytetty julkisivujen materiaali. Tiilimuuraus on oikein toteutettuna näyttävä, kestävä ja lähes huoltovapaa ulkoseinärakenne. \n\nMuuratut julkisivut ovat kokonaiskustannuksellisesti koko rakennuksen elinkaaren aikana erittäin kilpailukykyisiä oikein tehtyinä.',
//         icon: 'house',
//       },
//       {
//         id: '4502444',
//         cardTitle: 'Korjausmuuraus',
//         cardDescription:
//           'Tiili on maailman eniten käytetty julkisivujen materiaali. Tiilimuuraus on oikein toteutettuna näyttävä, kestävä ja lähes huoltovapaa ulkoseinärakenne. \n\nMuuratut julkisivut ovat kokonaiskustannuksellisesti koko rakennuksen elinkaaren aikana erittäin kilpailukykyisiä oikein tehtyinä.',
//         icon: 'office',
//       },
//     ],
//   },
//   about: {
//     title: 'Rakennamme taloja, joissa haluat elää',
//     description:
//       'Yhtiö on toimiensa aikana vaikuttanut merkittävästi nykyaikaisen pääkaupunkiseudun arkkitehtonisen ulkonäön muodostumiseen. Riofor Muuraustyöt Oy tarjoaa monien vuosien kokemuksensa, kertyneen tietämyksen ja nykyaikaisen teknologian soveltamisen ansiosta edullisimmat tarjoukset erilaisen monimutkaisuuden tiilitehtaiden alalla. \n\nTakaamme parhaan työn laadun, noudattamisen rakennusmääräykset ja -säännöt, rakentamisen aloittamisen vähimmäisaika ja työsuhteen ja sopimuksen mukaisten velvoitteiden määräaikojen tiukka noudattaminen. Kaikki muuraustyöt suoritetaan ammattitaitoisella henkilökunnalla, jolla on ammattitaso ja työkokemus.',
//   },
// };
