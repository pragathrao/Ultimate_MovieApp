import { useState } from 'react';
import { Modal, Button, Group, AspectRatio } from '@mantine/core';
import { MdExitToApp } from 'react-icons/md';

function ModalComp({ id }) {
    const [opened, setOpened] = useState(false);

    const trailer = id?.find((data) => data.type = "Trailer")
    console.log(trailer)

    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                withCloseButton={false}
                centered
                size="xl"
            >
                <AspectRatio ratio={16 / 9}>
                    <iframe
                        src={`https://www.youtube.com/embed/${trailer?.key}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                    />
                </AspectRatio>
            </Modal>
            <Button onClick={() => setOpened(true)}>Watch Trailer</Button>
        </>
    );
}

export default ModalComp