"use client"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useSWR, { Fetcher } from 'swr';

const BlogDetails = ({ params }: { params: { id: number } }) => {

    const fetcher: Fetcher<Blog, string> = (url: string) => fetch(url).then((res) => res.json())

    const { data, error, isLoading } = useSWR(`http://localhost:8000/blogs/${params.id}`, fetcher,
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
    if (error) {
        return <div>{error}</div>
    }
    return (
        <Container>
            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Title: {data?.title}</Card.Title>
                    <Card.Text> 
                        {data?.content}
                    </Card.Text>
                    <Button variant="primary">Go back</Button>
                </Card.Body>
                <Card.Footer className="text-muted">Author: {data?.author}</Card.Footer>
            </Card>
        </Container>
    )
}

export default BlogDetails