import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered  >
      <ModalOverlay />

      <ModalContent justifyItems="center" alignItems="center" maxW="900px" bg="pGray.800">
        <ModalBody mt="0" pt="0">
          <Image src={imgUrl} maxH="600px" maxW="900px" />
        </ModalBody>
        <ModalFooter justifyContent="flex-start" alignItems="center" w="full" maxH="8">
          <Link href={imgUrl} isExternal color="pGray.50">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>

    </Modal>
  )
}
