'use client';

import {AppShell, Burger, Flex, NavLink, Title} from "@mantine/core";
import {IconActivity, IconFingerprint, IconGauge} from '@tabler/icons-react';

import {useDisclosure} from "@mantine/hooks";
import {usePathname} from "next/navigation";

const data = [
    {   icon: IconGauge,
        label: 'Home',
        href: '/'
    },
    {
        icon: IconFingerprint,
        label: 'Accounts',
        href: '/accounts'
    },
    {
        icon: IconActivity,
        label: 'Logging',
        href: '/logging'
    },
];

export default function ClientAppShell({
                                           children,
                                       }: Readonly<{
    children: React.ReactNode;
}> ) {

    const [opened, { toggle }] = useDisclosure(true);
    const pathName = usePathname();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: {
                    mobile: !opened,
                    desktop: !opened,
                },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Flex align='center' gap={10}>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        size="lg"
                    />
                    <Title size='lg'>LOGO</Title>
                </Flex>
            </AppShell.Header>

            <AppShell.Navbar p="md">
                {
                    data.map((item, index) => (
                        <NavLink
                            href={item.href}
                            key={item.label}
                            active={pathName === item.href}
                            label={item.label}
                            leftSection={<item.icon size="1rem" stroke={1.5} />}

                        />
                    ))
                }
            </AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    );
}
