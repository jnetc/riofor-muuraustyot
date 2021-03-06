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
const GoToTopButton = dynamic(
  () => import('@Components/go-to-top/GoToTopButton')
);
import { Details } from '@Components/projects/details/Details';
import { Contacts } from '@Components/main/contacts';

const Home: NextPage = ({
  data,
  language,
  languages,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [details, openDetails] = useState({ active: false });
  const [contacts, openContacts] = useState({ active: false });

  if (!data) {
    return <main>Sorry! This page not found.</main>;
  }
  const seo = data as DataType;

  return (
    <Store.Provider value={{ language, languages, data }}>
      <Head>
        <title>{seo._site.globalSeo.fallbackSeo.title}</title>
        <meta
          name="description"
          content={seo._site.globalSeo.fallbackSeo.description}
        />
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

  return {
    props: {
      data,
      language: context.locale,
      languages: context.locales,
    },
  };
};

// const data = {
//   home: {
//     title: 'etsitk?? muurareit???',
//     phone: '+358405815359',
//     email: 'rioformuuraustyotoy@gmail.com',
//     address: 'M??enrinne 14, 02160 Espoo',
//     person: 'Maria Stefanidou',
//     description:
//       'Olemme perustaneet itsemme alan ammattilaisiksi ja meill?? on laaja kokemus muurauksen rakentamisesta.',
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
//           '**Peruskorjattaviin** opetustiloihin sijoittuvat Metropolian elokuva- ja tv-, esitys- ja teatteritekniikan, viestinn??n ja XR-designin opetustilat sek?? Helsinki XR Center.\n\nOpetustilat koostuvat muun muassa luentosaleista, studioista ja muista tiloista. Lis??ksi rakennetaan kahvilatilat *keitti??ineen*.',
//         projectName: 'Blominm??en j??tevedenpuhdistamo',
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
//           'Meluavimmat ty??vaiheet, kuten raskaiden betonirakenteiden purkuty??t pyrit????n ajoittamaan kunkin muutosalueen l??himpien toimijoiden aukioloaikojen ulkopuolelle. \n\nRakennus- ja purkuty??t tulevat kuitenkin aiheuttamaan meluhaittaa kiinteist??ss?? ty??skenteleville ja asioiville. Sis??iset ja ulkoiset liikennej??rjestelyt ja ty??maan aitaus vaikuttavat kiinteist??n ja H??meentien katualueen kulkureitteihin. \n\nPyyd??mme kaikkia noudattamaan paikalla olevia opasteita.',
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
//           '**Peruskorjattaviin** opetustiloihin sijoittuvat Metropolian elokuva- ja tv-, esitys- ja teatteritekniikan, viestinn??n ja XR-designin opetustilat sek?? Helsinki XR Center.\n\nOpetustilat koostuvat muun muassa luentosaleista, studioista ja muista tiloista. Lis??ksi rakennetaan kahvilatilat *keitti??ineen*.',
//         projectName: 'Blominm??en j??tevedenpuhdistamo',
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
//           'Meluavimmat ty??vaiheet, kuten raskaiden betonirakenteiden purkuty??t pyrit????n ajoittamaan kunkin muutosalueen l??himpien toimijoiden aukioloaikojen ulkopuolelle. \n\nRakennus- ja purkuty??t tulevat kuitenkin aiheuttamaan meluhaittaa kiinteist??ss?? ty??skenteleville ja asioiville. Sis??iset ja ulkoiset liikennej??rjestelyt ja ty??maan aitaus vaikuttavat kiinteist??n ja H??meentien katualueen kulkureitteihin. \n\nPyyd??mme kaikkia noudattamaan paikalla olevia opasteita.',
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
//           '**Peruskorjattaviin** opetustiloihin sijoittuvat Metropolian elokuva- ja tv-, esitys- ja teatteritekniikan, viestinn??n ja XR-designin opetustilat sek?? Helsinki XR Center.\n\nOpetustilat koostuvat muun muassa luentosaleista, studioista ja muista tiloista. Lis??ksi rakennetaan kahvilatilat *keitti??ineen*.',
//         projectName: 'Blominm??en j??tevedenpuhdistamo',
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
//           'Meluavimmat ty??vaiheet, kuten raskaiden betonirakenteiden purkuty??t pyrit????n ajoittamaan kunkin muutosalueen l??himpien toimijoiden aukioloaikojen ulkopuolelle. \n\nRakennus- ja purkuty??t tulevat kuitenkin aiheuttamaan meluhaittaa kiinteist??ss?? ty??skenteleville ja asioiville. Sis??iset ja ulkoiset liikennej??rjestelyt ja ty??maan aitaus vaikuttavat kiinteist??n ja H??meentien katualueen kulkureitteihin. \n\nPyyd??mme kaikkia noudattamaan paikalla olevia opasteita.',
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
//           '**Peruskorjattaviin** opetustiloihin sijoittuvat Metropolian elokuva- ja tv-, esitys- ja teatteritekniikan, viestinn??n ja XR-designin opetustilat sek?? Helsinki XR Center.\n\nOpetustilat koostuvat muun muassa luentosaleista, studioista ja muista tiloista. Lis??ksi rakennetaan kahvilatilat *keitti??ineen*.',
//         projectName: 'Blominm??en j??tevedenpuhdistamo',
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
//           'Meluavimmat ty??vaiheet, kuten raskaiden betonirakenteiden purkuty??t pyrit????n ajoittamaan kunkin muutosalueen l??himpien toimijoiden aukioloaikojen ulkopuolelle. \n\nRakennus- ja purkuty??t tulevat kuitenkin aiheuttamaan meluhaittaa kiinteist??ss?? ty??skenteleville ja asioiville. Sis??iset ja ulkoiset liikennej??rjestelyt ja ty??maan aitaus vaikuttavat kiinteist??n ja H??meentien katualueen kulkureitteihin. \n\nPyyd??mme kaikkia noudattamaan paikalla olevia opasteita.',
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
//       'Riofor ty??skentelee t??ll??kin hetkell?? erin??isten projektien kimpussa. Alla n??et listan kaikista ty??n alla olevista kohteista. Eri kokoiset ja eri v??riset tiilet sek?? laastit avaavat mahdollisuuden monimuotoisiin julkisivuihin ja eri ladontakuviot mahdollistavat n??ytt??v??tkin yksityiskohdat, joilla voidaan korostaa rakenteellista arkkitehtuuria tai tyylisuuntaa.',
//     serviceCard: [
//       {
//         id: '4502440',
//         cardTitle: 'Julkisivumuuraus',
//         cardDescription:
//           'Tiili on maailman eniten k??ytetty julkisivujen materiaali. Tiilimuuraus on oikein toteutettuna n??ytt??v??, kest??v?? ja l??hes huoltovapaa ulkosein??rakenne. \n\nMuuratut julkisivut ovat kokonaiskustannuksellisesti koko rakennuksen elinkaaren aikana eritt??in kilpailukykyisi?? oikein tehtyin??.',
//         icon: 'building',
//       },
//       {
//         id: '4502441',
//         cardTitle: 'V??lisein??muuraukset',
//         cardDescription:
//           'Tiili on maailman eniten k??ytetty julkisivujen materiaali. Tiilimuuraus on oikein toteutettuna n??ytt??v??, kest??v?? ja l??hes huoltovapaa ulkosein??rakenne. \n\nMuuratut julkisivut ovat kokonaiskustannuksellisesti koko rakennuksen elinkaaren aikana eritt??in kilpailukykyisi?? oikein tehtyin??.',
//         icon: 'house',
//       },
//       {
//         id: '4502444',
//         cardTitle: 'Korjausmuuraus',
//         cardDescription:
//           'Tiili on maailman eniten k??ytetty julkisivujen materiaali. Tiilimuuraus on oikein toteutettuna n??ytt??v??, kest??v?? ja l??hes huoltovapaa ulkosein??rakenne. \n\nMuuratut julkisivut ovat kokonaiskustannuksellisesti koko rakennuksen elinkaaren aikana eritt??in kilpailukykyisi?? oikein tehtyin??.',
//         icon: 'office',
//       },
//     ],
//   },
//   about: {
//     title: 'Rakennamme taloja, joissa haluat el????',
//     description:
//       'Yhti?? on toimiensa aikana vaikuttanut merkitt??v??sti nykyaikaisen p????kaupunkiseudun arkkitehtonisen ulkon????n muodostumiseen. Riofor Muurausty??t Oy tarjoaa monien vuosien kokemuksensa, kertyneen tiet??myksen ja nykyaikaisen teknologian soveltamisen ansiosta edullisimmat tarjoukset erilaisen monimutkaisuuden tiilitehtaiden alalla. \n\nTakaamme parhaan ty??n laadun, noudattamisen rakennusm????r??ykset ja -s????nn??t, rakentamisen aloittamisen v??himm??isaika ja ty??suhteen ja sopimuksen mukaisten velvoitteiden m????r??aikojen tiukka noudattaminen. Kaikki muurausty??t suoritetaan ammattitaitoisella henkil??kunnalla, jolla on ammattitaso ja ty??kokemus.',
//   },
// };
