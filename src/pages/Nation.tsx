import Main from 'layouts/Main';
import Navbar from 'components/Navbar';
import { useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { NationT } from 'types/type';
import { getLanguages, getSymbols, getTranslations } from 'utils/utils';
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

export default function Nation() {
  const { name } = useParams();

  const { data, error } = useQuery<NationT>({
    queryKey: ['nation'],
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

  return (
    <>
      <Navbar />
      <Main>
        <HeadSection>
          <Flag src={data?.flags.svg}></Flag>
          {getTranslations(data?.translations)?.map(el => (
            <p>{el}</p>
          ))}
          <h1>{data?.name.official}</h1>
        </HeadSection>
        <h1>INFO</h1>
        {InfoData.map(item => (
          <NationInfoCard nation={item} />
        ))}
        <GoogleMapsWrapper>
          <GoogleMaps latlng={data?.latlng}></GoogleMaps>
        </GoogleMapsWrapper>
      </Main>
    </>
  );
}

const HeadSection = styled.section`
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Flag = styled.img`
  width: 350px;
  border-radius: 10px;
`;
