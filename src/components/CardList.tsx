import { Box, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onOpen, onClose } = useDisclosure()
  // TODO SELECTED IMAGE URL STATE
  const [modalUrl, setModalUrl] = useState('')
  // TODO FUNCTION HANDLE VIEW IMAGE
  
  function handleImage(url: string) {
    setModalUrl(url)
    onOpen()
  }



  return (
    <>
      <SimpleGrid columns={3} spacing="40px" maxW="960px"  >
        {
          cards.map(card =>
            <Card data={card} viewImage={() => handleImage(card.url)} />
          )
        }
      </SimpleGrid>
      <ModalViewImage imgUrl={modalUrl} isOpen={isOpen} onClose={onClose} />
    </>
  );
}
