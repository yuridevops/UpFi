import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

type IGetImages = {
  pageParam?: number | null
}

export default function Home(): JSX.Element {


  async function getImages({ pageParam = null }: IGetImages) {
    const response = await api.get('/api/images', {
      params: {
        after: pageParam
      }
    })
    return response.data
  }

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery('images', getImages, { getNextPageParam: (lastPage) => lastPage.after ?? null });

  const formattedData = useMemo(() => {
    return data?.pages.map(page => page.data).flat()
  }, [data]);



  // TODO RENDER LOADING SCREEN
  if (isLoading) {
    return <Loading />
  }
  // TODO RENDER ERROR SCREEN
  if (isError) {
    return <Error />
  }

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {
          hasNextPage &&
          <Button onClick={async () => { await fetchNextPage() }} mt="5">
            {isFetchingNextPage ? 'Carregando...' : 'Carregar mais'}
          </Button>
        }
      </Box>
    </>
  );
}
