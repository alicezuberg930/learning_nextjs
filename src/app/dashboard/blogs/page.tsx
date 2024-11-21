'use client'
import AppTable from '@/components/table';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import useSWR from 'swr';


function BasicExample() {
    const fetcher = (url: string) => fetch(url).then((res) => res.json())

    const { data, error, isLoading } = useSWR("http://localhost:8000/blogs", fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    )
    console.log(data);
    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <Container>
            <AppTable blogs={data?.sort((a: any, b: any) => b.id - a.id)} />
        </Container>
    );
}

export default BasicExample;