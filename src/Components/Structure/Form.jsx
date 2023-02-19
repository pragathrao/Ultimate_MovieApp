import { TextInput, Checkbox, Button, Group, Box, Popover, Text } from '@mantine/core';
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
            name: (value) => (value.length < 3 ? 'List name must have at least 3 letters' : null),
        },
    });

    const { state: { list }, AddtoListData } = useContext(CreateContext)

    return (
        <Box sx={{ maxWidth: 300 }} mx="auto">
            <form onSubmit={
                form.onSubmit((values) => AddtoListData({
                    list: list.filter((item, index) => list.indexOf(item) === index), name: values.name
                }))
            }>
                <TextInput withAsterisk label="Enter The Name of the List" placeholder="Enter Your title" {...form.getInputProps('name')} />
                <LeftButton className="formbutton" onClick={() => openSpotlight()}>Choose Your Movies</LeftButton>
                <Group position="right" mt="md">
                    <Popover width={200} position="bottom" withArrow shadow="md">
                        <Popover.Target>
                            <Button type="submit">Submit</Button>
                        </Popover.Target>

                        {list.length > 0 ?
                            < Popover.Dropdown >
                                <Text size="sm">List Created, Sucessfully</Text>
                            </Popover.Dropdown> : ""
                        }

                    </Popover>
                </Group>
            </form>
        </Box >
    );
}

export default Form

