import Main from 'layouts/Main';
import Navbar from 'components/Navbar';
import { useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { NationT } from 'types/type';
import { getLanguages, getSymbols, getTranslations, mapCca3ToName } from 'utils/utils';
import {
  IconBorderNation,
  IconCapital,
  IconCurrency,
  IconDomain,
  IconLanguages,
  IconName,
  IconPeople,
  IconRegion,
  IconSubRegion,
  IconTime,
} from 'assets/icons';
import NationInfoCard from 'components/NationInfoCard';
import styled from 'styled-components';
import { GoogleMapsWrapper } from 'layouts/GoogleMaps';
import { GoogleMaps } from 'components/Maps';
import { size, timer } from 'styles/constants';
import NationMapCard from 'components/NationMapCard';
import Footer from 'components/Footer';

export default function Nation() {
  const { name } = useParams();

  const { data, error } = useQuery<NationT>({
    queryKey: ['nation', name],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${name}?fullText=true`
        );
        const data = await res.json();
        return data[0];
      } catch (error) {
        console.error(error);
        throw new Error();
      }
    },
  });

  const InfoData = [
    { icon: <IconName />, key: 'Native Name', data: data?.name.official },
    { icon: <IconPeople />, key: 'Population', data: data?.population.toLocaleString() },
    { icon: <IconCapital />, key: 'Capital', data: data?.capital?.[0] },
    { icon: <IconRegion />, key: 'Region', data: data?.region },
    { icon: <IconSubRegion />, key: 'Sub Region', data: data?.subregion },
    { icon: <IconTime />, key: 'Time Zones', data: data?.timezones?.[0] },
    { icon: <IconLanguages />, key: 'Languages', data: getLanguages(data?.languages) },
    { icon: <IconCurrency />, key: 'Currencies', data: getSymbols(data?.currencies) },
    { icon: <IconDomain />, key: 'Top Level Domain', data: data?.tld?.[0] },
  ];

  const mapData = {
    icon: <IconBorderNation />,
    key: 'Border Countries',
    data: data?.borders?.map(fifa => mapCca3ToName(fifa)),
  };

  return (
    <>
      <Navbar />
      <Main>
        <HeadSection>
          <Flag src={data?.flags.svg}></Flag>
          {/* <CoatOfArms src={data?.coatOfArms.svg}></CoatOfArms> */}
          <Test>
            {getTranslations(data?.translations)?.map(el => (
              <p>{el}</p>
            ))}
          </Test>
          <NationName>{data?.name.official}</NationName>
        </HeadSection>
        <InfoSection>
          <SubHead>INFO</SubHead>
          <NationInfoList>
            {InfoData.map(item => (
              <NationInfoCard nation={item} />
            ))}
          </NationInfoList>
        </InfoSection>
        <MapSection>
          <GoogleMapsWrapper>
            <GoogleMaps latlng={data?.latlng}></GoogleMaps>
          </GoogleMapsWrapper>
          <NationMapCard borderData={mapData}></NationMapCard>
        </MapSection>
      </Main>
      <Footer />
    </>
  );
}

const HeadSection = styled.section`
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  /* border-bottom: 1px solid #aaa; */

  &::after {
    content: '';
    width: 80%;
    border-bottom: 1px solid #eee;
    position: absolute;
    bottom: -20%;
  }
`;

const Flag = styled.img`
  width: 350px;
  border-radius: 10px;
`;

const CoatOfArms = styled.img`
  width: 75px;
`;

const Test = styled.div`
  height: 1.8rem;
  overflow: hidden;
  text-align: center;
  transition: all ${timer.default};
`;

const NationName = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  text-wrap: balance;
`;

const SubHead = styled.h2`
  font-size: 2rem;
  text-align: center;
  letter-spacing: 0.5rem;
`;

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
const NationInfoList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media screen and (max-width: ${size.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${size.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const MapSection = styled.section``;
