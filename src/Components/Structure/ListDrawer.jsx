import { useContext, useEffect, useState } from 'react';
import { Drawer, Button, Group } from '@mantine/core';
import Form from './Form';
import { CreateContext } from '../../Context/Context';

function ListDrawer({ data, changeit }) {

    const { state: { list } } = useContext(CreateContext)

    function Close() {
        changeit(false)

    }

    return (
        <>
            <Drawer
                opened={data}
                onClose={() => Close()}
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