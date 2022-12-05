import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Upload() {

      const handleClick = () =>{
        var name = JSON.parse(localStorage.getItem('user-info'));
        var name1 = name.username;
        let avatar1 = name.avatar;
        let title = document.querySelector("#title").value;
        let status1 = " ";
        let description1 = document.querySelector("#description").value;
        let image1 = document.querySelector("#image").value;


        
        
        if(title === ''){
            title = "chưa có gì";
        }

        if(description1 === ''){
            description1 = "no status";
        }

        const post = {
                        name : name1,
                        title1 :title,
                        avatar: avatar1,
                        title : status1,
                        description : description1,
                        images :[image1],
                        like:0,
                        comments:[""]
        }
        console.log(post);
        console.log(typeof(post));
        if(image1 !== ''){
                    try {
                       fetch('http://localhost:3001/posts',{
                        method:'post',
                        headers:{
                            'Content-Type': 'application/json'
                        },
                        body:JSON.stringify(post)
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
            <Form.Label>Tiitle</Form.Label>
            <Form.Control id="title" type="text"  placeholder="Enter title"  />
        </Form.Group>


        <Form.Group className="mb-3" >
            <Form.Label>Description</Form.Label>
            <Form.Control id="description" type="text"  placeholder="Enter description" />
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label>Image</Form.Label>
            <Form.Control id="image" type="text"  placeholder="Enter image url" />
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