import { useContext, useEffect, useState } from 'react';
import { Drawer, Button, Group } from '@mantine/core';
import Form from './Form';
import { CreateContext } from '../../Context/Context';

function ListDrawer({ data, changeit }) {

    const { state: { list }, ClearList } = useContext(CreateContext)

    function Close() {
        changeit(false)
        ClearList()


    }

    return (
        <>
            <Drawer
                opened={data}
                onClose={() => Close()}
                title="Add Bookmarks"
                padding="xl"
                size="xl"
                sx={{ zIndex: "10" }}

            >
                <Form />
            </Drawer>
        </>
    );
}

export default ListDrawer