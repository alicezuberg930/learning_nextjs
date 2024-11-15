
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { mutate } from 'swr';

const UpdateModal: React.FC<{
    showModalUpdate?: boolean,
    setShowModalUpdate: (val: boolean) => void,
    blog: Blog | null,
    setBlog: (val: Blog | null) => void
}> = ({ showModalUpdate, setShowModalUpdate, blog, setBlog }) => {

    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [author, setAuthor] = useState<string>("")
    const [content, setContent] = useState<string>("")

    useEffect(() => {
        if (blog) {
            setBlog(blog)
            setTitle(blog.title)
            setAuthor(blog.author)
            setContent(blog.content)
        }
    }, [blog])

    const handleSubmit = () => {
        if (!title) {
            toast.error("Empty title")
            return
        }
        if (!author) {
            toast.error("Empty author")
            return
        }
        if (!content) {
            toast.error("Empty content")
            return
        }
        fetch(`http://localhost:8000/blogs/${blog?.id}`,
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, author, content })
            }
        ).then(res => res.json()).then(res => {
            if (res) {
                toast.success("Blog updated")
                handleCloseModal()
                mutate("http://localhost:8000/blogs")
            }
        })
        console.log(title, author);
    }

    const handleCloseModal = () => {
        setShowModalUpdate(false)
    }

    return (
        <>
            <Modal
                show={showModalUpdate}
                onHide={handleCloseModal}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" placeholder="" value={author} onChange={(e) => setAuthor(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" rows={6} value={content} onChange={(e) => setContent(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UpdateModal