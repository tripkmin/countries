import Main from 'layouts/Main';
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
  IconInfo,
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
import { useEffect, useState } from 'react';
import useInterval from 'hooks/useInterval';
import { Button } from 'components/common/Button';
import { motion } from 'framer-motion';
import { fadeInUp } from 'styles/animation';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Error from 'components/Error';

export default function Nation() {
  const [transCount, setTransCount] = useState(0);
  const { name } = useParams();

  const { data, isLoading, isError } = useQuery<NationT>({
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
    <Main>
      {isError ? (
        <Error />
      ) : (
        <>
          <HeadSection
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit">
            {isLoading ? (
              <Skeleton width={350} height={210}></Skeleton>
            ) : (
              <Flag src={data?.flags.svg}></Flag>
            )}
            <Header>
              {isLoading ? (
                <Skeleton width={200}></Skeleton>
              ) : (
                <GlobalNamesBox>
                  <GlobalNames $transY={transCount}>
                    {getTranslations(data?.translations)?.map((globalName, idx) => (
                      <p key={idx}>{globalName}</p>
                    ))}
                  </GlobalNames>
                </GlobalNamesBox>
              )}

              {isLoading ? (
                <Skeleton width={300} height="2.5rem"></Skeleton>
              ) : (
                <NationName>{data?.name.official}</NationName>
              )}
            </Header>
          </HeadSection>
          <InfoSection
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit">
            <SubHead>INFO</SubHead>
            <NationInfoList>
              {InfoData.map(item => (
                <NationInfoCard isLoading={isLoading} key={item.key} nation={item} />
              ))}
            </NationInfoList>
          </InfoSection>
          <MapSection variants={fadeInUp} initial="initial" animate="animate" exit="exit">
            <SubHead>MAPS</SubHead>
            {isLoading ? (
              <Skeleton width="100%" height={700}></Skeleton>
            ) : (
              <GoogleMapsWrapper>
                <GoogleMaps latlng={data?.latlng}></GoogleMaps>
              </GoogleMapsWrapper>
            )}

            <NationMapCard isLoading={isLoading} borderData={mapData}></NationMapCard>
          </MapSection>
          <ButtonSection>
            <Link to="/">
              <Button>
                <IconArrowBack />
                Back
              </Button>
            </Link>
          </ButtonSection>
        </>
      )}
    </Main>
  );
}

const HeadSection = styled(motion.section)`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  border-bottom: 1px solid ${props => props.theme.border.secondary};
  transition: border-bottom ${timer.default};
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Flag = styled.img`
  width: 350px;
  border-radius: 10px;
  box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.05);
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
    color: ${props => props.theme.font.secondary};
  }

  @media screen and (max-width: ${size.mobile}) {
    p {
      font-size: 14px;
    }
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

const InfoSection = styled(motion.section)`
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

const MapSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const ButtonSection = styled.section`
  display: flex;
  justify-content: flex-end;
`;
