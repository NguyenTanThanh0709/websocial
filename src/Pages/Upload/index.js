import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Upload() {

      const handleClick = () =>{
        let name1 = document.querySelector("#name").value;
        let title = document.querySelector("#title").value;
        let status1 = document.querySelector("#status").value;
        let description1 = document.querySelector("#description").value;
        let image1 = document.querySelector("#image").value;

        
        if(name1 === ''){
            name1 = "Vô danh";
        }
        if(title === ''){
            title = "chưa có gì";
        }

        if(status1 === ''){
            status1 = "vài thứ lung tung";
        }

        if(description1 === ''){
            description1 = "no status";
        }

        const post = {
                        name : name1,
                        title1 :title,
                        avatar: "https://phunugioi.com/wp-content/uploads/2020/10/anh-dai-dien-avt-anime-1.jpg",
                        title : status1,
                        description : description1,
                        images :[image1],
                        like:0,
                        comments:[]
        }
        console.log(post);
        if(image1 !== ''){
                    try {
                       fetch('http://localhost:3001/posts',{
                        method:'post',
                        headers:{
                            'Content-Type': 'application/json'
                        },
                        body:JSON.stringify({post})
                       })
                       .then(data => data.json())
                    } catch (e) {
                        console.log(e)
                    }
        }
    }


    return ( 
    <Form>
        <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control required id="name" type="text"  placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label>Tiitle</Form.Label>
            <Form.Control required id="title" type="text"  placeholder="Enter title"  />
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label>Status</Form.Label>
            <Form.Control required id="status" type="text"  placeholder="Enter status" />
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label>Description</Form.Label>
            <Form.Control required id="description" type="text"  placeholder="Enter description" />
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label>Image</Form.Label>
            <Form.Control required id="image" type="text"  placeholder="Enter image" />
        </Form.Group>

        <Button variant="primary" type="button" onClick ={()=>{
                            handleClick()
                        }}>
            Submit
        </Button >
    </Form>

     );
}

export default Upload;