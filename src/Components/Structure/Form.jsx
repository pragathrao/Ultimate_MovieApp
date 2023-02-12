import styled from '@emotion/styled';
import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { openSpotlight } from '@mantine/spotlight';
import { useContext } from 'react';
import { CreateContext } from '../../Context/Context';
import { LeftButton } from '../Styles/LeftbarStyles';

function Form() {
    const form = useForm({
        initialValues: {
            name: " "
        },

        validate: {
            name: (value) => (value.length < 2 ? 'First name must have at least 2 letters' : null),
        },
    });

    const { state: { list }, AddtoListData } = useContext(CreateContext)






    return (
        <Box sx={{ maxWidth: 300 }} mx="auto">
            <form onSubmit={form.onSubmit((values) => AddtoListData({
                list: list.filter((item,
                    index) => list.indexOf(item) === index), name: values.name
            }))}>
                <TextInput withAsterisk placeholder="Enter Your title" className='input'{...form.getInputProps('name')} />
                <LeftButton className="formbutton" onClick={() => openSpotlight()}>Choose Your Movies</LeftButton>
                <Group position="right" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Box>
    );
}

export default Form