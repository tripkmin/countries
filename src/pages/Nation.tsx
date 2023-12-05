import Main from 'layouts/Main';
import Navbar from 'components/Navbar';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { NationT } from 'types/type';
import { getLanguages, getSymbols, getTranslations, mapCca3ToName } from 'utils/utils';
import {
  IconArrowBack,
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
import { useEffect, useState } from 'react';
import useInterval from 'hooks/useInterval';
import { Button } from 'components/common/Button';

export default function Nation() {
  const [transCount, setTransCount] = useState(0);
  const { name } = useParams();

  const { data } = useQuery<NationT>({
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

  const globalNames = getTranslations(data?.translations) || [];

  useInterval(() => {
    setTransCount(prev => (prev >= globalNames.length - 1 ? 0 : prev + 1));
  }, 2000);

  useEffect(() => {
    setTransCount(0);
  }, [name]);

  return (
    <>
      <Navbar />
      <Main>
        <HeadSection>
          <Flag src={data?.flags.svg}></Flag>
          <Header>
            <GlobalNamesBox>
              <GlobalNames $transY={transCount}>
                {getTranslations(data?.translations)?.map(globalName => (
                  <p>{globalName}</p>
                ))}
              </GlobalNames>
            </GlobalNamesBox>
            <NationName>{data?.name.official}</NationName>
          </Header>
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
          <SubHead>MAPS</SubHead>
          <GoogleMapsWrapper>
            <GoogleMaps latlng={data?.latlng}></GoogleMaps>
          </GoogleMapsWrapper>
          <NationMapCard borderData={mapData}></NationMapCard>
        </MapSection>
        <ButtonSection>
          <Link to="/">
            <Button>
              <IconArrowBack />
              Back
            </Button>
          </Link>
        </ButtonSection>
      </Main>
      <Footer />
    </>
  );
}

const HeadSection = styled.section`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  position: relative;

  border-radius: 20px;
`;

const Header = styled.div``;
const Flag = styled.img`
  width: 350px;
  border-radius: 10px;
`;

const CoatOfArms = styled.img`
  width: 75px;
`;

const GlobalNamesBox = styled.div`
  overflow: hidden;
`;

const GlobalNames = styled.div<{ $transY: number }>`
  height: 28px;
  text-align: center;
  transition: all ${timer.default};
  transform: translateY(${props => props.$transY * -100}%);

  p {
    height: 28px;
  }
`;

const NationName = styled.h1`
  line-height: 120%;
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

const MapSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const ButtonSection = styled.section`
  display: flex;
  justify-content: flex-end;
`;
