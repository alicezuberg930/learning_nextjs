import { Button, Table } from 'react-bootstrap';
import CreateModal from './create.modal';
import { useState } from 'react';
import UpdateModal from './update.modal';
import Link from 'next/link';
import useSWR, { mutate } from 'swr';
import { toast } from 'react-toastify';

const AppTable: React.FC<{ blogs: Blog[] }> = ({ blogs }) => {
    const [blog, setBlog] = useState<Blog | null>(null)
    const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false)

    const handleDeleteBlog = (id: number) => {
        if (confirm("Bạn muốn xóa bài viết " + id + " ?")) {
            fetch(`http://localhost:8000/blogs/${id}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                },
            ).then(res => res.json()).then(res => {
                if (res) {
                    toast.success("Blog deleted")
                    mutate("http://localhost:8000/blogs")
                }
            })
        }
    }

    return (
        <div>
            <div className='my-3 flex justify-between'>
                <h3>Blogs</h3>
                <CreateModal />
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        blogs?.map(blog => {
                            return (
                                <tr key={blog.id}>
                                    <td>{blog.id}</td>
                                    <td>{blog.title}</td>
                                    <td>{blog.author}</td>
                                    <td className='flex gap-3'>
                                        <Link className='btn btn-primary' href={`/blogs/${blog.id}`}>View</Link>
                                        <Button variant='warning' onClick={() => {
                                            setShowModalUpdate(!showModalUpdate)
                                            setBlog(blog)
                                        }}>Edit</Button>
                                        <Button variant='danger' onClick={() => handleDeleteBlog(blog?.id)}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <UpdateModal
                showModalUpdate={showModalUpdate}
                setShowModalUpdate={setShowModalUpdate}
                blog={blog}
                setBlog={setBlog} />
        </div >
    )
}

export default AppTable