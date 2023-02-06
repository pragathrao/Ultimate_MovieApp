import { useState } from 'react';
import { Drawer, Button, Group } from '@mantine/core';
import Form from './Form';

function ListDrawer({ data, changeit }) {

    return (
        <>
            <Drawer
                opened={data}
                onClose={() => changeit(false)}
                title="Register"
                padding="xl"
                size="xl"
            >
                <Form />
            </Drawer>
        </>
    );
}

export default ListDrawer